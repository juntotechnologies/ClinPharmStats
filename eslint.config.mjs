/** ESLint config: Next.js rules for the whole app, and code shape limits for the discovery code. */
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import shape from "./code-shape.json" with { type: "json" }
import fileDocstring from "./scripts/eslint/file-docstring.mjs"

const NESTED_FUNCTION = {
  selector: ":function :function",
  message: "Define functions at top level; never inside another function.",
}

const SHAPE_RULES = {
  complexity: ["error", shape.maxComplexity],
  "max-depth": ["error", shape.maxDepth],
  "max-params": ["error", shape.maxParams],
  "max-lines-per-function": ["error", { max: shape.maxFunctionLines, skipBlankLines: true, skipComments: true }],
  "no-restricted-syntax": ["error", NESTED_FUNCTION],
  "local/file-docstring": "error",
}

const LOCAL_PLUGIN = { local: { rules: { "file-docstring": fileDocstring } } }

// Code from before this config breaks these rules. They warn here. Fix them in a separate change.
const LEGACY_WARNINGS = {
  "react/no-unescaped-entities": "warn",
  "react-hooks/set-state-in-effect": "warn",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-empty-object-type": "warn",
  "@typescript-eslint/no-require-imports": "warn",
}

const CONFIG = [
  { ignores: ["node_modules/", ".next/", "out/", "public/", "backup/", "next-env.d.ts"] },
  ...nextVitals,
  ...nextTs,
  { rules: LEGACY_WARNINGS },
  { files: shape.files, plugins: LOCAL_PLUGIN, rules: SHAPE_RULES },
  { files: ["tests/**/*.mjs"], rules: { "max-lines-per-function": "off" } },
]

export default CONFIG
