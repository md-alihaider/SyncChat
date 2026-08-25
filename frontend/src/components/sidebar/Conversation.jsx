import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji, lastidx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>

          {isOnline && (
            <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-base-100" />
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastidx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
