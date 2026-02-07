import React from 'react';
import { motion, AnimatePresence } from '@/lib/motion';
import { Check, X, Info } from 'lucide-react';
import type { Toast as ToastType } from '../hooks';

interface ToastProps {
  toasts: ToastType[];
  onRemove: (id: string) => void;
}

/**
 * Toast notification component
 * Displays a list of toast notifications with animations
 */
const Toast: React.FC<ToastProps> = ({ toasts, onRemove }) => {
  const getIcon = (type: ToastType['type']) => {
    switch (type) {
      case 'success':
        return <Check className="w-5 h-5 text-green-500" aria-hidden="true" />;
      case 'error':
        return <X className="w-5 h-5 text-rust" aria-hidden="true" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-blue-500" aria-hidden="true" />;
    }
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-2"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`
              flex items-center gap-3 px-5 py-4 rounded-lg shadow-lg
              backdrop-blur-md border border-white/10
              ${toast.type === 'success' ? 'bg-green-500/10 border-l-4 border-l-green-500' : ''}
              ${toast.type === 'error' ? 'bg-rust/10 border-l-4 border-l-rust' : ''}
              ${toast.type === 'info' ? 'bg-blue-500/10 border-l-4 border-l-blue-500' : ''}
            `}
            role="alert"
          >
            {getIcon(toast.type)}
            <span className="font-sans text-sm text-cream">{toast.message}</span>
            <button
              onClick={() => onRemove(toast.id)}
              className="ml-2 p-1 hover:bg-white/10 rounded transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4 text-cream/50" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
