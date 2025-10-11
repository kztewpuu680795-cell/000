self.addEventListener('message', async (event) => {
  const { url } = event.data;
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}  ${url}`);
    const blob = await resp.blob();
    self.postMessage({ blob });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
});