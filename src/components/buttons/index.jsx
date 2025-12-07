export default function Button({
  children,
  onClick,
  className,
  outline = false,
}) {
  const btnClasses = outline
    ? "bg-transparent border border-primary text-primary font-semibold py-2 px-4 rounded"
    : "bg-primary text-white font-semibold py-2 px-4 rounded";

  return (
    <button className={`${btnClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
