import React, { useEffect, useState } from "react";

const useThemeSwicher = () => {
  // The prefers-color-scheme CSS media feature is used
  // to detect if a user has requested light or dark color themes.
  const proferDarkQuery = "(prefer-color-sheme:dark)";
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuary = window.matchMedia(proferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuary.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    handleChange();
    mediaQuary.addEventListener("change", handleChange);
    return () => mediaQuary.removeEventListener("change", handleChange);
  }, []);

  // update the values in the local storage..👇
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwicher;
