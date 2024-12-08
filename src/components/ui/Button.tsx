import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const YellowButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-brand-yellow px-4 py-1.5 rounded-xl border-[2px] text-black font-extralight active:bg-[#EFD4A7] ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export const BlueButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` bg-brand-skyblue px-4 py-1.5  rounded-xl border-[2px] text-black font-extralight active:bg-[#CDDCE9] ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};
