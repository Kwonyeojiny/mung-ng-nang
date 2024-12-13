import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  unit?: string;
  placeholder?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, unit, placeholder, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={id} className="text-sm">
            {label}
          </label>
        )}
        <div className="w-full relative">
          <input
            id={id}
            type={type}
            autoComplete="off"
            className={`w-full rounded-2xl border-2 h-10 px-4 bg-white placeholder:text-sm placeholder:text-placeholder font-sans ${className} ${
              unit ? 'pr-10 text-right' : ''
            }`}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          {unit && <p className="absolute top-2 right-4">{unit}</p>}
        </div>
        {error && <span className="text-red-500 text-xs pl-4 pt-2">{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
