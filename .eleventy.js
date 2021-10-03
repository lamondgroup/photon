module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/assets/css/main.css');
  eleventyConfig.addPassthroughCopy('./src/assets')
  eleventyConfig.addPassthroughCopy('./src/images')
  eleventyConfig.addPassthroughCopy('/admin')

    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };