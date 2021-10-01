const { colors } = require("tailwindcss/defaultTheme");

const buildList = (length, indicator, multi = 10) => {
  const json = Array(length)
    .fill(0)
    .reduce((prev, current, index) => {
      let str = prev;
      index++;

      if (index === 1) str = "{";
      str += `\"${index * multi}\": \"${index * multi}${indicator}\"`;

      if (index === length) return str + "}";
      else return str + ",";
    }, "");

  return JSON.parse(json);
};

module.exports = {
  purge: [".src/pages/**/*.{js,ts,jsx,tsx}", ".src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: { ...colors },
    minWidth: {
      ...buildList(40, "px", 50),
      full: "100%",
      unset: "unset",
    },
    minHeight: {
      ...buildList(40, "px", 50),
      full: "100%",
      unset: "unset",
    },
    maxWidth: {
      ...buildList(40, "px", 50),
      full: "100%",
      unset: "unset",
    },
    maxHeight: {
      ...buildList(40, "px", 50),
      full: "100%",
      unset: "unset",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "disabled", "group-focus"],
      backgroundOpacity: ["group-focus"],
      borderWidth: ["group-focus"],
      opacity: ["group-focus", "disabled"],
      borderColor: ["checked", "disabled"],
      boxShadow: ["active"],
      rotate: ["group-focus"],
      inset: ["hover", "focus", "group-focus"],
    },
  },
  plugins: [],
};
