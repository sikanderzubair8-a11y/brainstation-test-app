const swatchesEl = document.querySelector("#swatches");
const statusEl = document.querySelector("#status");
const posterEl = document.querySelector("#poster");
const posterCodesEl = document.querySelector("#posterCodes");
const generateBtn = document.querySelector("#generateBtn");
const copyAllBtn = document.querySelector("#copyAllBtn");
const resetBtn = document.querySelector("#resetBtn");

const starterColors = ["#0F8B8D", "#F2BA5A", "#B23A48", "#6A994E", "#20242A"];
let colors = starterColors.map((hex) => ({ hex, locked: false }));

function randomHex() {
  const value = Math.floor(Math.random() * 0xffffff);
  return `#${value.toString(16).padStart(6, "0").toUpperCase()}`;
}

function readableText(hex) {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 150 ? "#20242A" : "#FFFFFF";
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    statusEl.textContent = `${label} copied.`;
  } catch {
    statusEl.textContent = "Copy failed. Select the text and copy it manually.";
  }
}

function updatePoster() {
  posterEl.style.setProperty("--poster-bg", colors[4].hex);
  posterEl.style.setProperty("--poster-band", colors[0].hex);
  posterEl.style.setProperty("--poster-a", colors[1].hex);
  posterEl.style.setProperty("--poster-b", colors[2].hex);
  posterEl.style.setProperty("--poster-c", colors[3].hex);
  posterEl.style.setProperty("--poster-d", readableText(colors[4].hex));
  posterCodesEl.textContent = colors.map((color) => color.hex).join(" / ");
}

function render() {
  swatchesEl.innerHTML = "";

  colors.forEach((color, index) => {
    const swatch = document.createElement("article");
    swatch.className = `swatch${color.locked ? " locked" : ""}`;

    const colorBlock = document.createElement("div");
    colorBlock.className = "swatch-color";
    colorBlock.style.background = color.hex;

    const info = document.createElement("div");
    info.className = "swatch-info";

    const hex = document.createElement("div");
    hex.className = "hex";
    hex.textContent = color.hex;

    const actions = document.createElement("div");
    actions.className = "swatch-actions";

    const lockBtn = document.createElement("button");
    lockBtn.type = "button";
    lockBtn.textContent = color.locked ? "Unlock" : "Lock";
    lockBtn.addEventListener("click", () => {
      colors[index].locked = !colors[index].locked;
      statusEl.textContent = colors[index].locked ? `${color.hex} locked.` : `${color.hex} unlocked.`;
      render();
    });

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.textContent = "Copy";
    copyBtn.addEventListener("click", () => copyText(color.hex, color.hex));

    actions.append(lockBtn, copyBtn);
    info.append(hex, actions);
    swatch.append(colorBlock, info);
    swatchesEl.append(swatch);
  });

  updatePoster();
}

generateBtn.addEventListener("click", () => {
  colors = colors.map((color) => (color.locked ? color : { hex: randomHex(), locked: false }));
  statusEl.textContent = "New palette generated.";
  render();
});

copyAllBtn.addEventListener("click", () => {
  copyText(colors.map((color) => color.hex).join(", "), "Palette");
});

resetBtn.addEventListener("click", () => {
  colors = starterColors.map((hex) => ({ hex, locked: false }));
  statusEl.textContent = "Palette reset.";
  render();
});

render();
