import React from 'react';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`w-[90%] shadow-bottom-blue bg-white p-12 rounded-lg border-2 ${className}`}
      {...props}
    />
  ),
);

Card.displayName = 'Card';

export default Card;
