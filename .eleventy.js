const katex = require("katex");

module.exports = function (eleventyConfig) {
  // Katex Filter
  eleventyConfig.addFilter("latex", (content) => {
    return content.replace(/\$(.+?)\$/g, (_, equation) => {
      const cleanEquation = equation
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");

      return katex.renderToString(cleanEquation, { throwOnError: false, output: "html" });
    });
  });
};
