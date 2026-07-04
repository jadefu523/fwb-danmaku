// ───────────────────────────────────────────────────────────
//  Firebase 設定（三個 html 共用，只要貼這一次）
// ───────────────────────────────────────────────────────────
//  怎麼拿：
//  1. https://console.firebase.google.com → 建立專案（名字隨意，關掉 Analytics 即可）
//  2. 左側選單 →「建構 / Build」→「Realtime Database」→ 建立資料庫
//       - 位置選 asia-southeast1（新加坡，離台灣近）
//       - 安全規則先選「測試模式 (test mode)」
//  3. 專案設定（齒輪）→ 最下方「你的應用程式」→ 點 </> 加一個網頁應用程式
//       → 它會給你一段 firebaseConfig，整段貼到下面取代範例值
//  4. 把下面 databaseURL 換成你 Realtime Database 頁面上方那條網址
//       （長得像 https://xxxx-default-rtdb.asia-southeast1.firebasedatabase.app）

const firebaseConfig = {
  apiKey:            "PASTE_HERE",
  authDomain:        "PASTE_HERE",
  databaseURL:       "https://fwb-2026-app-default-rtdb.asia-southeast1.firebasedatabase.app",   // ← 這行一定要有，是 Realtime Database 的網址
  projectId:         "PASTE_HERE",
  storageBucket:     "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId:             "PASTE_HERE",
};

// 這場演出用的「房間」代號。要重測 / 換場時改這個字串，資料就乾淨分開、互不干擾。
const ROOM = "fwb-2026";
