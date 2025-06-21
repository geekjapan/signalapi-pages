export async function onRequest(context) {
  const req = context.request;
  const url = "https://lean-signal-api.geekjapan.workers.dev";
  
  const init = {
    method: req.method,
    headers: req.headers,
    body: req.body
  };

  const response = await fetch(url, init);
  return response;
}
