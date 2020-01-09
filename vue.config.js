module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.(txt|glsl|frag|vert|fs|vs)$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()

    config.module
      .rule('glsl')
      .test(/\.(glsl|frag|vert|fs|vs)$/)
      .use('glslify')
      .loader('glslify-loader')
      .end()
  }
}
