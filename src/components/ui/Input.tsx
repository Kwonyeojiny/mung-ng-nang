import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={id} className="text-sm">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          autoComplete="off"
          className={`rounded-xl border-[2px] p-1.5  bg-white placeholder:text-sm
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
