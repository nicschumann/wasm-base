import init, { greet } from 'src-wasm';

// We need to load any wasm modules asynchronously...
// We can do this by running init, and then using the
// functions we import.
init().then(() => {
	console.log('init wasm-pack');
	greet('from wasm!');
});

