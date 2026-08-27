import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { setMessages } = useConversation();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      setMessages((prevMessages) => {
        const alreadyExists = prevMessages.some(
          (message) => message._id === newMessage._id,
        );

        if (alreadyExists) {
          return prevMessages;
        }

        const messageWithShake = {
          ...newMessage,
          shouldShake: true,
        };

        const sound = new Audio(notificationSound);
        sound.play().catch(() => {});

        return [...prevMessages, messageWithShake];
      });
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessages]);
};

export default useListenMessages;
