// ./docs/.vitepress/config.js

module.exports = {
    base: '/vue-component-helpers/',
    title: '@obewds/vue-component-helpers',
    description: 'A documentation site for the VueComponentHelpers component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vue-component-helpers" },
            { text: "GitHub", link: "https://github.com/obewds/vue-component-helpers" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
