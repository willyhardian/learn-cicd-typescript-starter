import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";
export default defineConfig([
  {
    // --> Add this ignores block at the top <--
    ignores: [
      "dist/",
      "node_modules/",
      "coverage/", // Add this line
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.node, // <-- ADD THIS LINE
        ...globals.browser, // Optional: if you also use browser globals
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
]);
