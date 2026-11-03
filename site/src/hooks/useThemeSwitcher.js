import { useEffect, useState } from "react";

// The theme class is set before the page paints by the script in _document.js.
// This hook reads it, lets the visitor switch, and remembers the choice when storage is available.
const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    setMode(document.documentElement.classList.contains("dark") ? "dark" : "light");

    let query = null;
    try {
      query = window.matchMedia("(prefers-color-scheme: dark)");
    } catch (e) {
      query = null;
    }
    const onSystemChange = (event) => {
      let saved = null;
      try {
        saved = window.localStorage.getItem("theme");
      } catch (e) {
        saved = null;
      }
      if (!saved) setMode(event.matches ? "dark" : "light");
    };
    if (query && query.addEventListener) query.addEventListener("change", onSystemChange);
    return () => {
      if (query && query.removeEventListener) query.removeEventListener("change", onSystemChange);
    };
  }, []);

  useEffect(() => {
    if (!mode) return;
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {
      // Storage can be blocked; the switch still works for this visit.
    }
  };

  return [mode, toggle];
};

export default useThemeSwitcher;
