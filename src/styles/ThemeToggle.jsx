import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl border p-2"
    >
      {theme === "dark" ? <SunIcon className="size-6 text-blue-500" /> : <MoonIcon className="size-6 text-blue-500" />}
    </button>
  );
}