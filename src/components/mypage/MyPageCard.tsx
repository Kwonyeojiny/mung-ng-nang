import clsx from 'clsx';

type MyPageCardProps = {
  children: React.ReactNode;
  className?: string;
};

const MyPageCard = ({ children, className }: MyPageCardProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-6 min-w-96 px-14 py-10 rounded-xl border-[3px] bg-white shadow-bottom-md',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MyPageCard;
