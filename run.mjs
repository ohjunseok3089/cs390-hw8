import "zx/globals";

within(async () => {
  cd("backend");
  await $`npm run dev`;
});
within(async () => {
  cd("frontend");
  $`npm run dev`;
});
