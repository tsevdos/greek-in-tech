const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("lib"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".js", ".json"]
  }
};
