
function NotificationRouter(messages) {
  let currentIndex = 0;
  const maxIndex = messages.length - 1;
  const containers = {
    simple: document.getElementById("notification-bar"),
    special: document.getElementById("top-bar")
  };

  function showSnippet() {
    const data = messages[currentIndex];
    const templateId = data.template || "simple";
    // Access the template from the remote js file
    const template = new NotificationCenterTemplates[templateId]();

    // Clear
    for (const id in containers) {
      const el = containers[id];
      if (el.firstChild) el.removeChild(el.firstChild);
      el.hidden = templateId !== id;
    }

    // Render
    containers[templateId].appendChild(template.render(data));

    // Advance index
    currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
  }

  // Show a new snippet every 3 seconds
  showSnippet();
  setInterval(showSnippet, 3000);
}

async function main() {

  // Fetch snippet campaigns from the remote server
  const SNIPPETS_SERVICE_ENDPOINT = "http://localhost:4040";
  const snippetsCampaigns = await (await fetch(SNIPPETS_SERVICE_ENDPOINT)).json();

  // Onboarding messages are shipped with the browser
  const onboardingMessages = [
    {text: "Welcome to Firefox", color: "blue", template: "special"},
    {text: "Have you tried the new tab page?", color: "pink", template: "simple"}
  ];

  NotificationRouter([
    ...onboardingMessages,
    ...snippetsCampaigns
  ]);
}
main();
