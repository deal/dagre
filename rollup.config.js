import pkg from "./package.json";
import copy from "rollup-plugin-copy";

export default {
  input: "index.js",
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
    },
  ],
  external: Object.keys(pkg.dependencies || {}).concat(
    Object.keys(pkg.peerDependencies || {})
  ),
  plugins: [
    copy({
      targets: [{ src: "lib", dest: "dist" }],
    }),
  ],
};
