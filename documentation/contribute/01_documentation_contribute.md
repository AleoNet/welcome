---
id: documentation_contribute
title: DevDocs Contribution
sidebar_label: DevDocs Contribution
---
<!-- markdown-link-check-disable -->
Welcome to the Aleo DevDocs contribution guide! We invite you to help improve our documentation, making it more comprehensive and up-to-date. Your contributions, big or small, are valuable in enhancing the Aleo ecosystem for developers. This guide will walk you through the process of contributing effectively to our documentation.

## Getting Started

1. Fork the [aleo-docs repository](https://github.com/AleoNet/aleo-docs) on GitHub.

2. Clone your forked repository locally:
   ```
   git clone https://github.com/YOUR-USERNAME/aleo-docs.git
   ```
3. Navigate to the project directory:
   ```
   cd aleo-docs
   ```
4. Initialize and update the submodule:
   ```
   git submodule update --init --recursive
   ```

## Making Changes

1. Create a new branch for your changes:
   ```
   git checkout -b your-feature-branch
   ```
2. Navigate to the `welcome` submodule directory:
   ```
   cd welcome
   ```
3. Make your changes to the documentation files. Most content is in Markdown format.
4. Test your changes locally by running the Docusaurus development server at root of `aleo-docs` repository:
   ```
   yarn start
   ```
5. Commit your changes with a descriptive commit message:
   ```
   git commit -am "Add description of your changes"
   ```

## Submitting Your Contribution

1. Push your changes to your forked repository:
   ```
   git push origin your-feature-branch
   ```
2. Go to the [aleo-docs](https://github.com/AleoNet/aleo-docs) and its submodule [welcome](https://github.com/AleoNet/welcome) on GitHub and create a new pull request from `your-feature-branch`.
3. Provide a clear title and description for your pull request, explaining the changes you've made.
4. Submit the pull request for review.

## Guidelines

- Ensure your writing is clear, concise, and follows the existing style of the documentation.
- Use proper Markdown formatting for headings, code blocks, and other elements.
- If adding new pages, update the sidebar configuration appropriately.
- Include any necessary images or diagrams to illustrate concepts.
- Verify all links are correct and working.

## Need Help?

If you have any questions or need assistance, please don't hesitate to open an issue in the [aleo-docs](https://github.com/AleoNet/aleo-docs) or [welcome](https://github.com/AleoNet/welcome) repository or reach out to the maintainers.

Thank you for contributing to the Aleo documentation!
<!-- markdown-link-check-enable -->