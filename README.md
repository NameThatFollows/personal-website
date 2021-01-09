<h1 align="center">
  Personal Website
</h1>

This is the source code for my personal website. The site uses Gatsby to generate a static website that can be hosted on Github Pages. Most of the content lives in JSON and Markdown files. The Gatsby was created using the [hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world).

## Develop

1. **Install Dependencies**

    Gatsby CLI should be installed globally to make development easier.

    ```shell
    npm install -g gatsby-cli
    git clone <repository>
    cd personal-website
    npm install
    ```

2. **Start Development Server**

    The following launches the development server and supports auto-reloading when changes are made.

    ```shell
    gatsby develop
    ```

    The site will run at `http://localhost:8000`. The graphql interface will launch at `http://localhost:8000:___graphql` if data querying is needed.


## File Structure

A rough description of the important files and folders in this repo.

    .
    ├── node_modules
    ├── src
    │   ├── components
    │   ├── data
    │   │   ├── lists
    │   ├── images
    │   ├── pages
    │   ├── styles
    │   ├── utils
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: The dependencies required to develop and build the site. Also the size of the sun.

2.  **`/src`**: The source files.

    a. **`/components`**: Contains components and component styles that I use in pages.

    b. **`/data/lists`**: Contains JSONs for my list data, which gets parsed by the list components.

    c. **`/images`**: Images referenced in components and pages.

    d. **`/pages`**: Core pages for the website.

    e. **`/styles`**: Contains global styles.

    f. **`/utils`**: Contains utility functions for reusable logic.

3.  **`.gitignore`**: Files not to be tracked by git. Generated by the starter.

4.  **`gatsby-browser.js`**: Contains configuration for the customization/extension of default Gatsby settings affecting the browser.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. Stores site metadata and Gatsby plugin configurations.

6.  **`gatsby-node.js`**: This file stores configurations of the site's build process.

10. **`package-lock.json`** Automatically generated file based on the exact versions of the npm dependencies that were installed for your project.

11. **`package.json`**: Node.js manifest file.

12. **`README.md`**: This file.

## Build


## Deploy
