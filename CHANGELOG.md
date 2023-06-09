# Changelog


## v0.0.6...main

[compare changes](https://github.com/nyxblabs/materialiconic/compare/v0.0.6...main)


### 🎨 Styles

  - **CHANGELOG.md): add missing space between sections 🖼️ chore(images:** Update fileIcons.png and folderIcons.png The CHANGELOG.md file was updated to add a missing space between sections to improve readability. The images folder was updated with new versions of fileIcons.png and folderIcons.png. ([82d4aa2](https://github.com/nyxblabs/materialiconic/commit/82d4aa2))
  - **fileIcons.ts): add new icons for kolibry and kolitest configuration files 🖼️ add(kolibry.svg): add new icon for kolibry configuration files 🖼️ add(kolitest.svg:** Add new icon for kolitest configuration files The commit adds two new icons for kolibry and kolitest configuration files. The icons are added to the fileIcons.ts file, and the corresponding SVG files are added to the icons directory. This improves the visual representation of the configuration files and makes it easier to identify them in the project. ([597e2a1](https://github.com/nyxblabs/materialiconic/commit/597e2a1))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## v0.0.6...v0.0.6

[compare changes](https://github.com/nyxblabs/materialiconic/compare/v0.0.6...v0.0.6)

## v0.0.5...main

[compare changes](https://github.com/nyxblabs/materialiconic/compare/v0.0.5...main)


### 🩹 Fixes

  - **folderIcons.ts:** Set 'ISSUE_TEMPLATE','PULL_REQUEST_TEMPLATE','workflows', on the right place ([c9b8e20](https://github.com/nyxblabs/materialiconic/commit/c9b8e20))

### ❤️  Contributors

- Dennis Ollhoff <contact@nyxb.xyz>

## v0.0.4...main

[compare changes](https://github.com/nyxblabs/materialiconic/compare/v0.0.4...main)


### 🏡 Chore

  - **logo.png:** Update logo image The logo.png file has been updated, but no changes were made to the code. This commit is purely cosmetic and updates the logo image. ([884f9f2](https://github.com/nyxblabs/materialiconic/commit/884f9f2))
  - **logo.svg:** Update logo image The logo.svg file has been updated, but no changes were made to the code. This commit is purely cosmetic and updates the logo image. ([a8e3250](https://github.com/nyxblabs/materialiconic/commit/a8e3250))

### 🎨 Styles

  - **folderIcons.ts:** Add new folder names to folderIcons Added new folder names to the folderIcons array to include ISSUE_TEMPLATE, PULL_REQUEST_TEMPLATE, and workflows. This improves the consistency of the folder icons and makes it easier to identify these folders in the file explorer. ([3c330aa](https://github.com/nyxblabs/materialiconic/commit/3c330aa))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## v0.0.3...main

[compare changes](https://github.com/nyxblabs/materialiconic/compare/v0.0.3...main)


### 🏡 Chore

  - **package.json:** Add generateJson script to vscode:prepublish script The generateJson script was added to the vscode:prepublish script to generate the necessary JSON files for the extension to work properly. This improves the build process and ensures that the extension is fully functional. ([46bbae9](https://github.com/nyxblabs/materialiconic/commit/46bbae9))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## v0.0.2...main

[compare changes](https://github.com/nyxblabs/materialiconic/compare/v0.0.2...main)


### 🚀 Enhancements

  - **icons:** Add new folder icons for different categories Four new SVG icons have been added to the icons folder. Two of them represent closed folders, while the other two represent open folders. The folders are categorized into blog, course, and UI. The icons have been designed to be consistent with the existing icons in the folder. ([b995db3](https://github.com/nyxblabs/materialiconic/commit/b995db3))

### 🏡 Chore

  - **logo.png:** Update logo image The logo.png file has been updated, but no changes to the code have been made. This commit only updates the image file. ([ec28b7e](https://github.com/nyxblabs/materialiconic/commit/ec28b7e))
  - **logo.svg:** Update logo image The logo.svg file has been updated, but no changes to the code have been made. This commit only updates the image file. ([b39ed41](https://github.com/nyxblabs/materialiconic/commit/b39ed41))

### 🎨 Styles

  - **icons:** Change folder open icon fill color from #0d9373 to #00cfff The fill color of the folder open icon has been changed from #0d9373 to #00cfff to improve consistency with the color scheme of the application. ([#0](https://github.com/nyxblabs/materialiconic/issues/0), [#00](https://github.com/nyxblabs/materialiconic/issues/00))
  - **README.md:** Add badges for Visual Studio Code marketplace statistics This commit adds badges for Visual Studio Code marketplace statistics, including version, installs, ratings, and downloads. This provides users with more information about the extension's popularity and usage. ([d007890](https://github.com/nyxblabs/materialiconic/commit/d007890))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## ...main


### 🩹 Fixes

  - **README.md:** Update license badge URL to point to the correct repository The license badge URL was pointing to the wrong repository, which could cause confusion for users. The URL has been updated to point to the correct repository. ([6b31585](https://github.com/nyxblabs/materialiconic/commit/6b31585))
  - **build.yml): remove manual installation of PNPM on Windows ✨ feat(build.yml:** Add environment variables to support running tests on Ubuntu with Xvfb The manual installation of PNPM on Windows is no longer necessary as the pnpm/action-setup@v2 action now supports Windows. The environment variables DISPLAY, CI, and DEBUG are added to support running tests on Ubuntu with Xvfb. This allows the tests to run in a headless environment, which is necessary for the tests to pass. ([8384270](https://github.com/nyxblabs/materialiconic/commit/8384270))
  - **build.yml:** Add separate steps for setting up PNPM on Windows and Linux The build workflow now has separate steps for setting up PNPM on Windows and Linux. This is necessary because the installation process for PNPM is different on these two operating systems. The new steps ensure that PNPM is installed correctly on both Windows and Linux, which will prevent build failures due to missing dependencies. ([742adb4](https://github.com/nyxblabs/materialiconic/commit/742adb4))
  - **build.yml): add conditional step to install Node.js on Windows ✨ feat(build.yml:** Add conditional step to install Node.js on Ubuntu The conditional step to install Node.js on Windows was added to the build workflow. This is necessary because the Windows environment requires a different installation process than the Ubuntu environment. The conditional step to install Node.js on Ubuntu was also added to the build workflow to ensure that the correct version of Node.js is installed on the Ubuntu environment. ([eec242b](https://github.com/nyxblabs/materialiconic/commit/eec242b))
  - **contributors): fix typo in path to fetch contributors from GitHub API 🚀 chore(contributors:** Update contributors list in README.md The path to fetch contributors from the GitHub API was incorrect due to a typo in the repository name. This has been fixed to point to the correct repository. The contributors list in the README.md file has been updated to reflect the latest contributors. ([7a7fe40](https://github.com/nyxblabs/materialiconic/commit/7a7fe40))
  - **release.yml:** Add --no-dependencies flag to vsce package command The --no-dependencies flag is added to the vsce package command to prevent the inclusion of unnecessary dependencies in the package. This reduces the package size and improves the installation time of the extension. ([f3e436c](https://github.com/nyxblabs/materialiconic/commit/f3e436c))

### 🏡 Chore

  - **build.yml:** Add echo steps to build workflow for better visibility Added echo steps to the build workflow to improve visibility and make it easier to track the progress of the workflow. The echo steps are added after each major step in the workflow, such as checkout, node setup, PNPM setup, display server setup, node modules installation, caching, and test + build. ([cf081f9](https://github.com/nyxblabs/materialiconic/commit/cf081f9))
  - **build.yml:** Refactor build workflow to remove unnecessary echo commands and add conditional installation of PNPM The workflow has been refactored to remove unnecessary echo commands that were used for debugging purposes. PNPM installation is now conditional based on the operating system. PNPM is automatically installed on Ubuntu, but on Windows, it needs to be manually installed. ([23ec5f9](https://github.com/nyxblabs/materialiconic/commit/23ec5f9))
  - **build.yml:** Remove redundant environment variables and platform-specific setup steps The environment variables CI and DEBUG are not needed for the installation of node_modules and are removed. The platform-specific setup steps for Node.js and PNPM are also removed as the same setup can be used for both Windows and Linux. ([7ac3af1](https://github.com/nyxblabs/materialiconic/commit/7ac3af1))
  - **build.yml:** Add pretest script to run before tests The pretest script is added to the build workflow to run before the tests. This script is used to perform any necessary setup or configuration before running the tests. ([f010669](https://github.com/nyxblabs/materialiconic/commit/f010669))
  - **build.yml): update build workflow to install and use @nyxb/nyxi for display server 🚀 feat(build.yml:** Add @nyxb/nyxi to the build workflow to improve display server reliability The build workflow has been updated to install and use @nyxb/nyxi for the display server. This improves the reliability of the display server and ensures that the tests run smoothly. ([c9f3ac9](https://github.com/nyxblabs/materialiconic/commit/c9f3ac9))
  - **build.yml:** Update build workflow to use pnpm v2 and cache node_modules in ~/.pnpm-store The build workflow has been updated to use pnpm v2 and cache node_modules in the ~/.pnpm-store directory. This improves the build time and reduces the amount of data that needs to be downloaded during the build process. The @nyxb/nyxi package is now installed using pnpm instead of globally installing it using nyxi. The display server is now started only on the ubuntu-latest operating system. ([51aaa95](https://github.com/nyxblabs/materialiconic/commit/51aaa95))
  - **build.yml:** Add pretest script to run before tests The pretest script is added to the build workflow to ensure that the tests run smoothly. This script will be executed before running the tests to ensure that the environment is set up correctly. ([5c9e418](https://github.com/nyxblabs/materialiconic/commit/5c9e418))
  - **release.yml:** Add step to install @nyxb/nyxi globally The @nyxb/nyxi package is installed globally to be able to use it in the release process. ([8c9209d](https://github.com/nyxblabs/materialiconic/commit/8c9209d))
  - **.eslintrc:** Remove trailing comma in rules object The trailing comma in the rules object was removed to improve consistency with the rest of the file. ([2cbf784](https://github.com/nyxblabs/materialiconic/commit/2cbf784))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

