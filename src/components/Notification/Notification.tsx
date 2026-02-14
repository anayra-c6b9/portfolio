import type { FC } from "react";

interface NotificationProps {
  Message: string;
  ButtonPrompt: string;
  Show: boolean;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({
  Message,
  ButtonPrompt,
  Show,
  onClose,
}) => {
  if (!Show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm border-2 border-white px-6 py-4 flex flex-col gap-5 items-center">
        <span>{Message}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="bg-white border-black border-2 px-4 py-3 text-black"
        >
          {ButtonPrompt}
        </button>
      </div>
    </div>
  );
};

export default Notification;
