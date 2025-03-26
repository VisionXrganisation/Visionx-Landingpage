import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  setLoading: (loading: boolean) => void;
}

const Preloader: React.FC<PreloaderProps> = ({ setLoading }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      setLoading(false);
    }, 10000); // Preloader duration (1.2s)
  }, [setLoading]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* Starlight Animation */}
      <motion.div
        className="relative flex flex-col items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Pulsating Energy Ring */}
        <motion.div
          className="absolute w-32 h-32 border-4 border-blue-500 rounded-full opacity-50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating Galaxy-Like Symbol */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />

        {/* Starlight Text Effect */}
        <motion.h1
          className="mt-6 text-3xl font-extrabold text-white tracking-widest uppercase relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Starlight
          <motion.span
            className="absolute left-0 top-0 w-full h-full text-blue-400 blur-lg"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Stalight
          </motion.span>
        </motion.h1>

        {/* Twinkling Stars */}
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
          animate={{
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
          style={{ top: "-40px", left: "30px" }}
          animate={{
            x: [0, -15, 15, 0],
            y: [0, 15, -15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
