import Button, { ButtonProps } from '../ui/Button';
import { X } from 'lucide-react';

type PopupProps = {
  title: string;
  children: React.ReactNode;
  closeButton?: boolean;
  buttons?: ButtonProps[];
  visible: boolean;
  onClose: () => void;
};

const Popup = ({
  title,
  children,
  closeButton = false,
  buttons,
  visible = false,
  onClose,
}: PopupProps) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-screen-full h-screen-full items-center justify-center bg-scrim ${
        visible ? 'flex' : 'hidden'
      }`}
    >
      <div className="flex flex-col gap-4 min-w-96 p-6 rounded-xl border-3 bg-white">
        {/* Title */}
        <div className="flex gap-2 items-center justify-between min-h-8">
          <p className="flex-1 text-xl">{title}</p>
          {closeButton && (
            <button onClick={onClose}>
              <X />
            </button>
          )}
        </div>

        {/* Content */}
        <div className='font-sans'>{children}</div>

        {/* Footer */}
        <div className="flex items-center gap-2 pt-6">
          {buttons &&
            buttons.map(button => (
              <Button key={button.children?.toString()} {...button} className="flex-1" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
