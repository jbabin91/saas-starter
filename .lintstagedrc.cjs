module.exports = {
  '**/*.ts?(x)': () => 'pnpm typecheck',
  '*.{js,jsx,ts,tsx}': () => 'eslint',
  '*': () => 'prettier -uc',
};
