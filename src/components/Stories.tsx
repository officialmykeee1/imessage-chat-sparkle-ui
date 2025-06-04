
import { ScrollArea } from "@/components/ui/scroll-area";

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasNewStory: boolean;
  isYourStory?: boolean;
}

const Stories = () => {
  const stories: Story[] = [
    {
      id: "your-story",
      username: "Your story",
      avatar: "/lovable-uploads/c39e33f3-deea-48f2-9f37-e7faddd685ba.png",
      hasNewStory: false,
      isYourStory: true,
    },
    {
      id: "1",
      username: "freetheeminist...",
      avatar: "/lovable-uploads/c39e33f3-deea-48f2-9f37-e7faddd685ba.png",
      hasNewStory: true,
    },
    {
      id: "2",
      username: "kaicenat",
      avatar: "/lovable-uploads/c39e33f3-deea-48f2-9f37-e7faddd685ba.png",
      hasNewStory: true,
    },
    {
      id: "3",
      username: "thewizard",
      avatar: "/lovable-uploads/c39e33f3-deea-48f2-9f37-e7faddd685ba.png",
      hasNewStory: true,
    },
    {
      id: "4",
      username: "techguru",
      avatar: "/lovable-uploads/c39e33f3-deea-48f2-9f37-e7faddd685ba.png",
      hasNewStory: true,
    },
    {
      id: "5",
      username: "designpro",
      avatar: "/lovable-uploads/c39e33f3-deea-48f2-9f37-e7faddd685ba.png",
      hasNewStory: true,
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 py-3">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 px-4" style={{ width: 'max-content' }}>
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-full p-0.5 ${
                    story.isYourStory
                      ? "bg-gray-300"
                      : story.hasNewStory
                      ? "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
                      : "bg-gray-300"
                  }`}
                >
                  <div className="w-full h-full bg-white rounded-full p-0.5">
                    <img
                      src={story.avatar}
                      alt={story.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {story.isYourStory && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-700 text-center max-w-[70px] truncate">
                {story.username}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Stories;
