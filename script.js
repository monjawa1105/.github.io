const quotes = [
  {
    text: `……覚悟はいいか。
ここから先は戻れない。`,
    yomi: "かくごはいいか",
    story: "メイン",
    episode: "第5話",
    costume: "通常"
  },
  {
    text: `世界が敵でも――
私は、私を貫く。`,
    yomi: "せかいがてきでも",
    story: "イベント",
    episode: "記念イベント第2話",
    costume: "祝い衣装"
  }
];


const list = document.getElementById("quoteList");
const searchInput = document.getElementById("searchInput");
const storyFilter = document.getElementById("storyFilter");
const costumeFilter = document.getElementById("costumeFilter");

const modalOverlay = document.getElementById("modalOverlay");
const modalText = document.getElementById("modalText");
const modalStory = document.getElementById("modalStory");
const modalEpisode = document.getElementById("modalEpisode");
const modalCostume = document.getElementById("modalCostume");
const closeModal = document.getElementById("closeModal");
const kanaFilter = document.getElementById("kanaFilter");

function getKanaRow(char) {
  if (!char) return "other";

  const c = char.normalize("NFKC");

  if ("あいうえお".includes(c)) return "あ";
  if ("かきくけこがぎぐげご".includes(c)) return "か";
  if ("さしすせそざじずぜぞ".includes(c)) return "さ";
  if ("たちつてとだぢづでど".includes(c)) return "た";
  if ("なにぬねの".includes(c)) return "な";
  if ("はひふへほばびぶべぼぱぴぷぺぽ".includes(c)) return "は";
  if ("まみむめも".includes(c)) return "ま";
  if ("やゆよ".includes(c)) return "や";
  if ("らりるれろ".includes(c)) return "ら";
  if ("わをん".includes(c)) return "わ";

  return "other";
}



/* 一覧描画（イベントは付けない） */
function render() {
  list.innerHTML = "";

  quotes
    .filter(q => {
      const firstChar = q.yomi?.trim()[0];
const row = getKanaRow(firstChar);


      return (
        (!searchInput.value || q.text.includes(searchInput.value)) &&
        (!storyFilter.value || q.story === storyFilter.value) &&
        (!costumeFilter.value || q.costume === costumeFilter.value) &&
        (!kanaFilter.value ||
          (kanaFilter.value === "other"
            ? row === "other"
            : row === kanaFilter.value))
      );
    })
    .forEach((q) => {
  const li = document.createElement("li");
  li.className = "quote-item";

  // ★ indexじゃなくてJSONを持たせる
  li.quoteData = q;

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.textContent = "📋";

  const span = document.createElement("span");
  span.className = "quote-text";
  span.textContent = q.text;

  li.append(copyBtn, span);
  list.appendChild(li);
});

}


searchInput.oninput = render;
kanaFilter.onchange = render;
storyFilter.onchange = render;
costumeFilter.onchange = render;

render();

/* 🔥 イベント委譲（ここが最重要） */
list.addEventListener("click", (e) => {
  const li = e.target.closest(".quote-item");
  if (!li) return;

  const q = li.quoteData;


  // コピー
  if (e.target.classList.contains("copy-btn")) {
    navigator.clipboard.writeText(q.text).then(() => {
      e.target.classList.add("copied");

      const old = li.querySelector(".copy-feedback");
      if (old) old.remove();

      const feedback = document.createElement("span");
      feedback.className = "copy-feedback";
      feedback.textContent =
  q.costume === "祝い衣装" ? "祝印刻定" :
  q.costume === "冬衣装"   ? "氷刻完了" :
                             "刻印完了";


      e.target.after(feedback);

      setTimeout(() => {
        e.target.classList.remove("copied");
        feedback.remove();
      }, 800);
    });
  }

  // モーダル
  if (e.target.classList.contains("quote-text")) {
    openModal(q);
  }
});

/* モーダル */

function openModal(q) {

// ← これを追加！
  setParticleColor(q.costume);


  typeText(modalText, q.text); /*変更*/
  modalStory.textContent = q.story;
  modalEpisode.textContent = q.episode;
  modalCostume.textContent = q.costume;

  modalOverlay.style.display = "flex";

  resizeCanvas();
  createParticles();
  drawParticles();
}

closeModal.onclick = closeModalFn;
modalOverlay.onclick = e => {
  if (e.target === modalOverlay) closeModalFn();
};

function closeModalFn() {
  modalOverlay.style.display = "none";
  cancelAnimationFrame(anim);
}

/* 粒子 */

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let anim;

/*色変数追加 */
let particleColor = {
  r: 255,
  g: 50,
  b: 50
};
/*追加コード色 */
function setParticleColor(costume) {
  switch (costume) {
    case "通常":
      particleColor = { r: 255, g: 50, b: 50 }; // 深紅
      break;
    case "冬衣装":
      particleColor = { r: 120, g: 180, b: 255 }; // 青白
      break;
    case "祝い衣装":
      particleColor = { r: 255, g: 200, b: 80 }; // 金
      break;
    default:
      particleColor = { r: 255, g: 50, b: 50 };
  }
}


function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.5 + 0.2
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${particleColor.r}, ${particleColor.g}, ${particleColor.b}, ${p.a})`;

    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.y < 0) p.y = canvas.height;
    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });

  anim = requestAnimationFrame(drawParticles);
}

/*台詞文字の出現演出*/ 
function typeText(element, text, speed = 30) {
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* 🔥 背景炎アニメーション */

const fireCanvas = document.getElementById("fireCanvas");
const fctx = fireCanvas.getContext("2d");

let flames = [];

function resizeFireCanvas() {
  fireCanvas.width = window.innerWidth;
  fireCanvas.height = window.innerHeight;
}
resizeFireCanvas();
window.addEventListener("resize", resizeFireCanvas);

function createFlames() {
  flames = [];
  for (let i = 0; i < 120; i++) {
    flames.push({
      x: Math.random() * fireCanvas.width,
      y: fireCanvas.height + Math.random() * 100,
      r: Math.random() * 20 + 10,
      vy: Math.random() * 1 + 0.5,
      a: Math.random() * 0.4 + 0.2
    });
  }
}
createFlames();

function drawFire() {
  fctx.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

  flames.forEach(f => {
    const gradient = fctx.createRadialGradient(
      f.x, f.y, 0,
      f.x, f.y, f.r
    );

    gradient.addColorStop(0, `rgba(255, 80, 0, ${f.a})`);
    gradient.addColorStop(0.5, `rgba(200, 0, 0, ${f.a * 0.6})`);
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    fctx.fillStyle = gradient;
    fctx.beginPath();
    fctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    fctx.fill();

    f.y -= f.vy;
    f.x += Math.sin(f.y * 0.02) * 0.5;

    if (f.y < -50) {
      f.y = fireCanvas.height + 50;
      f.x = Math.random() * fireCanvas.width;
    }
  });

  requestAnimationFrame(drawFire);
}

drawFire();

document.addEventListener("pointerdown", (e) => {
  const effect = document.createElement("div");
  effect.className = "cursor-effect";

  effect.style.left = `${e.clientX}px`;
  effect.style.top = `${e.clientY}px`;

  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 800);
});

// 厨二病カーソル生成（PCのみ）
if (window.matchMedia("(pointer: fine)").matches) {

  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("pointermove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}
