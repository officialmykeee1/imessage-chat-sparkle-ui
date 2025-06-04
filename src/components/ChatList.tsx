
import { useState } from "react";
import ChatItem from "./ChatItem";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
  unreadCount?: number;
  isOnline?: boolean;
}

const ChatList = () => {
  const [chats] = useState<Chat[]>([
    {
      id: "1",
      name: "Emma Wilson",
      lastMessage: "Hey! Are we still on for dinner tonight? 🍽️",
      timestamp: "2:34 PM",
      avatar: "👩‍💼",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      name: "Family Group",
      lastMessage: "Mom: Don't forget about Sunday brunch!",
      timestamp: "1:15 PM",
      avatar: "👨‍👩‍👧‍👦",
      unreadCount: 5,
    },
    {
      id: "3",
      name: "Alex Chen",
      lastMessage: "Thanks for the help with the project 👍",
      timestamp: "11:45 AM",
      avatar: "👨‍💻",
      isOnline: true,
    },
    {
      id: "4",
      name: "Sarah Johnson",
      lastMessage: "The photos from the trip are amazing!",
      timestamp: "Yesterday",
      avatar: "👩‍🎨",
    },
    {
      id: "5",
      name: "Work Team",
      lastMessage: "Mike: Meeting moved to 3 PM tomorrow",
      timestamp: "Yesterday",
      avatar: "💼",
    },
    {
      id: "6",
      name: "David Park",
      lastMessage: "Let's catch up this weekend",
      timestamp: "Monday",
      avatar: "👨‍🎓",
    },
    {
      id: "7",
      name: "Coffee Chat ☕",
      lastMessage: "Lisa: That new café downtown is great!",
      timestamp: "Sunday",
      avatar: "☕",
      unreadCount: 1,
    },
    {
      id: "8",
      name: "Mom",
      lastMessage: "Love you sweetie ❤️",
      timestamp: "Saturday",
      avatar: "👵",
      isOnline: true,
    },
  ]);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
        <h2 className="text-white font-semibold text-lg">Recent Conversations</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
