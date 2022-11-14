import "zx/globals";

cd("frontend");
await $`npm install`;

cd("../backend");
await $`npm install`;
