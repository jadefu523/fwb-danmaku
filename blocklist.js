// ───────────────────────────────────────────────────────────
//  黑名單（screen.html 與 admin.html 共用）
//  規則：踩到黑名單的投稿「預設壓著不顯示」，要你到後台按【放行】才會上幕。
//  乾淨的投稿一律自動上幕。你要改字，改這個檔就好。
// ───────────────────────────────────────────────────────────

const BLOCKLIST = ['雞巴', '幹你娘', '陰莖', '尻', '幹'];

// 「無辜白名單」：含「幹」但其實沒事的詞。比對前先把這些挖掉，
// 才不會把「幹部 / 能幹的主管」這種向上管理場超常見的詞誤殺。
const BLOCK_WHITELIST = [
  '幹部', '幹練', '能幹', '骨幹', '才幹', '主幹', '樹幹',
  '幹勁', '苦幹', '實幹', '幹活', '幹嘛', '幹線', '幹道'
];

// 回傳 true = 踩到黑名單（要壓著等放行）
function hitsBlocklist(it){
  let text = [it.nick, it.target, it.adj, it.role].join(' ');
  for(const w of BLOCK_WHITELIST) text = text.split(w).join('');   // 先放掉無辜詞
  return BLOCKLIST.some(w => w && text.includes(w));
}
