// Deno.serve((req) => new Response("Hello world"));

const testFn = () => {
  return 989102094;
}

Deno.serve((req) => {
  const res = testFn();
  return new Response(res);
});
