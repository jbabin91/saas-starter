module.exports = {
  '**/*.ts?(x)': () => 'pnpm typecheck',
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '*': ['prettier -uw'],
};
