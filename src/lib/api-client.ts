/**
 * Centralized API client with error handling and retry logic
 */

import { API_CONFIG } from './constants';
import { logger } from './logger';

interface FetchOptions extends RequestInit {
  timeout?: number;
  retries?: number;
}

class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchWithTimeout(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { timeout = API_CONFIG.TIMEOUT, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function fetchWithRetry(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { retries = API_CONFIG.RETRY_ATTEMPTS, ...fetchOptions } = options;
  let lastError: Error | null = null;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetchWithTimeout(url, fetchOptions);
      
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new ApiError(
          data.message || `HTTP error! status: ${response.status}`,
          response.status,
          data
        );
      }
      
      return response;
    } catch (error) {
      lastError = error as Error;
      logger.warn(`API request failed (attempt ${i + 1}/${retries})`, { url, error });
      
      if (i < retries - 1) {
        // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
  }

  logger.error('API request failed after all retries', { url, error: lastError });
  throw lastError;
}

export const apiClient = {
  async get<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    const response = await fetchWithRetry(url, {
      ...options,
      method: 'GET',
    });
    return response.json();
  },

  async post<T>(endpoint: string, data?: unknown, options?: FetchOptions): Promise<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    const response = await fetchWithRetry(url, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    return response.json();
  },

  async put<T>(endpoint: string, data?: unknown, options?: FetchOptions): Promise<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    const response = await fetchWithRetry(url, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    return response.json();
  },

  async delete<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    const response = await fetchWithRetry(url, {
      ...options,
      method: 'DELETE',
    });
    return response.json();
  },
};

export { ApiError };