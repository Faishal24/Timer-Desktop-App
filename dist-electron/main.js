import { app as n, BrowserWindow as s } from "electron";
import { fileURLToPath as a } from "node:url";
import o from "node:path";
const r = o.dirname(a(import.meta.url));
process.env.APP_ROOT = o.join(r, "..");
const i = process.env.VITE_DEV_SERVER_URL, f = o.join(process.env.APP_ROOT, "dist-electron"), t = o.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = i ? o.join(process.env.APP_ROOT, "public") : t;
let e;
function l() {
  e = new s({
    icon: o.join(process.env.VITE_PUBLIC, "fire/fire 4.png"),
    webPreferences: {
      preload: o.join(r, "preload.mjs")
    },
    autoHideMenuBar: !0,
    resizable: !1,
    fullscreenable: !1,
    width: 400,
    height: 600
  }), e.webContents.on("did-finish-load", () => {
    e == null || e.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), i ? e.loadURL(i) : e.loadFile(o.join(t, "index.html"));
}
n.on("window-all-closed", () => {
  process.platform !== "darwin" && (n.quit(), e = null);
});
n.on("activate", () => {
  s.getAllWindows().length === 0 && l();
});
n.whenReady().then(l);
export {
  f as MAIN_DIST,
  t as RENDERER_DIST,
  i as VITE_DEV_SERVER_URL
};
