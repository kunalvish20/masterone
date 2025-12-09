import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '@/lib/api-client';
import { POLLING_INTERVALS } from '@/lib/constants';
import { logger } from '@/lib/logger';
import { useUser } from '@clerk/nextjs';

interface Chat {
  _id: string;
  title: string;
  createdAt: string;
}

export function useChatHistory() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  const fetchChats = useCallback(async () => {
    if (!user) return;
    
    try {
      const data = await apiClient.get<{ success: boolean; data: Chat[] }>(
        `/api/v1/chat/user/${user.id}`
      );
      
      if (data.success) {
        setChats(data.data);
      }
    } catch (error) {
      logger.error('Error fetching chats:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // Initial fetch
  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  // Set up polling for updates with improved interval
  useEffect(() => {
    const interval = setInterval(fetchChats, POLLING_INTERVALS.CHAT_HISTORY);
    return () => clearInterval(interval);
  }, [fetchChats]);

  return { chats, isLoading, refetch: fetchChats };
}