
import { useState } from "react";
import ChatItem from "./ChatItem";
import { Skeleton } from "@/components/ui/skeleton";

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

const ChatList = () => {
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

  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="bg-white">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="px-4 py-3">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-12" />
                </div>
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
