const htmlValidator = document.getElementById("html-validator");
const cssValidator = document.getElementById("css-validator");

const siteUrl = new URL("https://matyas6769.github.io/matyasgoogle/");
const pageName = window.location.pathname.split("/").pop() || "index.html";
const pageUrl = new URL(pageName, siteUrl);
const stylesheetUrl = new URL("style.css", siteUrl);

const htmlValidatorUrl = new URL("https://validator.w3.org/nu/");
htmlValidatorUrl.searchParams.set("doc", pageUrl.href);
htmlValidator.href = htmlValidatorUrl.href;

const cssValidatorUrl = new URL("https://jigsaw.w3.org/css-validator/validator");
cssValidatorUrl.searchParams.set("uri", stylesheetUrl.href);
cssValidator.href = cssValidatorUrl.href;
