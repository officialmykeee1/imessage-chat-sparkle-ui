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
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      hasNewStory: false,
      isYourStory: true,
    },
    {
      id: "1",
      username: "Emily",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      hasNewStory: true,
    },
    {
      id: "2",
      username: "Michael",
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      hasNewStory: true,
    },
    {
      id: "3",
      username: "Sarah",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      hasNewStory: true,
    },
    {
      id: "4",
      username: "David",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      hasNewStory: true,
    },
    {
      id: "5",
      username: "Jessica",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      hasNewStory: true,
    },
  ];

  return (
    <div className="bg-white py-3">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
    </div>
  );
};

export default Stories;
