import React from 'react';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`w-[100%] shadow-bottom-blue bg-white p-12 rounded-md border-2 ${className}`}
      {...props}
    />
  ),
);

Card.displayName = 'Card';

export default Card;
