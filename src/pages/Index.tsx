
import { useState } from "react";
import ChatList from "@/components/ChatList";
import Stories from "@/components/Stories";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-white min-h-screen">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-black text-center mb-3">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-100 border-gray-200 rounded-lg h-9"
            />
          </div>
        </div>
        <Stories />
        <ChatList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Index;
