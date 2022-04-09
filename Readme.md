# HTML Site Template Designs.

## Repository Structure:

Each folder in this repository is a separate website template, with it's own packaged assets and required files.

## Set up local development:

### System Requirements:

- `Node.JS v16+`. Install from [NodeJS.org](https://nodejs.org/en/).
- `Git`. Install From [Git SCM](https://git-scm.com/download/win)
- `Dart Sass` is preferred on windows for compiling source scss files to css. Install using chocolatey [How to Install Sass on Windows with Chocolatey](https://blog.teamtreehouse.com/install-sass-windows-chocolatey)
- `Visual Studio Code`, install from [official site](https://code.visualstudio.com/). Preferred vscode extensions also mentioned at the end. Or use a preferred code editor of your choice.

### Set up environment:

- Clone the repository to a directory of your choice.
- Run `npm install` to set up required dependencies.
- Run `sass --watch ./path/to/source_scss.scss ./path/to/output_css.css`. THis will compile the provided source scss file into the destination css file, which can then be linked into the relevant html files.

## Preferred VSCode extensions:

- `Live Server`: Download from [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). To run a preview local development server while developing.
- `GitLens`
- `Prettier Code Formatter`
