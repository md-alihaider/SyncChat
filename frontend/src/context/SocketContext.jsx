import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (!authUser?._id) {
      setSocket(null);
      setOnlineUsers([]);
      return;
    }

    const socketUrl =
      import.meta.env.VITE_SOCKET_URL || "http://localhost:3000";

    const newSocket = io(socketUrl, {
      query: {
        userId: authUser._id,
      },
      transports: ["websocket", "polling"],
    });

    setSocket(newSocket);

    // newSocket.on("connect", () => {
    //   console.log("SOCKET CONNECTED:", newSocket.id);
    //   console.log("SOCKET URL:", socketUrl);
    // });

    newSocket.on("connect_error", (error) => {
      console.error("SOCKET CONNECTION ERROR:", error.message);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("SOCKET DISCONNECTED:", reason);
    });

    newSocket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      newSocket.close();
      setSocket(null);
    };
  }, [authUser?._id]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
