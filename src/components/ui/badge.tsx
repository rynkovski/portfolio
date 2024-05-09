type Badge = {
  children: string;
};
function Badge({ children }: Badge) {
  return (
    <div className="px-2 py-1 text-xs border shadow-md cursor-default border-sky-500 text-sky-700 hover:text-stone-50 bg-stone-50 hover:bg-sky-500 rounded-xl">
      {children}
    </div>
  );
}

export default Badge;
