export default {
  async fetch(request, env) {
    // Optional: Add API/custom logic here later
    // For now, just serve static assets
    return env.ASSETS.fetch(request);
  }
};
