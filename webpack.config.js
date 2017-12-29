module.exports = {
  entry: [
  'babel-polyfill',
  "./index"
  ],
  output: {
    filename:"bundle.js"
  },
  watch:true,
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:[/node_modules/,/snap\.svg-min\.js/],
        loaders:"babel-loader"
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}