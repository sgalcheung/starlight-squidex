<div align="center">
  <h1>💜 starlight-squidex ❤️</h1>
  <p>Starlight plugin to pull articles from Squidex(3rd-party API) to your documentation.</p>
  <p>
    <a href="/screenshot.gif" title="Screenshot of starlight-squidex">
      <img alt="Screenshot of starlight-squidex" src="/screenshot.gif" width="520" />
    </a>
  </p>
</div>

> origin discussion [Pull main docs Content from 3rd-party API (a headless CMS) · withastro/starlight · Discussion #1790 (github.com)](https://github.com/withastro/starlight/discussions/1790)

## 🌠 Getting Started

Want to get started immediately? Check out the source code or check out the [example](https://starlight-squidex.netlify.app) to see the plugin in action.

## 🚀 Project Structure

```test
.
├── LICENSE
├── README.md -> ./playground/README.md
├── docs
│   └── node_modules
├── netlify
│   └── functions
├── netlify.toml
├── package.json
├── packages
│   ├── desquidex
│   ├── squidex
│   ├── starlight-squidex
│   └── starlight-ssr
├── playground
│   ├── README.md
│   ├── astro.config.mjs
│   ├── codegen.ts
│   ├── components.json
│   ├── dist
│   ├── netlify
│   ├── node_modules
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tailwind.config.mjs
│   └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── screenshot.png
└── scripts
    └── release.mjs
```

starlight-squidex has unused, it is squidex and starlight-ssr mixed test product.

## ⚙️ Features

A [Starlight](https://starlight.astro.build) plugin to server render contents, it is experment, more features are under development.

- SSR render contents

> This README format inspired from [starlight-blog/README.md at main · HiDeoo/starlight-blog (github.com)](https://github.com/HiDeoo/starlight-blog/blob/main/README.md)

## Licensing

[MIT Licensed](./LICENSE). Made with ❤️ by [Sgal Cheung](https://github.com/sgalcheung).
