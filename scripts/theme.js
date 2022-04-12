const themeSwitch = document.getElementById("theme-check");
const browserPreference = window.matchMedia("(prefers-color-scheme: dark)");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

let darkTheme;

if (browserPreference.matches) {
  darkTheme = true;
} else {
  darkTheme = false;
}

if (darkTheme == true) {
  document.body.classList.toggle("dark");
}

/*const theme = document.getElementById("theme-check");

theme.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
*/
