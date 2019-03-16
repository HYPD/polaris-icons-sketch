/* eslint-disable no-undef */
import WebUI from 'sketch-module-web-view';

const IDENTIFIER = 'polaris.webview';

export function createWebview(context, handlers, title) {
  const options = {
    identifier: IDENTIFIER,
    x: 0,
    y: 0,
    width: 786,
    height: 700,
    blurredBackground: false,
    onlyShowCloseButton: true,
    title,
    hideTitleBar: false,
    shouldKeepAround: true,
    resizable: false,
    handlers,
  };
  const webUI = new WebUI(
    context,
    require('../resources/webview.html'),
    options,
  );
  makeTitlebarTransparent();
  return webUI;
}

function makeTitlebarTransparent() {
  const threadDictionary = NSThread.mainThread().threadDictionary();
  if (!threadDictionary[IDENTIFIER]) {
    return;
  }

  const panel = threadDictionary[IDENTIFIER];
  panel.setTitlebarAppearsTransparent(true);
}
