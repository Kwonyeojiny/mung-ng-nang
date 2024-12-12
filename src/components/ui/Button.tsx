import clsx from 'clsx';

export type ButtonProps = {
  type?: 'button' | 'link';
  htmlType?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  style?: 'primary' | 'secondary' | 'neutral' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const buttonType = {
  button:
    'flex items-center justify-center px-4 py-1.5 min-w-fit whitespace-nowrap border-2 rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed',
  link: 'underline font-sans',
};

const buttonSize = {
  sm: 'h-8 py-1 text-sm rounded-xl',
  md: 'h-10',
  lg: 'h-12 px-8 text-lg',
};

const buttonStyles = {
  button: {
    primary: 'bg-brand-yellow disabled:bg-brand-yellow active:bg-[#e2a748]',
    secondary: 'bg-brand-skyblue disabled:bg-brand-skyblue active:bg-[#8fb1cc]',
    neutral: 'bg-neutral disabled:bg-neutral active:bg-[#BAB7B4]',
    danger: '',
  },
  link: {
    primary: 'text-brand-blue',
    secondary: '',
    neutral: '',
    danger: 'text-error',
  },
};

const Button = ({
  type = 'button',
  htmlType = 'button',
  size = 'md',
  style = 'primary',
  children,
  onClick,
  className,
}: ButtonProps) => {
  const typeClasses = buttonType[type];
  const sizeClasses = type === 'button' ? buttonSize[size] : '';
  const styleClasses = buttonStyles[type][style];

  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={clsx(typeClasses, sizeClasses, styleClasses, className)}
    >
      {children}
    </button>
  );
};

export default Button;
