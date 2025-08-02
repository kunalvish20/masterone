'use client';

import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Mock data - replace with your actual data source
const mockBooks = [
  {
    _id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImageUrl: 'https://images.pexels.com/photos/31889976/pexels-photo-31889976.jpeg',
    purchaseLink: 'https://www.amazon.com/Atomic-Habits-James-Clear/dp/0735211299',
    tags: 'Productivity'
  },
  {
    _id: '2',
    title: 'Deep Work',
    author: 'Cal Newport',
    coverImageUrl: 'https://images.pexels.com/photos/31889976/pexels-photo-31889976.jpeg',
    purchaseLink: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692',
    tags: 'Focus'
  },
  // Add more books as needed
  {
    _id: '3',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImageUrl: 'https://images.pexels.com/photos/31889976/pexels-photo-31889976.jpeg',
    purchaseLink: 'https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681',
    tags: 'Finance'
  },
  {
    _id: '4',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    coverImageUrl: 'https://images.pexels.com/photos/31889976/pexels-photo-31889976.jpeg',
    purchaseLink: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
    tags: 'Psychology'
  },
  {
    _id: '5',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    coverImageUrl: 'https://images.pexels.com/photos/31889976/pexels-photo-31889976.jpeg',
    purchaseLink: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
    tags: 'Business'
  }
];

const mockVideos = [
  {
    id: '1',
    title: 'How to Build a Startup',
    channel: 'Y Combinator',
    thumbnailUrl: 'https://i.ytimg.com/vi/sYB2Sz9gfx4/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=sYB2Sz9gfx4'
  },
  {
    id: '2',
    title: 'The Lean Startup',
    channel: 'Eric Ries',
    thumbnailUrl: 'https://i.ytimg.com/vi/fEvKo90qBns/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=fEvKo90qBns'
  },
  // Add more videos as needed
  {
    id: '3',
    title: 'Atomic Habits Summary',
    channel: 'James Clear',
    thumbnailUrl: 'https://i.ytimg.com/vi/U_nzqnXWvSo/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=U_nzqnXWvSo'
  },
  {
    id: '4',
    title: 'Deep Work Rules',
    channel: 'Cal Newport',
    thumbnailUrl: 'https://i.ytimg.com/vi/7K5cluv73TI/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=7K5cluv73TI'
  },
  {
    id: '5',
    title: 'The Psychology of Money',
    channel: 'Morgan Housel',
    thumbnailUrl: 'https://i.ytimg.com/vi/Gg8_TA7U0Uw/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=Gg8_TA7U0Uw'
  }
];

export function BookGrid() {
  return (
    <div className="space-y-12">
      {/* Books Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
          Recommended Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mockBooks.map((book) => (
            <div key={book._id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
              <a href={book.purchaseLink} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 w-full">
                  <Image
                    src={book.coverImageUrl}
                    alt={book.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </a>
              <div className="p-4 flex-grow">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {book.tags}
                </span>
              </div>
              <div className="p-4 pt-0">
                <Link href={`/dashboard/chat?bookId=${book._id}&title=${encodeURIComponent(book.title)}`}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Discuss</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-red-600 rounded-full"></span>
          Educational Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mockVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
              <a href={video.videoLink} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 w-full">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Youtube className="h-12 w-12 text-red-600 bg-white rounded-full p-2" />
                  </div>
                </div>
              </a>
              <div className="p-4 flex-grow">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{video.channel}</p>
              </div>
              <div className="p-4 pt-0">
                <Link href={`/dashboard/chat?videoId=${video.id}&title=${encodeURIComponent(video.title)}`}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full flex items-center gap-2 text-red-600 hover:text-red-700"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Discuss</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}