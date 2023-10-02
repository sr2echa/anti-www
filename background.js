chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      let url = new URL(details.url);
  
      if (url.protocol === 'http:' || url.hostname.startsWith('www.')) {
        url.protocol = 'https:';
        url.hostname = url.hostname.replace('www.', '');
        return { redirectUrl: url.href };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  