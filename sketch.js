// Dữ liệu bán kính và các mảng khác giữ nguyên
const theoreticalAtomicData = [
  // Chu kỳ 1:
  [
    { symbol: "H", radius: 53 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "He", radius: 31 }
  ],
  // Chu kỳ 2:
  [
    { symbol: "Li", radius: 152 },
    { symbol: "Be", radius: 112 },
    { symbol: "B",  radius: 87 },
    { symbol: "C",  radius: 67 },
    { symbol: "N",  radius: 56 },
    { symbol: "O",  radius: 48 },
    { symbol: "F",  radius: 42 },
    { symbol: "Ne", radius: 38 }
  ],
  // Chu kỳ 3:
  [
    { symbol: "Na", radius: 186 },
    { symbol: "Mg", radius: 160 },
    { symbol: "Al", radius: 143 },
    { symbol: "Si", radius: 111 },
    { symbol: "P",  radius: 98 },
    { symbol: "S",  radius: 88 },
    { symbol: "Cl", radius: 79 },
    { symbol: "Ar", radius: 71 }
  ],
  // Chu kỳ 4:
  [
    { symbol: "K",  radius: 227 },
    { symbol: "Ca", radius: 197 },
    { symbol: "Ga", radius: 135 },
    { symbol: "Ge", radius: 125 },
    { symbol: "As", radius: 114 },
    { symbol: "Se", radius: 103 },
    { symbol: "Br", radius: 94 },
    { symbol: "Kr", radius: 88 }
  ],
  // Chu kỳ 5:
  [
    { symbol: "Rb", radius: 248 },
    { symbol: "Sr", radius: 215 },
    { symbol: "In", radius: 167 },
    { symbol: "Sn", radius: 140 },
    { symbol: "Sb", radius: 133 },
    { symbol: "Te", radius: 123 },
    { symbol: "I",  radius: 115 },
    { symbol: "Xe", radius: 108 }
  ],
  // Chu kỳ 6:
  [
    { symbol: "Cs", radius: 265 },
    { symbol: "Ba", radius: 222 },
    { symbol: "Tl", radius: 170 },
    { symbol: "Pb", radius: 154 },
    { symbol: "Bi", radius: 143 },
    { symbol: "Po", radius: 135 },
    { symbol: "At", radius: 127 },
    { symbol: "Rn", radius: 120 }
  ]
];

const experimentalAtomicData = [
  // Chu kỳ 1:
  [
    { symbol: "H", radius: 31 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "He", radius: 32 }
  ],
  // Chu kỳ 2:
  [
    { symbol: "Li", radius: 167 },
    { symbol: "Be", radius: 112 },
    { symbol: "B",  radius: 85 },
    { symbol: "C",  radius: 70 },
    { symbol: "N",  radius: 65 },
    { symbol: "O",  radius: 60 },
    { symbol: "F",  radius: 50 },
    { symbol: "Ne", radius: 38 }
  ],
  // Chu kỳ 3:
  [
    { symbol: "Na", radius: 190 },
    { symbol: "Mg", radius: 145 },
    { symbol: "Al", radius: 143 },
    { symbol: "Si", radius: 111 },
    { symbol: "P",  radius: 110 },
    { symbol: "S",  radius: 100 },
    { symbol: "Cl", radius: 100 },
    { symbol: "Ar", radius: 71 }
  ],
  // Chu kỳ 4:
  [
    { symbol: "K",  radius: 243 },
    { symbol: "Ca", radius: 194 },
    { symbol: "Ga", radius: 135 },
    { symbol: "Ge", radius: 122 },
    { symbol: "As", radius: 115 },
    { symbol: "Se", radius: 115 },
    { symbol: "Br", radius: 115 },
    { symbol: "Kr", radius: 88 }
  ],
  // Chu kỳ 5:
  [
    { symbol: "Rb", radius: 265 },
    { symbol: "Sr", radius: 219 },
    { symbol: "In", radius: 167 },
    { symbol: "Sn", radius: 140 },
    { symbol: "Sb", radius: 140 },
    { symbol: "Te", radius: 135 },
    { symbol: "I",  radius: 133 },
    { symbol: "Xe", radius: 108 }
  ],
  // Chu kỳ 6:
  [
    { symbol: "Cs", radius: 265 },
    { symbol: "Ba", radius: 222 },
    { symbol: "Tl", radius: 170 },
    { symbol: "Pb", radius: 175 },
    { symbol: "Bi", radius: 156 },
    { symbol: "Po", radius: 168 },
    { symbol: "At", radius: 150 },
    { symbol: "Rn", radius: 150 }
  ]
];

const groupNames = ["IA", "IIA", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"];

const atomicNumbers = {
  "H": 1, "He": 2,
  "Li": 3, "Be": 4, "B": 5, "C": 6, "N": 7, "O": 8, "F": 9, "Ne": 10,
  "Na": 11, "Mg": 12, "Al": 13, "Si": 14, "P": 15, "S": 16, "Cl": 17, "Ar": 18,
  "K": 19, "Ca": 20, "Ga": 31, "Ge": 32, "As": 33, "Se": 34, "Br": 35, "Kr": 36,
  "Rb": 37, "Sr": 38, "In": 49, "Sn": 50, "Sb": 51, "Te": 52, "I": 53, "Xe": 54,
  "Cs": 55, "Ba": 56, "Tl": 81, "Pb": 82, "Bi": 83, "Po": 84, "At": 85, "Rn": 86
};

// Các biến điều khiển
let useExperimental = false;
let toggleButton;
let tableOffsetX = 0;
let tableOffsetY = 0;
let dragging = false;
let prevMouseX, prevMouseY;
const nucleusDiameterFixed = 6;

// Kích thước cơ sở của bảng
const cols = 8;
const rows = 6;
const spacingX = 150;
const spacingY = 150;
let initialZoomFactor;
let zoomFactor;

function preload() {
  myFont = loadFont("Arial.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Nếu thiết bị không mạnh, có thể giảm pixelDensity xuống 1
  pixelDensity(1);
  smooth();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);  // Sử dụng độ thay vì radian

  const baseZoomX = windowWidth / 1050;
  const baseZoomY = windowHeight / 750;
  initialZoomFactor = 0.5 * min(baseZoomX, baseZoomY);
  zoomFactor = initialZoomFactor;
  tableOffsetX = 0;
  tableOffsetY = 0;

  toggleButton = createButton("Chuyển sang bán kính " + (useExperimental ? "Lý thuyết" : "Thực nghiệm"));
  toggleButton.position(20, 20);
  toggleButton.mousePressed(toggleData);
}

// Hàm tự vẽ hình tròn mịn với số đỉnh cao theo mức độ zoom
function drawSmoothEllipse(x, y, w, h, detail) {
  const a = w / 2;
  const b = h / 2;
  beginShape();
  for (let i = 0; i < detail; i++) {
    let angle = map(i, 0, detail, 0, 360);
    let vx = x + a * cos(angle);
    let vy = y + b * sin(angle);
    vertex(vx, vy);
  }
  endShape(CLOSE);
}

function draw() {
  background(0);
  push();
    scale(zoomFactor);
    const startX = -((cols - 1) * spacingX) / 2 + tableOffsetX;
    const startY = -((rows - 1) * spacingY) / 2 + tableOffsetY;
    
    ambientLight(150);
    directionalLight(255, 255, 255, 0, -1, 0);
    
    const atomicData = useExperimental ? experimentalAtomicData : theoreticalAtomicData;
  
    // Vẽ các hàng (chu kỳ)
    for (let i = 0; i < rows; i++) {
      push();
        translate(startX - spacingX * 0.8, startY + i * spacingY, 0);
        fill(255);
        noStroke();
        textSize(20);
        text("Chu kỳ " + (i + 1), 0, 0);
      pop();
      
      for (let j = 0; j < cols; j++) {
        if (i === 0 && j >= 1 && j <= 6) continue;
        
        const x = startX + j * spacingX;
        const y = startY + i * spacingY;
        const data = atomicData[i][j];
        
        push();
          translate(x, y, 0);
          let outerRadius = 5;
          if (data.symbol !== "" && data.radius > 0) {
            outerRadius = map(data.radius, 30, 300, 20, 60);
          }
          
          // Xác định chi tiết động dựa trên zoomFactor:
          // Khi zoom thấp (zoomFactor nhỏ) thì giảm chi tiết, khi zoom cao tăng
          const detailLevel = floor(map(zoomFactor, 0.1, 5, 40, 150));
          
          const numCircles = i + 1;
          noFill();
          stroke(240, 240, 80);
          strokeWeight(1.5);
          for (let k = 0; k < numCircles; k++) {
            const factor = (numCircles - k) / numCircles;
            const d = outerRadius * 2 * factor;
            drawSmoothEllipse(0, 0, d, d, detailLevel);
          }
          
          if (data.symbol !== "") {
            push();
              fill(255, 0, 0);
              noStroke();
              ellipse(0, 0, nucleusDiameterFixed, nucleusDiameterFixed);
              fill(255);
              textSize(3);
              text(atomicNumbers[data.symbol] + "+", 0, 0);
            pop();
          }
          
          push();
            translate(0, outerRadius + 15, 0);
            fill(255);
            noStroke();
            textSize(16);
            if (data.radius > 0 && data.symbol !== "") {
              text(data.symbol + ": " + data.radius + " pm", 0, 0);
            } else if (data.radius > 0) {
              text(data.radius + " pm", 0, 0);
            }
          pop();
        pop();
      }
    }
    
    for (let j = 0; j < cols; j++) {
      push();
        translate(startX + j * spacingX, startY - spacingY * 0.8, 0);
        fill(255);
        noStroke();
        textSize(20);
        text(groupNames[j], 0, 0);
      pop();
    }
    
    const csOuter = map(265, 30, 300, 20, 60);
    const noteYWorld = startY + 5 * spacingY + csOuter + 15 + 30;
    const noteXWorld = startX - spacingX * 0.8;
    
    push();
      textAlign(LEFT, TOP);
      textSize(16);
      fill(255);
      text(`Nguồn dữ liệu:
1. CRC Handbook of Chemistry and Physics, 103rd Edition.
2. NIST (National Institute of Standards and Technology).
3. IUPAC Periodic Table.
4. RSC (Royal Society of Chemistry).

Hướng dẫn:
- Bấm giữ chuột trái để di chuyển bảng.
- Lăn chuột tại vị trí con trỏ để phóng to hoặc thu nhỏ, điểm dưới con trỏ luôn cố định.
- Nhấp đúp chuột trái để quay về trạng thái hiển thị ban đầu.
@ HÓA HỌC ABC`, noteXWorld, noteYWorld);
    pop();
    
  pop();
}

function toggleData() {
  useExperimental = !useExperimental;
  toggleButton.html("Chuyển sang bán kính " + (useExperimental ? "Lý thuyết" : "Thực nghiệm"));
}

function mouseWheel(event) {
  const oldZoom = zoomFactor;
  const zoomSensitivity = 0.001;
  zoomFactor = zoomFactor * Math.exp(-event.deltaY * zoomSensitivity);
  zoomFactor = constrain(zoomFactor, 0.1, 5);
  tableOffsetX += (mouseX - width / 2) * (1 / zoomFactor - 1 / oldZoom);
  tableOffsetY += (mouseY - height / 2) * (1 / zoomFactor - 1 / oldZoom);
  return false;
}

function mousePressed() {
  if (mouseButton === LEFT) {
    dragging = true;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
  }
}

function mouseReleased() {
  dragging = false;
}

function mouseDragged() {
  if (dragging) {
    const dx = mouseX - prevMouseX;
    const dy = mouseY - prevMouseY;
    tableOffsetX += dx / zoomFactor;
    tableOffsetY += dy / zoomFactor;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
  }
}

function doubleClicked() {
  if (mouseButton === LEFT) {
    zoomFactor = initialZoomFactor;
    tableOffsetX = 0;
    tableOffsetY = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  const baseZoomX = windowWidth / 1050;
  const baseZoomY = windowHeight / 750;
  initialZoomFactor = 0.5 * min(baseZoomX, baseZoomY);
  zoomFactor = initialZoomFactor;
}