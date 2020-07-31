
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  // platforms: ["web","weex","wx","alipay","baidu","qq"],
  platforms: ["web","weex","wx"],
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
      // analysis: true,
    },
    build: {
      apiPrefix,
      // analysis: true,
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  },
  optimize: {
    watchNodeModules: true, // 设置为true对于调试 node_modules 里面的内容很有帮助
    showWarning: false// 设置为true可以在构建过程中看到警告信息，比如编译过程中引入了同一个npm包的不同版本会在终端输出信息
  }
})

