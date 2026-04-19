import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <motion.div
      className="toast"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {message}
    </motion.div>
  );
};

export default Toast;