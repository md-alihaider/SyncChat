import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-4 py-4">
      <div
        className="
          relative
          flex
          w-full
          max-w-6xl
          h-[calc(100vh-2rem)]
          sm:h-[calc(100vh-3rem)]
          overflow-hidden
          rounded-2xl
          border border-white/20
          bg-black/30
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* Glass highlight */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-br
            from-white/10
            via-transparent
            to-transparent
            pointer-events-none
            z-0
          "
        />

        {/* Chat content */}
        <div className="relative z-10 flex w-full h-full">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
