import Color from "https://colorjs.io/dist/color.js";

const colorRoles = [
  "Primary",
  "Secondary",
  "Accent",
  "Highlight",
  "Background",
  "Text",
];

function generateHarmoniousPalette(baseColor, harmonyType, count) {
  const color = new Color(baseColor);
  let palette = [];

  switch (harmonyType) {
    case "analogous":
      // Generate colors 30 degrees apart
      for (let i = 0; i < count; i++) {
        palette.push(
          color.clone().set({
            "lch.h": (h) => h + i * 30,
          })
        );
      }
      break;

    case "complementary":
      // For complementary, generate variations around the base and complement
      const complement = color.clone().set({ "lch.h": (h) => h + 180 });
      const step = count > 2 ? 360 / count : 180;

      for (let i = 0; i < count; i++) {
        palette.push(
          color.clone().set({
            "lch.h": (h) => h + i * step,
          })
        );
      }
      break;

    case "triadic":
      // For triadic, distribute colors evenly
      const triadicStep = 360 / count;
      for (let i = 0; i < count; i++) {
        palette.push(
          color.clone().set({
            "lch.h": (h) => h + i * triadicStep,
          })
        );
      }
      break;
  }

  // Generate light/dark variants
  return palette.map((color) => ({
    light: color.clone().set({ "lch.l": 70 }),
    dark: color.clone().set({ "lch.l": 30 }),
  }));
}
function generatePalette() {
  const baseColor = document.getElementById("base-color").value;
  const harmonyType = document.getElementById("harmony-type").value;
  const colorCount = parseInt(document.getElementById("colors-count").value);

  const palette = generateHarmoniousPalette(baseColor, harmonyType, colorCount);

  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = "";

  palette.forEach((colorSet, index) => {
    const box = document.createElement("div");
    box.className = "color-box";

    box.innerHTML = `
          <div class="color-preview-wrapper">
              <div class="color-preview light" style="background-color: ${colorSet.light}"></div>
              <div class="color-preview dark" style="background-color: ${colorSet.dark}"></div>
          </div>
          <div class="color-info">
              <div class="color-hex">
                  Light: ${colorSet.light}
                  Dark: ${colorSet.dark}
              </div>
              <div class="color-role">${colorRoles[index]}</div>
          </div>
      `;

    paletteContainer.appendChild(box);
  });
}

const moodBaseColors = {
  happy: "#FFD700", // Bright yellow
  calm: "#4682B4", // Steel blue
  intense: "#DC143C", // Crimson red
  sad: "#708090", // Slate gray
  energetic: "#FF4500", // Orange red
};

function generateRandomPalette() {
  const colorCount = parseInt(document.getElementById("colors-count").value);
  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = "";

  // Generate random base color or use mood-based color
  const moodSelect = document.getElementById("mood-select");
  const baseColor = moodSelect.value
    ? moodBaseColors[moodSelect.value]
    : `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;

  // Update color picker to show selected/random base color
  document.getElementById("base-color").value = baseColor;

  // Generate harmonious palette from random/mood color
  const harmonyTypes = ["analogous", "complementary", "triadic"];
  const randomHarmony =
    harmonyTypes[Math.floor(Math.random() * harmonyTypes.length)];

  // Update harmony selector
  document.getElementById("harmony-type").value = randomHarmony;

  const palette = generateHarmoniousPalette(
    baseColor,
    randomHarmony,
    colorCount
  );

  palette.forEach((colorSet, index) => {
    const box = document.createElement("div");
    box.className = "color-box";

    box.innerHTML = `
      <div class="color-preview-wrapper">
        <div class="color-preview light" style="background-color: ${colorSet.light}"></div>
        <div class="color-preview dark" style="background-color: ${colorSet.dark}"></div>
      </div>
      <div class="color-info">
        <div class="color-hex">
          Light: ${colorSet.light}
          Dark: ${colorSet.dark}
        </div>
        <div class="color-role">${colorRoles[index]}</div>
      </div>
    `;

    paletteContainer.appendChild(box);
  });
}
function createColorBox(color, role) {
  const box = document.createElement("div");
  box.className = "color-box";

  box.innerHTML = `
      <div class="color-preview" style="background-color: ${color}"></div>
      <div class="color-info">
          <div class="color-hex">${color}</div>
          <div class="color-role">${role}</div>
      </div>
  `;

  box.onclick = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return box;
}

// Theme switcher
document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  document.getElementById("themeLabel").textContent =
    document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
});

document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners
  document
    .getElementById("generateBtn")
    .addEventListener("click", generatePalette);
  document
    .getElementById("randomBtn")
    .addEventListener("click", generateRandomPalette);

  // Generate initial palette
  generatePalette();
});
