import Color from "https://colorjs.io/dist/color.js";

// Constants at root level
const colorRoles = [
  "Primary",
  "Secondary",
  "Accent",
  "Highlight",
  "Background",
  "Text",
];

const moodAdjustments = {
  happy: {
    Primary: {
      "lch.l": (l) => l * 1.3,
      "lch.c": (c) => c * 1.2,
      "lch.h": (h) => h + 5,
    },
    Secondary: {
      "lch.l": (l) => l * 1.2,
      "lch.c": (c) => c * 0.9,
      "lch.h": (h) => h + 15,
    },
    Accent: {
      "lch.l": (l) => l * 1.4,
      "lch.c": (c) => c * 1.4,
      "lch.h": (h) => h - 10,
    },
    Highlight: {
      "lch.l": (l) => l * 1.25,
      "lch.c": (c) => c * 1.1,
      "lch.h": (h) => h + 20,
    },
    Background: {
      "lch.l": (l) => l * 1.1,
      "lch.c": (c) => c * 0.7,
      "lch.h": (h) => h,
    },
    Text: {
      "lch.l": (l) => l * 0.9,
      "lch.c": (c) => c * 0.5,
      "lch.h": (h) => h,
    },
  },
  calm: {
    Primary: {
      "lch.l": (l) => l * 0.95,
      "lch.c": (c) => c * 0.7,
      "lch.h": (h) => h - 5,
    },
    Secondary: {
      "lch.l": (l) => l * 0.9,
      "lch.c": (c) => c * 0.6,
      "lch.h": (h) => h - 10,
    },
    Accent: {
      "lch.l": (l) => l * 1.1,
      "lch.c": (c) => c * 0.8,
      "lch.h": (h) => h + 15,
    },
    Highlight: {
      "lch.l": (l) => l * 1.05,
      "lch.c": (c) => c * 0.5,
      "lch.h": (h) => h - 15,
    },
    Background: {
      "lch.l": (l) => l * 0.98,
      "lch.c": (c) => c * 0.3,
      "lch.h": (h) => h,
    },
    Text: {
      "lch.l": (l) => l * 0.8,
      "lch.c": (c) => c * 0.4,
      "lch.h": (h) => h,
    },
  },
  intense: {
    Primary: {
      "lch.l": (l) => l * 0.75,
      "lch.c": (c) => c * 1.8,
      "lch.h": (h) => h,
    },
    Secondary: {
      "lch.l": (l) => l * 0.8,
      "lch.c": (c) => c * 1.6,
      "lch.h": (h) => h + 30,
    },
    Accent: {
      "lch.l": (l) => l * 0.9,
      "lch.c": (c) => c * 2.0,
      "lch.h": (h) => h - 45,
    },
    Highlight: {
      "lch.l": (l) => l * 1.1,
      "lch.c": (c) => c * 1.4,
      "lch.h": (h) => h + 15,
    },
    Background: {
      "lch.l": (l) => l * 0.6,
      "lch.c": (c) => c * 0.8,
      "lch.h": (h) => h,
    },
    Text: {
      "lch.l": (l) => l * 1.2,
      "lch.c": (c) => c * 0.6,
      "lch.h": (h) => h,
    },
  },
  sad: {
    Primary: {
      "lch.l": (l) => l * 0.7,
      "lch.c": (c) => c * 0.6,
      "lch.h": (h) => h - 10,
    },
    Secondary: {
      "lch.l": (l) => l * 0.75,
      "lch.c": (c) => c * 0.5,
      "lch.h": (h) => h - 20,
    },
    Accent: {
      "lch.l": (l) => l * 0.8,
      "lch.c": (c) => c * 0.7,
      "lch.h": (h) => h - 30,
    },
    Highlight: {
      "lch.l": (l) => l * 0.85,
      "lch.c": (c) => c * 0.4,
      "lch.h": (h) => h - 15,
    },
    Background: {
      "lch.l": (l) => l * 0.6,
      "lch.c": (c) => c * 0.3,
      "lch.h": (h) => h - 5,
    },
    Text: {
      "lch.l": (l) => l * 1.3,
      "lch.c": (c) => c * 0.4,
      "lch.h": (h) => h,
    },
  },
  energetic: {
    Primary: {
      "lch.l": (l) => l * 1.1,
      "lch.c": (c) => c * 1.6,
      "lch.h": (h) => h - 15,
    },
    Secondary: {
      "lch.l": (l) => l * 1.15,
      "lch.c": (c) => c * 1.4,
      "lch.h": (h) => h + 30,
    },
    Accent: {
      "lch.l": (l) => l * 1.2,
      "lch.c": (c) => c * 1.8,
      "lch.h": (h) => h - 45,
    },
    Highlight: {
      "lch.l": (l) => l * 1.25,
      "lch.c": (c) => c * 1.3,
      "lch.h": (h) => h + 15,
    },
    Background: {
      "lch.l": (l) => l * 0.9,
      "lch.c": (c) => c * 0.7,
      "lch.h": (h) => h,
    },
    Text: {
      "lch.l": (l) => l * 0.8,
      "lch.c": (c) => c * 0.5,
      "lch.h": (h) => h,
    },
  },
};

const moodBaseColors = {
  happy: "#FFD700",
  calm: "#4682B4",
  intense: "#DC143C",
  sad: "#708090",
  energetic: "#FF4500",
};

// Main palette generation function
function generateHarmoniousPalette(baseColor, harmonyType, count) {
  const color = new Color(baseColor);
  const mood = document.getElementById("mood-select").value;
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
      palette = [color]; // Start with base color

      // Add complement
      palette.push(color.clone().set({ "lch.h": (h) => h + 180 }));

      // If more colors needed, add variations between base and complement
      if (count > 2) {
        const step = 180 / (count - 1);
        for (let i = 1; i < count - 1; i++) {
          palette.push(
            color.clone().set({
              "lch.h": (h) => h + i * step,
            })
          );
        }
      }
      break;

    case "triadic":
      // True triadic colors at 120° intervals
      palette = [
        color,
        color.clone().set({ "lch.h": (h) => h + 120 }),
        color.clone().set({ "lch.h": (h) => h + 240 }),
      ];

      // If more colors needed, distribute evenly between triadic points
      if (count > 3) {
        const extraColors = count - 3;
        const segmentSize = 120 / (extraColors + 1);

        for (let i = 1; i <= extraColors; i++) {
          palette.push(
            color.clone().set({
              "lch.h": (h) => h + i * segmentSize,
            })
          );
        }
      }
      break;
  }

  // Then apply mood adjustments to each color based on its role
  return palette.map((color, index) => {
    const role = colorRoles[index];

    // Apply role-specific mood adjustments if they exist
    if (mood && moodAdjustments[mood] && moodAdjustments[mood][role]) {
      color.set(moodAdjustments[mood][role]);
    }

    // Generate light/dark variants after mood adjustment
    return {
      light: color.clone().set({ "lch.l": 70 }),
      dark: color.clone().set({ "lch.l": 30 }),
    };
  });
} // Separate function for generating palette
function generatePalette() {
  const baseColor = document.getElementById("base-color").value;
  const harmonyType = document.getElementById("harmony-type").value;
  const colorCount = parseInt(document.getElementById("colors-count").value);

  const palette = generateHarmoniousPalette(baseColor, harmonyType, colorCount);

  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = "";

  palette.forEach((colorSet, index) => {
    const box = createColorBox(colorSet, colorRoles[index]);
    paletteContainer.appendChild(box);
  });
}

// Random palette generation
function generateRandomPalette() {
  // Generate random base color
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

  // Randomly select number of colors (3-6)
  const colorCounts = [3, 4, 5, 6];
  const randomCount =
    colorCounts[Math.floor(Math.random() * colorCounts.length)];

  // Randomly select harmony type
  const harmonyTypes = ["analogous", "complementary", "triadic"];
  const randomHarmony =
    harmonyTypes[Math.floor(Math.random() * harmonyTypes.length)];

  // Randomly select mood
  const moods = ["happy", "calm", "intense", "sad", "energetic"];
  const randomMood = moods[Math.floor(Math.random() * moods.length)];

  // Update UI to reflect random selections
  document.getElementById("base-color").value = randomColor;
  document.getElementById("colors-count").value = randomCount;
  document.getElementById("harmony-type").value = randomHarmony;
  document.getElementById("mood-select").value = randomMood;

  // Generate palette with random selections
  const palette = generateHarmoniousPalette(
    randomColor,
    randomHarmony,
    randomCount
  );

  // Display the palette
  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = "";

  palette.forEach((colorSet, index) => {
    const box = createColorBox(colorSet, colorRoles[index]);
    paletteContainer.appendChild(box);
  });
}
// Toast notification function
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.getElementById("toast-container").appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// Color box creation function
function createColorBox(colorSet, role) {
  const box = document.createElement("div");
  box.className = "color-box";

  box.innerHTML = `
    <div class="color-preview-wrapper">
        <div class="color-preview light" style="background-color: ${colorSet.light}" data-color="${colorSet.light}"></div>
        <div class="color-preview dark" style="background-color: ${colorSet.dark}" data-color="${colorSet.dark}"></div>
    </div>
    <div class="color-info">
        <div class="color-hex">
            Light: ${colorSet.light}
            Dark: ${colorSet.dark}
        </div>
        <div class="color-role">${role}</div>
    </div>
  `;

  const lightPreview = box.querySelector(".color-preview.light");
  const darkPreview = box.querySelector(".color-preview.dark");

  lightPreview.addEventListener("click", () => {
    navigator.clipboard.writeText(colorSet.light);
    showToast(`Copied ${colorSet.light} to clipboard!`);
  });

  darkPreview.addEventListener("click", () => {
    navigator.clipboard.writeText(colorSet.dark);
    showToast(`Copied ${colorSet.dark} to clipboard!`);
  });

  return box;
}

// Event listeners at root level
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("generateBtn")
    .addEventListener("click", generatePalette);
  document
    .getElementById("randomBtn")
    .addEventListener("click", generateRandomPalette);
  generatePalette();
});

// Theme switcher
document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  // Update label text based on current theme
  document.getElementById("themeLabel").textContent =
    document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
});
