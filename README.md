# Basic WASM + Vite Repository

This is just a simple, baseline repository that can act as a starting point for `wasm` projects.

## Installation

1. If you don't have a Rust compiler installed, get `rustup` [here](https://rustup.rs/). This will help you install all of the required tools for running a standard rust compiler.
2. Get `wasm-pack`. This installs the `wasm-pack` command, which lets you build rust code for the `wasm32_unknown_unknown` compiler target, and generates js glue code for your wasm.
3. `npm install`. Install all node-dependencies.
4. `npm run build-wasm`. Runs `wasm-pack`: this will handle installing any rust dependencies.
5. `npm run dev`. Start a development site.

*Note: you can follow the tutorial [here](https://rustwasm.github.io/book/game-of-life/setup.html) as a rust setup guide.*

You should now have a dev server running the application at `localhost:3000`.