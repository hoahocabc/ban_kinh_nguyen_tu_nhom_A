// Dữ liệu cấu hình electron cho các nguyên tố
const electronConfigs = {
  // Nhóm IA
  "H": [1],
  "Li": [2, 1],
  "Na": [2, 8, 1],
  "K":  [2, 8, 8, 1],
  "Rb": [2, 8, 18, 8, 1],
  "Cs": [2, 8, 18, 18, 8, 1],
  // Nhóm IIA
  "Be": [2, 2],
  "Mg": [2, 8, 2],
  "Ca": [2, 8, 8, 2],
  "Sr": [2, 8, 18, 8, 2],
  "Ba": [2, 8, 18, 18, 8, 2],
  // Nhóm IIIA
  "B":  [2, 3],
  "Al": [2, 8, 3],
  "Ga": [2, 8, 18, 3],
  "In": [2, 8, 18, 18, 3],
  "Tl": [2, 8, 18, 32, 18, 3],
  // Nhóm IVA
  "C":  [2, 4],
  "Si": [2, 8, 4],
  "Ge": [2, 8, 18, 4],
  "Sn": [2, 8, 18, 18, 4],
  "Pb": [2, 8, 18, 32, 18, 4],
  // Nhóm VA
  "N":  [2, 5],
  "P":  [2, 8, 5],
  "As": [2, 8, 18, 5],
  "Sb": [2, 8, 18, 18, 5],
  "Bi": [2, 8, 18, 32, 18, 5],
  // Nhóm VIA
  "O":  [2, 6],
  "S":  [2, 8, 6],
  "Se": [2, 8, 18, 6],
  "Te": [2, 8, 18, 18, 6],
  "Po": [2, 8, 18, 32, 18, 6],
  // Nhóm VIIA
  "F":  [2, 7],
  "Cl": [2, 8, 7],
  "Br": [2, 8, 18, 7],
  "I":  [2, 8, 18, 18, 7],
  "At": [2, 8, 18, 32, 18, 7],
  // Nhóm VIIIA
  "He": [2],
  "Ne": [2, 8],
  "Ar": [2, 8, 8],
  "Kr": [2, 8, 18, 8],
  "Xe": [2, 8, 18, 18, 8],
  "Rn": [2, 8, 18, 32, 18, 8]
};

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
    { symbol: "He", radius: 28 }
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
const nucleusDiameterFixed = 7; // Kích thước hạt nhân
// Kích thước cơ sở của bảng
const cols = 8;
const rows = 6;
const spacingX = 150;
const spacingY = 150;
let initialZoomFactor;
let zoomFactor;
// Kích thước electron được đặt là 3
const electronSize = 3;
let myFont;

function preload() {
  myFont = loadFont("Arial.ttf");
}

function setup() {
  // Chuyển sang chế độ 2D (không dùng WEBGL)
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  smooth();
  textFont(myFont);
  // Căn giữa text cho toàn bộ sketch
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  const baseZoomX = windowWidth / 1050;
  const baseZoomY = windowHeight / 750;
  initialZoomFactor = 0.45 * min(baseZoomX, baseZoomY);
  zoomFactor = initialZoomFactor;
  
  // Ban đầu đặt bảng vào giữa canvas bằng cách dịch gốc tại (width/2, height/2)
  tableOffsetX = 0;
  tableOffsetY = 0;

  toggleButton = createButton("Chuyển sang bán kính " + (useExperimental ? "Lý thuyết" : "Thực nghiệm"));
  toggleButton.position(20, 20);
  toggleButton.mousePressed(toggleData);
}

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
    // Dịch gốc (origin) đến giữa màn hình để bảng hiển thị chính giữa
    translate(width / 2, height / 2);
    scale(zoomFactor);
    
    const startX = -((cols - 1) * spacingX) / 2 + tableOffsetX;
    const startY = -((rows - 1) * spacingY) / 2 + tableOffsetY;
    
    const atomicData = useExperimental ? experimentalAtomicData : theoreticalAtomicData;
  
    // Vẽ các hàng (chu kỳ)
    for (let i = 0; i < rows; i++) {
      push();
        translate(startX - spacingX * 0.8, startY + i * spacingY);
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
          translate(x, y);
          let outerRadius = 5;
          if (data.symbol !== "" && data.radius > 0) {
            outerRadius = map(data.radius, 30, 300, 20, 60);
          }
          
          // Xác định chi tiết dựa trên zoomFactor
          const detailLevel = floor(map(zoomFactor, 0.1, 5, 40, 150));
          
          // Vẽ các đường tròn (lớp electron) theo số chu kỳ của nguyên tố
          const numCircles = i + 1;
          noFill();
          stroke(240, 240, 80);
          strokeWeight(0.7);
          for (let k = 0; k < numCircles; k++) {
            const factor = (numCircles - k) / numCircles;
            const d = outerRadius * 2 * factor;
            drawSmoothEllipse(0, 0, d, d, detailLevel);
          }
          
          // Vẽ hạt nhân dưới dạng hình tròn với nhãn điện tích nhỏ hơn
          if (data.symbol !== "") {
            push();
              fill(255, 0, 0);
              noStroke();
              ellipse(0, 0, nucleusDiameterFixed, nucleusDiameterFixed);
              // Đảm bảo căn giữa cho nhãn điện tích, dùng font nhỏ hơn (giảm xuống 80%)
              fill(255);
              textAlign(CENTER, CENTER);
              textSize(nucleusDiameterFixed * 0.45);
              text(atomicNumbers[data.symbol] + "+", 0, 0);
            pop();
          }
          
          // Vẽ các electron cùng với nhãn căn giữa. Dịch vị trí nhãn hơi lên để căn giữa so với electron.
          if (data.symbol !== "" && electronConfigs[data.symbol]) {
            let config = electronConfigs[data.symbol];
            let nShells = min(config.length, numCircles);
            for (let s = 0; s < nShells; s++) {
              let factor = (s + 1) / numCircles;
              let d = outerRadius * 2 * factor;
              let r = d / 2;
              let numElectrons = config[s];
              for (let e = 0; e < numElectrons; e++) {
                let angle = 360 * e / numElectrons;
                let ex = r * cos(angle);
                let ey = r * sin(angle);
                push();
                  translate(ex, ey);
                  fill(255);
                  noStroke();
                  ellipse(0, 0, electronSize, electronSize);
                  // Căn giữa nhãn electron và dịch lên một chút (-electronSize * 0.2)
                  fill(0);
                  textAlign(CENTER, CENTER);
                  textSize(electronSize);
                  text("-", 0, -electronSize * 0.2);
                pop();
              }
            }
          }
          
          // Vẽ thông tin ký hiệu và bán kính bên dưới
          push();
            translate(0, outerRadius + 15);
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
    
    // Vẽ tên các nhóm (IA, IIA, …)
    for (let j = 0; j < cols; j++) {
      push();
        translate(startX + j * spacingX, startY - spacingY * 0.8);
        fill(255);
        noStroke();
        textSize(20);
        text(groupNames[j], 0, 0);
      pop();
    }
    
    // Vẽ phần ghi chú
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
- Lăn chuột để phóng to hoặc thu nhỏ.
- Nhấp đúp chuột trái để quay về trạng thái hiển thị ban đầu.
© HÓA HỌC ABC`, noteXWorld, noteYWorld);
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
  initialZoomFactor = 0.45 * min(baseZoomX, baseZoomY);
  zoomFactor = initialZoomFactor;
}