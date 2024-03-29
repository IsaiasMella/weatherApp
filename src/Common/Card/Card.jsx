export const Card = ({ className, children }) => {
  return <div className={`w-full p-4 rounded-2xl ${className}`}>{children}</div>;
};
