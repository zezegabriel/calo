// Janela do Calo para Windows. Serve a versão web exportada do app (pasta web/)
// por um protocolo próprio, para as rotas do expo-router funcionarem fora de um servidor.
const path = require("node:path");
const fs = require("node:fs");
const { app, BrowserWindow, Menu, net, protocol, shell } = require("electron");
const { pathToFileURL } = require("node:url");

const PASTA_WEB = path.join(__dirname, "web");
const ORIGEM = "app://calo";

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } },
]);

function arquivoDaRota(url) {
  const caminho = decodeURIComponent(new URL(url).pathname);
  const alvo = path.normalize(path.join(PASTA_WEB, caminho));
  if (!alvo.startsWith(PASTA_WEB)) return path.join(PASTA_WEB, "index.html");
  if (fs.existsSync(alvo) && fs.statSync(alvo).isFile()) return alvo;
  // Rotas do app (/aula/a01, /acordes...) caem no index.html, como num site de página única.
  return path.join(PASTA_WEB, "index.html");
}

function abrirJanela() {
  const janela = new BrowserWindow({
    width: 1100,
    height: 820,
    minWidth: 420,
    minHeight: 600,
    title: "Calo",
    backgroundColor: "#F6EEE2",
    icon: path.join(__dirname, "build", "icon.png"),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true },
  });

  // Links externos abrem no navegador do sistema, nunca dentro do app.
  janela.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("http")) void shell.openExternal(url);
    return { action: "deny" };
  });
  janela.webContents.on("will-navigate", (evento, url) => {
    if (!url.startsWith(ORIGEM)) {
      evento.preventDefault();
      if (url.startsWith("http")) void shell.openExternal(url);
    }
  });

  void janela.loadURL(`${ORIGEM}/`);
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  protocol.handle("app", (requisicao) => net.fetch(pathToFileURL(arquivoDaRota(requisicao.url)).toString()));
  abrirJanela();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) abrirJanela();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
