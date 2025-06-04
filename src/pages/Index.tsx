
import ChatList from "@/components/ChatList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-white min-h-screen">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-black text-center">Messages</h1>
        </div>
        <ChatList />
      </div>
    </div>
  );
};

export default Index;
