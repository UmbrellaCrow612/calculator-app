import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeSwitcher() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="flex items-center gap-5">
      <span className="leading-tight tracking-widest uppercase">theme</span>
      <div className="flex gap-4">
        <input
          data-set-theme="retro"
          type="radio"
          name="radio-1"
          className="radio"
          data-act-class="bg-primary"
        />
        <input
          data-set-theme="dark"
          type="radio"
          name="radio-1"
          className="radio"
          data-act-class="bg-primary"
        />
        <input
          data-set-theme="light"
          type="radio"
          name="radio-1"
          className="radio"
          data-act-class="bg-primary"
        />
      </div>
    </div>
  );
}
