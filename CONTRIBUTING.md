# CONTRIBUTING

Thank you for considering contributing to this project! It's the efforts of contributors like you that help open source projects thrive. No contribution is too small, whether it's reporting bugs, suggesting enhancements, making code contributions, or improving documentation. Your assistance is greatly appreciated. This document will guide you through the process of contributing to the `nooDL` repository under the `noodle-group` organization on GitHub.

## Ways to Contribute

1. **Reporting Bugs:** If you encounter a bug, first check the existing issues on the GitHub issue tracker. If you don't see anything related, feel free to open a new issue, providing as much detail as possible to help us understand and replicate the issue.

2. **Suggesting Enhancements:** If you have an idea for improvement or a new feature, we'd love to hear it. Share your ideas via the GitHub issue tracker.

3. **Code Contributions:** Ready to dig into the code? Great! Look for issues labeled "Good first issue" or "Help Wanted" on the issue tracker. If you're unsure where to start, just ask!

4. **Improving Documentation:** Clear documentation is crucial. If you see room for improvement or want to add to our existing docs, your contributions are welcome!

## Pull Request Process

1. **Fork the Repository:** Click the 'Fork' button at the top right of this repository (`noodle-group/nooDL`) to create your own copy.

2. **Clone the Forked Repository:** Clone your forked repository to your local machine.

```
git clone https://github.com/<your-username>/nooDL
cd nooDL
```

3. **Configure the Remotes:** Add the original repository as a remote named "upstream".

```
git remote add upstream https://github.com/noodle-group/nooDL
```

4. **Create a New Branch:** Create a new branch off of `master` for your feature or bug fix.

```
git checkout master
git checkout -b <branch-name>
```

5. **Commit Your Changes:** Make logical commits with clear and concise commit messages.

6. **Pull the Latest Changes from Upstream:** Make sure you're working with the latest code.

```
git checkout master
git pull upstream master
```

7. **Rebase Your Branch:** This ensures your branch has the latest code from `master`.

```
git checkout <branch-name>
git rebase master
```

8. **Push Changes to Your Fork:**

```
git push origin <branch-name>
```

9. **Submit a Pull Request (PR):** Navigate to your fork on GitHub and click the 'Compare & pull request' button next to your branch. Make sure the base repository is `noodle-group/nooDL` and the base branch is `dev`. Fill out the PR form and then hit 'Create pull request'.

10. **Respond to Code Review Feedback:** If there are changes suggested to your PR, make those changes on your local machine, commit them, and push them to your fork. The PR will update automatically.

## Communication

We use GitHub issues for tracking requests and bugs, and pull requests for discussing proposed changes and reviewing code. If you have other questions, comments, or concerns, please post them in the appropriate issue or pull request.

Thank you for contributing to `nooDL`! Your contributions are valuable and we look forward to seeing what you bring to the project.