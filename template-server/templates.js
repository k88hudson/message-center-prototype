class Simple {
  render(json) {
    const container = document.createElement("div");
    container.textContent = json.text;
    container.style.color = json.color;
    container.classList.add("simple");
    return container;
  }
}

class Special {
  render(json) {
    const container = document.createElement("div");
    container.textContent = json.text;
    container.style.color = json.color;
    container.classList.add("special");
    return container;
  }
}

window.NotificationCenterTemplates = {
  simple: Simple,
  special: Special
};
