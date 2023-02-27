import ThemeSwitcher from "./ThemeSwitcher";

export default function Calculator() {
  return (
    <div className="w-4/5 flex flex-col gap-6 min-h-[80vh]">
      {/* Top start*/}
      <div className="flex items-center justify-between h-auto">
        <h1 className="text-4xl font-extrabold leading-tight tracking-wide">
          calc
        </h1>
        <ThemeSwitcher />
      </div>
      {/* Top end*/}

      {/* Number display start */}
      <div className="flex items-center justify-end h-20 px-4 text-4xl font-extrabold leading-tight tracking-wide rounded-2xl bg-base-200">
        39,999
      </div>
      {/* Number display start */}

      {/* Keyboard */}
      <div className="grid flex-1 grid-cols-4 grid-rows-5 gap-4 p-5 bg-base-300 rounded-2xl">
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>DEL</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>+</Key>
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>-</Key>
        <Key>.</Key>
        <Key>0</Key>
        <Key>/</Key>
        <Key>x</Key>
        <Key isBottomKeys>Reset</Key>
        <Key isBottomKeys>=</Key>
      </div>
    </div>
  );
}

const Key = ({
  children,
  isBottomKeys,
}: {
  children: string;
  isBottomKeys?: boolean;
}) => {
  return (
    <div
      className={`btn btn-accent font-extrabold ${
        isBottomKeys ? "col-span-2" : ""
      }`}
    >
      {children}
    </div>
  );
};
