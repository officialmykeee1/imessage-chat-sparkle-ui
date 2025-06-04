import { useState, useMemo } from "react";
import ChatItem from "./ChatItem";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
  unreadCount?: number;
  isOnline?: boolean;
  isSent?: boolean;
}

interface ChatListProps {
  searchQuery: string;
}

const ChatList = ({ searchQuery }: ChatListProps) => {
  const [chats] = useState<Chat[]>([
    {
      id: "1",
      name: "Emma Wilson",
      lastMessage: "Hey! Are we still on for dinner tonight?",
      timestamp: "2:34 PM",
      avatar: "EW",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      name: "Family",
      lastMessage: "Mom: Don't forget about Sunday brunch!",
      timestamp: "1:15 PM",
      avatar: "F",
      unreadCount: 5,
    },
    {
      id: "3",
      name: "Alex Chen",
      lastMessage: "Thanks for the help with the project 👍",
      timestamp: "11:45 AM",
      avatar: "AC",
      isOnline: true,
      isSent: true,
    },
    {
      id: "4",
      name: "Sarah Johnson",
      lastMessage: "The photos from the trip are amazing!",
      timestamp: "Yesterday",
      avatar: "SJ",
    },
    {
      id: "5",
      name: "Work Team",
      lastMessage: "You: Sounds good, see you tomorrow",
      timestamp: "Yesterday",
      avatar: "WT",
      isSent: true,
    },
    {
      id: "6",
      name: "David Park",
      lastMessage: "Let's catch up this weekend",
      timestamp: "Monday",
      avatar: "DP",
    },
    {
      id: "7",
      name: "Coffee Chat",
      lastMessage: "Lisa: That new café downtown is great!",
      timestamp: "Sunday",
      avatar: "CC",
      unreadCount: 1,
    },
    {
      id: "8",
      name: "Mom",
      lastMessage: "Love you sweetie ❤️",
      timestamp: "Saturday",
      avatar: "M",
      isOnline: true,
    },
  ]);

  const filteredChats = useMemo(() => {
    if (!searchQuery.trim()) return chats;
    
    return chats.filter(chat => 
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [chats, searchQuery]);

  return (
    <div className="bg-white">
      {filteredChats.length === 0 && searchQuery.trim() ? (
        <div className="px-4 py-8 text-center text-gray-500">
          No results found for "{searchQuery}"
        </div>
      ) : (
        filteredChats.map((chat, index) => (
          <div key={chat.id}>
            <ChatItem chat={chat} />
            {index < filteredChats.length - 1 && (
              <div className="ml-16 border-b border-gray-200"></div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ChatList;
