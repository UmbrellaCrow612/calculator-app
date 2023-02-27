import ThemeSwitcher from "./ThemeSwitcher";

export default function Calculator() {
  return (
    <div className="w-4/5 min-h-[80vh] border">
      {/* Top start*/}
      <div className="flex items-center justify-between h-auto">
        <h1 className="text-4xl font-extrabold leading-tight tracking-wide">calc</h1>
        <ThemeSwitcher />
      </div>
      {/* Top end*/}
    </div>
  );
}
