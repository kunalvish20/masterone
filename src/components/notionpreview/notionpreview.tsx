'use client';

import React, { useState } from 'react';

const NotionPreview = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-black text-white p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Entrepreneur Productivity Hub</h1>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            New Page
          </button>
        </div>

        {/* Section 1: Task Board (Your original Kanban) */}
        <TaskBoardSection />

        {/* Section 2: Meeting Tracker */}
        <MeetingTrackerSection />

        {/* Section 3: Quick Notes */}
        <QuickNotesSection />

        {/* Section 4: Founder Toolkit */}
        <FounderToolkitSection />
      </div>
    </div>
  );
};

// Section 1: Task Board (Enhanced version of your original)
const TaskBoardSection = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Backlog',
      color: 'bg-orange-50 border-orange-200',
      cards: [{ id: 1, text: 'Revise pitch deck' }],
    },
    {
      id: 2,
      title: 'This Week',
      color: 'bg-blue-50 border-blue-200',
      cards: [
        { id: 2, text: 'Investor meeting prep' },
        { id: 3, text: 'Product roadmap review' },
      ],
    },
    {
      id: 3,
      title: 'In Progress',
      color: 'bg-purple-50 border-purple-200',
      cards: [
        { id: 4, text: 'Hiring for engineering' },
        { id: 5, text: 'User onboarding flow' },
      ],
    },
    {
      id: 4,
      title: "Done",
      color: 'bg-green-50 border-green-200',
      cards: [
        { id: 6, text: 'Closed seed round' },
      ],
    },
  ]);

  const handleAddCard = (colId: number) => {
    const newText = 'New task';
    setColumns((prev) =>
      prev.map((col) =>
        col.id === colId
          ? {
              ...col,
              cards: [...col.cards, { id: Date.now(), text: newText }],
            }
          : col
      )
    );
  };

  const handleEditCard = (colId: number, cardId: number, newText: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === colId
          ? {
              ...col,
              cards: col.cards.map((card) =>
                card.id === cardId ? { ...card, text: newText } : card
              ),
            }
          : col
      )
    );
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Task Board</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">View all</button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {columns.map((col) => (
            <div
              key={col.id}
              className={`${col.color} p-4 rounded-xl border min-w-[280px] shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700 flex items-center">
                  <span className="w-3 h-3 rounded-full mr-2" style={{
                    backgroundColor: col.color.replace('bg-', '').replace('-50', '-400').replace('border-', '')
                  }}></span>
                  {col.title}
                </h3>
                <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                  {col.cards.length} {col.cards.length === 1 ? 'task' : 'tasks'}
                </span>
              </div>
              <div className="space-y-3">
                {col.cards.map((card) => (
                  <div
                    key={card.id}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleEditCard(col.id, card.id, e.currentTarget.innerText)
                    }
                    className="bg-white p-3 rounded-lg border border-gray-200 text-sm cursor-text hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
                  >
                    {card.text}
                  </div>
                ))}
                <button
                  onClick={() => handleAddCard(col.id)}
                  className="w-full text-gray-500 text-sm mt-2 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 2: Meeting Tracker
const MeetingTrackerSection = () => {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: 'Investor Pitch - Sequoia',
      time: 'Today, 2:00 PM',
      link: 'https://zoom.us/j/123456789',
      notes: 'Focus on traction metrics'
    },
    {
      id: 2,
      title: 'Product Team Sync',
      time: 'Tomorrow, 10:00 AM',
      link: 'https://meet.google.com/abc-defg-hij',
      notes: 'Review Q3 roadmap'
    }
  ]);

  const [newMeeting, setNewMeeting] = useState({
    title: '',
    time: '',
    link: '',
    notes: ''
  });

  const handleAddMeeting = () => {
    if (newMeeting.title && newMeeting.link) {
      setMeetings([...meetings, {
        id: Date.now(),
        ...newMeeting,
        time: newMeeting.time || 'No time set',
        notes: newMeeting.notes || 'No notes yet'
      }]);
      setNewMeeting({ title: '', time: '', link: '', notes: '' });
    }
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Meeting Tracker</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">View all</button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-800">{meeting.title}</h3>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{meeting.time}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{meeting.notes}</p>
              <div className="flex justify-between items-center">
                <a 
                  href={meeting.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Join Meeting
                </a>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <h3 className="font-medium text-gray-800 mb-3">Schedule New Meeting</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Title</label>
              <input 
                type="text" 
                value={newMeeting.title}
                onChange={(e) => setNewMeeting({...newMeeting, title: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Investor call, team sync, etc."
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Time</label>
              <input 
                type="text" 
                value={newMeeting.time}
                onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Today, 3:00 PM"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Meeting Link</label>
            <input 
              type="text" 
              value={newMeeting.link}
              onChange={(e) => setNewMeeting({...newMeeting, link: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              placeholder="https://zoom.us/j/..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Agenda/Notes</label>
            <textarea 
              value={newMeeting.notes}
              onChange={(e) => setNewMeeting({...newMeeting, notes: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              rows={2}
              placeholder="Key discussion points..."
            />
          </div>
          <button 
            onClick={handleAddMeeting}
            className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
          >
            Add Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

// Section 3: Quick Notes
const QuickNotesSection = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'Follow up with design team about new mockups', pinned: true },
    { id: 2, text: 'Customer reported bug in checkout flow - investigate', pinned: false },
    { id: 3, text: 'Interesting article about growth hacking: https://example.com/growth-hacks', pinned: true }
  ]);

  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([{ id: Date.now(), text: newNote, pinned: false }, ...notes]);
      setNewNote('');
    }
  };

  const togglePin = (id: number) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ));
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Quick Notes</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">View all</button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex mb-4">
          <input 
            type="text" 
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
            className="flex-1 p-3 border border-gray-300 rounded-l-lg text-sm"
            placeholder="Jot down ideas, tasks, or links..."
          />
          <button 
            onClick={handleAddNote}
            className="bg-black text-white px-4 py-2 rounded-r-lg text-sm hover:bg-gray-800 transition-colors"
          >
            Add Note
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes
            .sort((a, b) => (a.pinned === b.pinned) ? 0 : a.pinned ? -1 : 1)
            .map((note) => (
              <div key={note.id} className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${note.pinned ? 'border-yellow-300 bg-yellow-50' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-800">
                    {note.text.startsWith('http') ? (
                      <a href={note.text} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {note.text}
                      </a>
                    ) : (
                      note.text
                    )}
                  </p>
                  <button 
                    onClick={() => togglePin(note.id)}
                    className={`ml-2 ${note.pinned ? 'text-yellow-500' : 'text-gray-300 hover:text-gray-500'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={note.pinned ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v19M5 12l7-7 7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Founder Toolkit
const FounderToolkitSection = () => {
  const categories = [
    {
      name: 'Fundraising',
      icon: '💸',
      resources: [
        { name: 'Pitch Deck Template', link: '#' },
        { name: 'Investor Email Scripts', link: '#' },
        { name: 'Term Sheet Guide', link: '#' }
      ]
    },
    {
      name: 'Product',
      icon: '🛠️',
      resources: [
        { name: 'PRD Template', link: '#' },
        { name: 'User Feedback Guide', link: '#' },
        { name: 'Roadmap Planner', link: '#' }
      ]
    },
    {
      name: 'Growth',
      icon: '📈',
      resources: [
        { name: 'Cold Email Templates', link: '#' },
        { name: 'CAC/LTV Calculator', link: '#' },
        { name: 'Growth Playbook', link: '#' }
      ]
    }
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Founder Toolkit</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">View all</button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.resources.map((resource, i) => (
                  <li key={i}>
                    <a 
                      href={resource.link} 
                      className="text-sm text-gray-700 hover:text-blue-600 hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotionPreview;