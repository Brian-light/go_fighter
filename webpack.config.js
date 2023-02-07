import path from "path";
import url from "url";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackSettings = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    port: 3000,
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      API: "https://localhost:3000",
    }),
    new HTMLWebpackPlugin({
      template: "./dist/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};

export default webpackSettings;
