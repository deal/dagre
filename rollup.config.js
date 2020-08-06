import pkg from "./package.json";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      name: "DealDagre",
      file: pkg.module,
      format: "es",
      sourcemap: true,
      exports: "named",
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
