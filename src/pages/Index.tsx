
import { useState } from "react";
import ChatList from "@/components/ChatList";
import Stories from "@/components/Stories";
import { MessageCircle, PhoneCall, Settings } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-white min-h-screen">
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <MessageCircle className="h-6 w-6 text-gray-700" />
            <h1 className="text-xl font-semibold text-black">Messages</h1>
            <div className="flex items-center space-x-4">
              <PhoneCall className="h-6 w-6 text-gray-700" />
              <Settings className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
        <Stories />
        <ChatList searchQuery="" />
      </div>
    </div>
  );
};

export default Index;
