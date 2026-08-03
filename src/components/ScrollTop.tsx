import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let prevShow = false;
    const onScroll = () => {
      const isShow = window.scrollY > 600;
      if (isShow !== prevShow) {
        prevShow = isShow;
        setShow(isShow);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-xl text-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
