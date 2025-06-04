
import { useState } from "react";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
  unreadCount?: number;
  isOnline?: boolean;
}

interface ChatItemProps {
  chat: Chat;
}

const ChatItem = ({ chat }: ChatItemProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className={`px-6 py-4 cursor-pointer transition-all duration-150 ${
        isPressed ? "bg-gray-100 scale-[0.98]" : "bg-white hover:bg-gray-50"
      }`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
            {chat.avatar}
          </div>
          {chat.isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900 truncate text-lg">
              {chat.name}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 font-medium">
                {chat.timestamp}
              </span>
              {chat.unreadCount && (
                <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {chat.unreadCount}
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-600 truncate text-sm leading-relaxed">
            {chat.lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
