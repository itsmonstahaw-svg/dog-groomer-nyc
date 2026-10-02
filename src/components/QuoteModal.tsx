import { X } from "lucide-react";
import { QuoteFormPanel } from "./QuoteFormPanel";

// Plain "Get A Free Quote" modal (no Radix).
export const QuoteModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-black border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <QuoteFormPanel />
      </div>
    </div>
  );
};
