module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "Hackerinnen Links";
          args[0].description = "";
          return args;
        })
  }
}
