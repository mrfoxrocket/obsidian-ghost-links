This plugin for Obsidian ([obsidian.md](https://obsidian.md/)) adds a new type of link that doesn't show up in the graph.

The link is like regular WikiLinks but with curly braces:

```
{{Note|alias}}
{{Note}}
```

It looks like a regular link, except that it doesn't create an edge in the graph view. Useful for making a clickable reference without implying a logical connection.

Does not support Markdown links, only WikiLinks.

Forked from [obsidian-graphhless-links](https://github.com/Talndir/obsidian-graphless-links) to add autocomplete functionality.

# Installation

As per the [Obsidian Sample Repo](https://github.com/obsidianmd/obsidian-sample-plugin)

1. Clone this repo.
2. Make sure your NodeJS is at least v16 (node --version).
3. npm i or yarn to install dependencies.
4. npm run build or npm run dev to start compilation in watch mode.
5. Optional - Delete everything expect main.js and mainfest.json.
6. Enable plugin in Obsidian community plugins settings.
