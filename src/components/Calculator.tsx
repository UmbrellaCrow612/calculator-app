import { useState, useCallback } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Calculator() {
  const [number, setNumber] = useState("0");

  const calc = useCallback(
    (input: any) => {
      switch (input) {
        case "+/-":
          setNumber((prevNumber) =>
            prevNumber.startsWith("-") ? prevNumber.slice(1) : `-${prevNumber}`
          );
          break;
        case "C":
          setNumber("0");
          break;
        case "DEL":
          setNumber((prevNumber) =>
            prevNumber.length > 1 ? prevNumber.slice(0, -1) : "0"
          );
          break;
        case ".":
          if (!number.includes(".")) {
            setNumber((prevNumber) => `${prevNumber}.`);
          }
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          setNumber((prevNumber) => `${prevNumber} ${input} `);
          break;
        case "=":
          try {
            const result = eval(number);
            setNumber(result.toString());
          } catch (error) {
            setNumber("Error");
          }
          break;
        default:
          setNumber((prevNumber) =>
            prevNumber === "0" ? input : prevNumber + input
          );
      }
    },
    [number]
  );

  const Key = useCallback(
    ({ children, isBottomKeys, isFinal }: any) => {
      return (
        <button
          onClick={() => calc(children)}
          className={`kbd font-extrabold text-xl ${
            isBottomKeys ? "col-span-2" : ""
          } ${isFinal ? "col-span-4" : ""}`}
        >
          {children}
        </button>
      );
    },
    [calc]
  );

  return (
    <div className="w-4/5 md:max-w-xl flex flex-col gap-6 min-h-[80vh]">
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
        {number}
      </div>
      {/* Number display start */}

      {/* Keyboard */}
      <div className="grid flex-1 grid-cols-4 grid-rows-5 gap-4 p-5 bg-base-300 rounded-2xl">
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>/</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>*</Key>
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>-</Key>
        <Key>.</Key>
        <Key>0</Key>
        <Key>C</Key>
        <Key>+</Key>
        <Key isBottomKeys>DEL</Key>
        <Key isBottomKeys>+/-</Key>
        <Key isFinal>=</Key>
      </div>
    </div>
  );
}
