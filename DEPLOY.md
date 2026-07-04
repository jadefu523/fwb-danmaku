# 部署收尾清單（GitHub Pages）

網頁已經推上 GitHub Pages。以下是**只有你能做**的三件事，做完就能上線。

## 三個網址（把 `你的帳號/repo` 換成實際的）
- 觀眾投稿（QR 指這個）：`https://jadefu523.github.io/fwb-danmaku/submit.html`
- 大螢幕：`https://jadefu523.github.io/fwb-danmaku/screen.html`
- 後台審核：`https://jadefu523.github.io/fwb-danmaku/admin.html`

---

## ✅ 1. 填入真的 Firebase 設定（不填網站不會動）
`firebase-config.js` 裡的 `apiKey` 等目前還是 `PASTE_HERE`。
1. 到 Firebase 主控台 → 專案設定（齒輪）→ 你的應用程式 → 複製那段 `firebaseConfig`。
2. 貼進 `firebase-config.js` 取代範例值（`databaseURL` 已經是對的，別動）。
3. 存檔後重新推上去（見最下方「更新網站」）。

## ✅ 2. 套用 Firebase 安全規則（防有人洗庫／灌垃圾）
資料庫現在是「測試模式」= 任何人都能刪光你的投稿。請改成我寫好的規則：
1. Firebase 主控台 → Realtime Database → 上方「規則 (Rules)」分頁。
2. 把 `database.rules.json` 的**整段內容**貼上去，按「發布 (Publish)」。
3. 這組規則：✅ 觀眾可投稿、後台可放行/擋下/還原/清空螢幕；❌ 擋掉刪投稿、灌垃圾欄位、洗庫。

## ✅ 3. 產生 QR Code（已完成）
QR Code 已經直接嵌進 `screen.html` 側欄（向量 SVG，指向上面的投稿網址、放大不糊、斷網也在），不用另外做。
👉 若之後投稿網址改了，QR 要跟著重產，跟我說一聲即可。

---

## 房間代號
現在是 `ROOM = "fwb-2026"`（在 `firebase-config.js`）。換場或重測時改這個字串，資料就乾淨分開。

## 演出前檢查（重要：這支工具一定要有網路！）
- [ ] 大螢幕那台電腦有**穩定 wifi / 手機熱點**（投稿→螢幕全靠即時連線）
- [ ] 三個網址都打得開、投稿會飄上大螢幕
- [ ] 後台放行/擋下/清空都正常
- [ ] `screen.html` 按 F 全螢幕，走到最後一排看字夠不夠大
- [ ] QR 用現場網路實際掃一次

---

## 更新網站（改完檔案後重新上線）
在這個資料夾開終端機，貼這三行：
```bash
git add -A
git commit -m "update"
git push
```
推完等 1～2 分鐘，網址就是最新版（網址不會變）。
