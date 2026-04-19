import React from 'react';
import { motion } from 'framer-motion';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  show: boolean;
  message: string;
  type?: ToastType;
  onClose: () => void;
}

const typeStyles: Record<ToastType, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500'
};

export default function Toast({ show, message, type = 'success', onClose }: ToastProps) {
  React.useEffect(() => {
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
      className={`fixed top-4 right-4 ${typeStyles[type]} text-white px-6 py-3 rounded-md shadow-lg z-50 min-w-64 max-w-xs text-center`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      role="status"
      aria-live="polite"
    >
      {message}
    </motion.div>
  );
}