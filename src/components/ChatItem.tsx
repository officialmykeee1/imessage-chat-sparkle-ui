
import { useState } from "react";

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

interface ChatItemProps {
  chat: Chat;
}

const ChatItem = ({ chat }: ChatItemProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className={`px-4 py-3 cursor-pointer transition-all duration-100 ${
        isPressed ? "bg-gray-200" : "bg-white hover:bg-gray-50"
      }`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <div className="flex items-center space-x-3">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {chat.avatar}
          </div>
          {chat.isOnline && (
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <h3 className="font-semibold text-black text-base truncate">
              {chat.name}
            </h3>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">
                {chat.timestamp}
              </span>
              {chat.unreadCount && (
                <div className="bg-blue-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center ml-1">
                  {chat.unreadCount}
                </div>
              )}
              {chat.isSent && !chat.unreadCount && (
                <div className="w-4 h-4 ml-1">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-blue-500 fill-current">
                    <path d="M15.854 5.354L6.5 14.707a.5.5 0 0 1-.708 0L2.146 11.06a.5.5 0 1 1 .708-.708L6.5 13.998l8.646-8.646a.5.5 0 0 1 .708.708z"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <p className={`text-sm truncate ${
            chat.unreadCount ? "text-black font-medium" : "text-gray-600"
          }`}>
            {chat.lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
