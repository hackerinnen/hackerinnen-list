module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "Hackerinnen Liste";
          args[0].description = "";
          return args;
        })
  }
}
