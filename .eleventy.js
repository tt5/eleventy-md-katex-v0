const katex = require("katex");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  let options = {

  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.addFilter("latexdisplay", (content) => {
    return content.replace(/\$\$([\s\S]+?)\$\$/g, (_, equation) => {
      equation = "\\displaystyle " + equation
      const cleanEquation = equation
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/<em>/g, "_")
        .replace(/<\/em>/g, "_")
        .replace(/\\\n/g, "\\\\");
      console.log(equation)

      return katex.renderToString(cleanEquation, {
        throwOnError: false,
        output: "html",
      });
    });
  });

  eleventyConfig.addFilter("latex", (content) => {
    return content.replace(/\$([\s\S]+?)\$/g, (_, equation) => {
      const cleanEquation = equation
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/<em>/g, "_")
        .replace(/<\/em>/g, "_")
        .replace(/\\\n/g, "\\\\");

      return katex.renderToString(cleanEquation, {
        throwOnError: false,
        output: "html",
      });
    });
  });

  eleventyConfig.addFilter("dollarincodepre", (content) => {
    return content.replace(/<code([\s\S]+?)<\/code>/g, (_, equation) => {
      const cleanEquation = equation
        .replace(/\$/g, "DOLLARSIGNREPLACE")

      return "<code" + cleanEquation + "</code>"
    });
  });

  eleventyConfig.addFilter("dollarincodepost", (content) => {
    return content.replace(/\<code([\s\S]+?)<\/code>/g, (_, equation) => {
      const cleanEquation = equation
        .replace(/DOLLARSIGNREPLACE/g, "$")

      return "<code" + cleanEquation + "</code>"
    });
  });
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");

  eleventyConfig.addCollection("page", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
  };
};
