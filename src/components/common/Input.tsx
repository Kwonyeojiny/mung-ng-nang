import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          autoComplete="off"
          className={`rounded-xl border-[2px] p-1.5 mb-4 bg-white
          ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export default Input;
