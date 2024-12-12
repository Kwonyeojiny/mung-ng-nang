import clsx from 'clsx';

type MyPageCardProps = {
  children: React.ReactNode;
  className?: string;
};

const MyPageCard = ({ children, className }: MyPageCardProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-6 h-full px-14 py-10 rounded-xl border-3 bg-white shadow-bottom-md select-none',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MyPageCard;
