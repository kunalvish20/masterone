/**
 * Application-wide constants
 */

export const APP_NAME = 'MasterOne';
export const APP_DESCRIPTION = 'Your Personal Startup Mentor — Get Expert Startup Advice, Powered by AI';

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://fg-backend.onrender.com',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
} as const;

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
  ABOUT: '/about',
  HOW_IT_WORKS: '/how-it-works',
  BOOK_SUMMARIES: '/book-summaries',
} as const;

export const POLLING_INTERVALS = {
  CHAT_HISTORY: 5000, // 5 seconds (reduced from 2s for better performance)
  NOTIFICATIONS: 30000, // 30 seconds
} as const;

export const CACHE_KEYS = {
  CHAT_SESSION: 'chatSessionId',
  USER_PREFERENCES: 'userPreferences',
} as const;

export const IMAGE_DOMAINS = [
  'utfs.io',
  'images.unsplash.com',
  'i.ytimg.com',
  'images.pexels.com',
  'i.pravatar.cc',
] as const;