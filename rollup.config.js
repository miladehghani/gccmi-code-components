import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript"; //2
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.tsx", // Your entry point
  output: {
    file: "dist/bundle.js", // Output bundle file
    format: "cjs", // CommonJS format
    sourcemap: true, // Generate sourcemaps
  },
  plugins: [
    nodeResolve(), // Helps Rollup find external modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // Compile TypeScript files
    babel({
      exclude: "node_modules/**", // Transpile only our source code
      presets: ["@babel/preset-react"],
    }),
    terser(), // Minify the output bundle
  ],
};
