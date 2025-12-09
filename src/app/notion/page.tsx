'use client';

import NotionPreview from "@/components/notionpreview/notionpreview";

export default function NotionPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notion Resources</h1>
      <NotionPreview />
    </main>
  );
}
