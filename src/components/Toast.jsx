import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Toast({ message, type = 'success', visible, onClose, duration = 4000 }) {
  useEffect(() => {
    if (!visible) return undefined;
    const timer = window.setTimeout(() => {
      onClose?.();
    }, duration);
    return () => window.clearTimeout(timer);
  }, [visible, duration, onClose]);

  if (!visible) return null;

  const variantStyles =
    type === 'success'
      ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
      : 'border-rose-300 bg-rose-50 text-rose-900';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 sm:inset-x-auto sm:right-6 sm:left-auto sm:justify-end"
      >
        <div
          className={`pointer-events-auto w-full max-w-md rounded-[1.75rem] border px-5 py-4 shadow-soft ${variantStyles}`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-4">
            <div className="min-w-0 flex-1 text-sm leading-6">{message}</div>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Toast;
