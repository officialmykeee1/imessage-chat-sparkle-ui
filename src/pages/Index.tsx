
import ChatList from "@/components/ChatList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-500">Stay connected with your conversations</p>
        </div>
        <ChatList />
      </div>
    </div>
  );
};

export default Index;
