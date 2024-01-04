type Badge = {
  children: string;
};
function Badge({ children }: Badge) {
  return (
    <div className="px-2 py-1 text-xs border border-black shadow-md text-zinc-600 bg-zinc-400/50 hover:bg-sky-600/80 rounded-xl">
      {children}
    </div>
  );
}

export default Badge;
