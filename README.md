# Atmospheric Blogrolls

[🌐 **Live demo** (currently MVP on the frontend)](https://blogroll.andreijiroh.dev) | [📝 **Planning docs**](https://docs.google.com/document/d/1-k6EbvXpzq6IXzv2mV57geAh7ZyiBtxOn1a4IEOSCrE/edit)

A experimental side webapp for sharing my blogroll the Atmospheric way integrating Semble + Margin APIs and AT Proto SDK with [standard.site]-inspired custom lexicons for blogrolls. Built with Astro + Material Design (via `@material/web` npm package) for [CodeTV](https://codetv.dev)'s [AT Proto-themed Web Dev Challenge hackathon](https://codetv.dev/hackathon/rebuild-your-website-again).

It's still a work in progress due to me poking around Antigravity CLI (as a regular Google Gemini user via its 1-year-long student trial of Google AI Pro since October 11, 2025) to speed run through things (mainly tweaking around the theme colors (god forbid the purple gradients) and how to do SSR vs rebuilds if I choose Deno Deploy over Cloudflare Workers) alongside having other commitments during the break between semesters (aka taking AI Prompting for Automation III at STI College Meycauayan in partnership with TESDA)

## Where it's hosted

For the repository itself, it is primarily hosted over at [Tangled]() with mirrors for [GitLab.com](https://gitlab.com/andreijiroh-dev/labs/atmospheric-blogrolls) and [GitHub](https://github.com/andreijirohdev-labs/atmospheric-blogrolls).

As for the website itself, it currently hosted over at Deno Deploy via the Deno adapter. If you fork at will, feel free to swap with your favorite adapter as needed.

## Astro Docs!

_This section is based off [the minimal template](https://github.com/withastro/astro/tree/main/examples/minimal) tweaked for this project._

### 🚀 Project Structure

In this Astro project, you'll see the following folders and files:

```tree
/
├── lexicons
|   ├── dev.andreijiroh.blogroll.document.json
|   └── dev.andreijiroh.blogroll.publication.json
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [its guide on project structure](https://docs.astro.build/en/basics/project-structure/).

### 🧞 Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                           |
| :-------------------------- | :----------------------------------------------- |
| `deno install`              | Installs dependencies                            |
| `deno task dev`             | Starts local dev server at `localhost:4321`      |
| `deno task build`           | Build your production site to `./dist/`          |
| `deno task preview`         | Preview your build locally, before deploying     |
| `deno run npm:astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `deno run npm:astro --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## License

MPL-2.0
