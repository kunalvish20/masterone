// src/hooks/use-content.ts
const mockBooks = [
  {
    _id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', // Actual book cover
    purchaseLink: 'https://www.amazon.com/Atomic-Habits-James-Clear/dp/0735211299', // Amazon link
    tags: 'Productivity, Self-help'
  },
  {
    _id: '2',
    title: 'Deep Work',
    author: 'Cal Newport',
    coverImageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500',
    purchaseLink: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692',
    tags: 'Productivity, Focus'
  },
  // Add 3 more books...
];

const mockVideos = [
  {
    id: '1',
    title: 'How to Build a Startup',
    channel: 'Y Combinator',
    thumbnailUrl: 'https://i.ytimg.com/vi/sYB2Sz9gfx4/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=sYB2Sz9gfx4' // Actual YouTube link
  },
  {
    id: '2',
    title: 'The Lean Startup Methodology',
    channel: 'Eric Ries',
    thumbnailUrl: 'https://i.ytimg.com/vi/fEvKo90qBns/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=fEvKo90qBns'
  },
  // Add 3 more videos...
];

// Rest of your hook implementation remains same...