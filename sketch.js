// Bảng dữ liệu gồm 6 hàng (chu kỳ 1-6) và 8 cột (từ IA đến VIIIA)
// Chỉ lấy các nguyên tố nhóm A (những nguyên tố thuộc nhóm chính)
// Số liệu bán kính nguyên tử (đơn vị: pm) được tham khảo (xấp xỉ) từ CRC Handbook of Chemistry and Physics.
let atomicData = [
  // Chu kỳ 1
  [
    { symbol: "H", radius: 53 },    // Group IA
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "", radius: 0 },
    { symbol: "He", radius: 31 }    // VIIIA
  ],
  // Chu kỳ 2
  [
    { symbol: "Li", radius: 167 },  // IA
    { symbol: "Be", radius: 112 },  // IIA
    { symbol: "B",  radius: 87  },   // IIIA
    { symbol: "C",  radius: 67  },   // IVA
    { symbol: "N",  radius: 56  },   // VA
    { symbol: "O",  radius: 48  },   // VIA
    { symbol: "F",  radius: 42  },   // VIIA
    { symbol: "Ne", radius: 38  }    // VIIIA
  ],
  // Chu kỳ 3
  [
    { symbol: "Na", radius: 190 },  // IA
    { symbol: "Mg", radius: 145 },  // IIA
    { symbol: "Al", radius: 118 },  // IIIA
    { symbol: "Si", radius: 111 },  // IVA
    { symbol: "P",  radius: 98  },   // VA
    { symbol: "S",  radius: 88  },   // VIA
    { symbol: "Cl", radius: 79  },   // VIIA
    { symbol: "Ar", radius: 71  }    // VIIIA
  ],
  // Chu kỳ 4 - Những nguyên tố nhóm A thực sự
  [
    { symbol: "K",  radius: 243 },  // IA
    { symbol: "Ca", radius: 194 },  // IIA
    { symbol: "Ga", radius: 135 },  // IIIA (Gallium)
    { symbol: "Ge", radius: 122 },  // IVA  (Germanium)
    { symbol: "As", radius: 114 },  // VA   (Arsenic)
    { symbol: "Se", radius: 103 },  // VIA  (Selenium)
    { symbol: "Br", radius: 94  },  // VIIA (Bromine)
    { symbol: "Kr", radius: 88  }   // VIIIA (Krypton)
  ],
  // Chu kỳ 5
  [
    { symbol: "Rb", radius: 265 },  // IA
    { symbol: "Sr", radius: 219 },  // IIA
    { symbol: "In", radius: 167 },  // IIIA (Indium)
    { symbol: "Sn", radius: 140 },  // IVA  (Tin)
    { symbol: "Sb", radius: 133 },  // VA   (Antimony)
    { symbol: "Te", radius: 123 },  // VIA  (Tellurium)
    { symbol: "I",  radius: 115 },  // VIIA (Iodine)
    { symbol: "Xe", radius: 108 }   // VIIIA (Xenon)
  ],
  // Chu kỳ 6
  [
    { symbol: "Cs", radius: 298 },  // IA
    { symbol: "Ba", radius: 253 },  // IIA
    { symbol: "Tl", radius: 170 },  // IIIA (Thallium)
    { symbol: "Pb", radius: 154 },  // IVA  (Lead)
    { symbol: "Bi", radius: 143 },  // VA   (Bismuth)
    { symbol: "Po", radius: 135 },  // VIA  (Polonium)
    { symbol: "At", radius: 127 },  // VIIA (Astatine)
    { symbol: "Rn", radius: 120 }   // VIIIA (Radon)
  ]
];

// Các tên nhóm (cột): từ IA đến VIIIA
let groupNames = ["IA", "IIA", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"];

let myFont;

// Biến để di chuyển bảng.
let tableOffsetX = 0;
let tableOffsetY = 0;
let dragging = false;
let prevMouseX, prevMouseY;

function preload() {
  // Tải font Arial từ file "Arial.ttf", đảm bảo file này nằm cùng thư mục với các file khác.
  myFont = loadFont("Arial.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
  // Nền màn hình đen hoàn toàn.
  background(0);
  
  // Vẽ watermark "HÓA HỌC ABC" dạng mờ, đặt phía sau các quả cầu.
  // Ta dịch ra xa về phía sau theo trục Z.
  push();
    // Để watermark luôn xuất hiện ở trung tâm màn hình, ta đặt tại gốc.
    // Dịch về phía sau (z âm) để hiển thị bên dưới các đối tượng trong không gian 3D.
    translate(0, 0, -300);
    // Vẽ chữ với màu trắng mờ.
    fill(255, 255, 255, 30);
    noStroke();
    textSize(150);
    text("HÓA HỌC ABC", 0, 0);
  pop();
  
  // Cho phép xoay camera bằng chuột.
  orbitControl();
  
  let cols = 8;
  let rows = 6;
  let spacingX = 150;
  let spacingY = 150;
  
  // Tính điểm đầu (top-left) của lưới (trung tâm canvas) có offset khi kéo.
  let startX = -((cols - 1) * spacingX) / 2 + tableOffsetX;
  let startY = -((rows - 1) * spacingY) / 2 + tableOffsetY;
  
  // Ánh sáng cho khung cảnh.
  ambientLight(150);
  directionalLight(255, 255, 255, 0, -1, 0);
  
  // Vẽ các hàng của bảng.
  for (let i = 0; i < rows; i++) {
    // Vẽ nhãn chu kỳ bên trái.
    push();
      let labelX = startX - spacingX * 0.8;
      let labelY = startY + i * spacingY;
      translate(labelX, labelY, 0);
      fill(255);
      noStroke();
      textSize(20);
      text("Chu kì " + (i + 1), 0, 0);
    pop();
    
    for (let j = 0; j < cols; j++) {
      // Bỏ các hình cầu nhỏ của chu kỳ 1, từ nhóm IIA đến VIIA.
      if (i === 0 && j >= 1 && j <= 6) {
        continue;
      }
      
      push();
        let x = startX + j * spacingX;
        let y = startY + i * spacingY;
        translate(x, y, 0);
        
        // Lấy dữ liệu nguyên tử.
        let data = atomicData[i][j];
        let sphereDisplayRadius;
        if (data.symbol !== "" && data.radius > 0) {
          sphereDisplayRadius = map(data.radius, 30, 300, 20, 60);
        } else {
          sphereDisplayRadius = 5;
        }
        
        // Vẽ hình cầu với chất liệu sáng và đường bo mịn hơn.
        noStroke();
        ambientMaterial(240, 240, 80);
        sphere(sphereDisplayRadius, 48, 32);
        
        // Vẽ nhãn nguyên tố: nằm chính giữa, phía trước, bên ngoài mặt cầu (màu đen).
        push();
          translate(0, 0, sphereDisplayRadius + 5);
          fill(0);
          noStroke();
          textSize(20);
          if (data.symbol !== "") {
            text(data.symbol, 0, 0);
          }
        pop();
        
        // Vẽ giá trị bán kính bên dưới hình cầu.
        push();
          translate(0, sphereDisplayRadius + 15, 0);
          fill(255);
          noStroke();
          textSize(16);
          if (data.radius > 0) {
            text(data.radius + " pm", 0, 0);
          }
        pop();
      pop();
    }
  }
  
  // Vẽ nhãn nhóm (cột) phía trên bảng.
  for (let j = 0; j < cols; j++) {
    push();
      let labelX = startX + j * spacingX;
      let labelY = startY - spacingY * 0.8;
      translate(labelX, labelY, 0);
      fill(255);
      noStroke();
      textSize(20);
      text(groupNames[j], 0, 0);
    pop();
  }
}

// Cho phép di chuyển bảng khi nhấn Ctrl + chuột trái.
function mousePressed() {
  if (mouseButton === LEFT && keyIsDown(CONTROL)) {
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
    let dx = mouseX - prevMouseX;
    let dy = mouseY - prevMouseY;
    tableOffsetX += dx;
    tableOffsetY += dy;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
  }
}