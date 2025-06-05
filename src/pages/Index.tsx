
import { useState } from "react";
import ChatList from "@/components/ChatList";
import Stories from "@/components/Stories";
import { MessageCircle, PhoneCall, Settings } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-white min-h-screen">
        <div className="bg-white px-4 py-3" style={{ boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.1)' }}>
          <div className="flex items-center justify-between">
            <MessageCircle className="h-6 w-6 text-blue-500 fill-blue-500" />
            <h1 className="text-xl font-semibold text-black">Messages</h1>
            <div className="flex items-center space-x-4">
              <PhoneCall className="h-6 w-6 text-gray-700" />
              <Settings className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
        <Stories />
        <ChatList />
      </div>
    </div>
  );
};

export default Index;
