'use client';

import React, { useEffect, useState } from "react";

interface Block {
  id: number;
  content: string;
}

const notionpreview = () => {
  const [blocks, setBlocks] = useState<Block[]>(() => {
    const saved = localStorage.getItem("notionBlocks");
    return saved ? JSON.parse(saved) : [{ id: Date.now(), content: "" }];
  });

  useEffect(() => {
    localStorage.setItem("notionBlocks", JSON.stringify(blocks));
  }, [blocks]);

  const handleChange = (id: number, value: string) => {
    setBlocks((prev) =>
      prev.map((block) => (block.id === id ? { ...block, content: value } : block))
    );
  };

  const addBlock = () => {
    setBlocks([...blocks, { id: Date.now(), content: "" }]);
  };

  const deleteBlock = (id: number) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold mb-8 text-center">📘 Notion Preview</h1>
      <div className="space-y-6">
        {blocks.map((block) => (
          <div key={block.id} className="relative">
            <textarea
              value={block.content}
              onChange={(e) => handleChange(block.id, e.target.value)}
              className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Write your note here..."
            />
            <button
              onClick={() => deleteBlock(block.id)}
              className="absolute top-2 right-2 text-red-500 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={addBlock}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          ➕ Add Block
        </button>
      </div>
    </div>
  );
};

export default notionpreview;
