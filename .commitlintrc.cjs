/** @type {import("cz-git").UserConfig} */
module.exports = {
  alias: {
    b: 'chore: :hammer: bump dependencies',
  },
  maxSubjectLength: 100,
  allowCustomIssuePrefix: false,
  allowEmptyIssuePrefix: false,
  prompt: {
    useEmoji: true,
  },
  skipQuestions: ['footer', 'scope'],
};
