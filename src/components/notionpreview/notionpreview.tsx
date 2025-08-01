'use client';

import React, { useEffect, useState } from 'react';

interface NotionData {
  title: string;
  description: string;
  url: string;
}

const NotionPreview: React.FC = () => {
  const [data, setData] = useState<NotionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        const response = await fetch('/api/notion-data'); // update with your actual API route
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch Notion data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotionData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4">
      {data.map((item, index) => (
        <div key={index} className="p-4 border rounded shadow bg-white dark:bg-zinc-900">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Open
          </a>
        </div>
      ))}
    </div>
  );
};

export default NotionPreview;
