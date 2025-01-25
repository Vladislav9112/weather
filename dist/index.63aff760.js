// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"864lm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
// import {format} from "date-fns";
var _funcsJs = require("./funcs.js");
var _weatherJs = require("./weather.js");
const form = document.querySelector(".form");
const fBtn = document.querySelector(".l-b-input");
// const date = document.querySelector('.date');
// const dateNow = format(new Date(), 'yyyy/MM/dd');
// date.textContent = dateNow;
function favorites(event) {
    console.log("start");
    event.preventDefault();
    (0, _weatherJs.weth)();
    (0, _funcsJs.cleanDiv)(".list", ".list-item");
    (0, _funcsJs.showList)();
}
form.addEventListener("submit", favorites);
fBtn.addEventListener("click", (0, _funcsJs.addCityInList));
(0, _funcsJs.cleanDiv)(".list", ".list-item");
(0, _funcsJs.showList)();

},{"./funcs.js":"27D05","./weather.js":"bRRRP"}],"27D05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cleanDiv", ()=>cleanDiv);
parcelHelpers.export(exports, "addCityInList", ()=>addCityInList);
parcelHelpers.export(exports, "showList", ()=>showList);
parcelHelpers.export(exports, "favorites", ()=>favorites);
var _storageJs = require("./storage.js");
var _weatherJs = require("./weather.js");
var _delPng = require("./img/del.png");
var _delPngDefault = parcelHelpers.interopDefault(_delPng);
const storage = new (0, _storageJs.Storage)();
function cleanDiv(pDiv, cDiv) {
    const parentDiv = document.querySelector(pDiv);
    const childDiv = parentDiv.querySelectorAll(cDiv);
    if (childDiv.length > 0) childDiv.forEach((i)=>{
        i.remove();
    });
}
function addCityInList() {
    const fName = document.querySelector(".low-bar-text").textContent;
    // cleanDiv('.list', '.list-item');
    let favorites = storage.getFavoritecity("favoriteCity");
    if (favorites) favorites = new Set(JSON.parse(favorites));
    else favorites = new Set();
    const cityKey = fName;
    favorites.add(cityKey);
    storage.savefavoriteCity("favoriteCity", JSON.stringify(Array.from(favorites)));
    // document.cookie = "lastCity_"+ fName;
    cleanDiv(".list", ".list-item");
    showList();
}
function showList() {
    let getFavorite = storage.getFavoritecity("favoriteCity");
    let listCity = JSON.parse(getFavorite);
    // listCity.forEach(i=>{console.log(i)})
    listCity.forEach((i)=>{
        // const key = localStorage.key(i);
        // const cityName = storage.getFavoritecity(key);
        const cont = document.querySelector(".list");
        let newDiv = document.createElement("div");
        let newCityName = document.createElement("span");
        let delBtn = document.createElement("button");
        let newImg = document.createElement("img");
        newDiv.setAttribute("class", "list-item");
        newCityName.setAttribute("class", "text-list-item");
        newCityName.textContent = i;
        newImg.src = (0, _delPngDefault.default);
        newImg.setAttribute("class", "btn-img");
        delBtn.setAttribute("class", "btn-list-item");
        delBtn.appendChild(newImg);
        delBtn.addEventListener("click", ()=>{
            // storage.removeFavoriteCity(i);
            let favoriteCities = localStorage.getItem("favoriteCity");
            if (favoriteCities) {
                let cityArray = JSON.parse(favoriteCities);
                if (i) {
                    const index = cityArray.indexOf(i);
                    if (index > -1) cityArray.splice(index, 1);
                    if (cityArray.length === 0) localStorage.removeItem("favoriteCity");
                    else localStorage.setItem("favoriteCity", JSON.stringify(cityArray));
                }
            }
            cleanDiv(".list", ".list-item");
            showList();
        });
        newDiv.appendChild(newCityName);
        newDiv.appendChild(delBtn);
        cont.appendChild(newDiv);
        newDiv.addEventListener("click", ()=>{
            _weatherJs.wethFunc(newCityName.textContent);
            cleanDiv(".t-det-time-container", ".t-det-time");
            _weatherJs.wethDetail(newCityName.textContent);
            _weatherJs.wethDetailFor(newCityName.textContent);
        });
        document.querySelector(".head-text").value = "";
    });
}
function favorites(event) {
    event.preventDefault();
    _weatherJs.weth();
    cleanDiv(".list", ".list-item");
    showList();
}

},{"./storage.js":"kS9sU","./weather.js":"bRRRP","@parcel/transformer-js/src/esmodule-helpers.js":"jTJ7K","./img/del.png":"fkq6d"}],"kS9sU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Storage", ()=>Storage);
function Storage() {
    this.savefavoriteCity = function(key, name) {
        localStorage.setItem(key, name);
    };
    this.getFavoritecity = function(key) {
        return localStorage.getItem(key);
    };
    this.removeFavoriteCity = function(key) {
        localStorage.removeItem(key);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jTJ7K"}],"jTJ7K":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bRRRP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// export const wethDetail = (name) =>{
//     const feelsLike = document.querySelector('.fl');
//     const sunRise = document.querySelector('.sunrise');
//     const sunSet = document.querySelector('.sunset');
//     fetch(urlLink(name))
//         .then(request => request.json())
//         .then((data)=> {
//             let feelsLikeCel = parseInt(data['main']['feels_like']) - 273.15;
//             feelsLike.textContent = `Ощущаестя: ${feelsLikeCel.toFixed(1)}`;
//             let sunriseData = parseInt(data['sys']['sunrise']);
//             sunRise.textContent = `Рассвет: ${formatTime(sunriseData)}`;
//             let sunsetData = parseInt(data['sys']['sunset']);
//             sunSet.textContent = `Закат: ${formatTime(sunsetData)}`;
//         })
// }
parcelHelpers.export(exports, "wethDetail", ()=>wethDetail);
// export const wethDetailFor =(name)=>{
//     detailList.forEach(i => {
//         const detList = document.querySelector(".t-det-time-container");
//         const divItem = document.createElement('div');
//         divItem.setAttribute('class', 't-det-time');
//         const divItemText = document.createElement('div');
//         divItemText.setAttribute('class', 'det-text')
//         const timeText = document.createElement('p');
//         timeText.setAttribute('class', 'time');
//         const temeratureText = document.createElement('p');
//         temeratureText.setAttribute('class', 'temerature');
//         const feelsText = document.createElement('p');
//         feelsText.setAttribute('class', 'feels');
//         const divItemImg = document.createElement('div');
//         divItemImg.setAttribute('class', 'det-img')
//         const itemImg = document.createElement('img');
//         itemImg.setAttribute('class', 'det-img-item');
//         itemImg.setAttribute('alt', 'img');
//         detList.appendChild(divItem);
//         divItem.appendChild(divItemText);
//         divItem.appendChild(divItemImg);
//         divItemText.appendChild(timeText);
//         divItemText.appendChild(temeratureText);
//         divItemText.appendChild(feelsText);
//         divItemImg.appendChild(itemImg);
//         fetch(urlLinkForecast(name))
//             .then(request=>request.json())
//             .then((data)=>{
//                 const dataj = data['list'][i]['weather']['0']['main'];
//                 switchImg(itemImg, dataj);
//                 const timeData = parseInt(data['list'][i]['dt']);
//                 timeText.textContent = `${formatTime(timeData)}`;
//                 const tempData = parseInt(data['list'][i]['main']['temp'] - 273.15);
//                 temeratureText.textContent = `Температура: ${tempData.toFixed(1)}`;
//                 const feelsData = parseInt(data['list'][i]['main']['feels_like'] -273.15);
//                 feelsText.textContent = `Ощущается ${feelsData.toFixed(1)}`;
//             })
//     })
// }
parcelHelpers.export(exports, "wethDetailFor", ()=>wethDetailFor);
// export const wethFunc=(name)=>{
//     let t = document.querySelector('.t');
//     let img = document.querySelector('.weather-img');
//     const cityName = name;
//     fetch(urlLink(name))
//         .then(request=> request.json())
//         .then((data) => {
//             let t_cel = parseInt(data['main']['temp']) - 273.15;
//             t.textContent = t_cel.toFixed(1);
//             document.querySelector('.low-bar-text').textContent = cityName;
//             const dataJ = data.weather[0].main;
//             switchImg(img, dataJ);
//             // console.log(data.weather[0].main);
//         });
// }
parcelHelpers.export(exports, "wethFunc", ()=>wethFunc);
parcelHelpers.export(exports, "weth", ()=>weth);
var _switchJs = require("./switch.js");
var _urlLinkJs = require("./urlLink.js");
var _timeJs = require("./time.js");
var _funcsJs = require("./funcs.js");
let detailList = [
    "0",
    "1",
    "2"
];
async function wethDetail(name) {
    const feelsLike = document.querySelector(".fl");
    const sunRise = document.querySelector(".sunrise");
    const sunSet = document.querySelector(".sunset");
    const response = await fetch((0, _urlLinkJs.urlLink)(name));
    const data = await response.json();
    let feelsLikeCel = parseInt(data["main"]["feels_like"]) - 273.15;
    feelsLike.textContent = `\u{41E}\u{449}\u{443}\u{449}\u{430}\u{435}\u{441}\u{442}\u{44F}: ${feelsLikeCel.toFixed(1)}`;
    let sunriseData = parseInt(data["sys"]["sunrise"]);
    sunRise.textContent = `\u{420}\u{430}\u{441}\u{441}\u{432}\u{435}\u{442}: ${(0, _timeJs.formatTime)(sunriseData)}`;
    let sunsetData = parseInt(data["sys"]["sunset"]);
    sunSet.textContent = `\u{417}\u{430}\u{43A}\u{430}\u{442}: ${(0, _timeJs.formatTime)(sunsetData)}`;
}
async function wethDetailFor(name) {
    const response = await fetch((0, _urlLinkJs.urlLinkForecast)(name));
    const data = await response.json();
    for (const i of detailList){
        const detList = document.querySelector(".t-det-time-container");
        const divItem = document.createElement("div");
        divItem.setAttribute("class", "t-det-time");
        const divItemText = document.createElement("div");
        divItemText.setAttribute("class", "det-text");
        const timeText = document.createElement("p");
        timeText.setAttribute("class", "time");
        const temeratureText = document.createElement("p");
        temeratureText.setAttribute("class", "temerature");
        const feelsText = document.createElement("p");
        feelsText.setAttribute("class", "feels");
        const divItemImg = document.createElement("div");
        divItemImg.setAttribute("class", "det-img");
        const itemImg = document.createElement("img");
        itemImg.setAttribute("class", "det-img-item");
        itemImg.setAttribute("alt", "img");
        detList.appendChild(divItem);
        divItem.appendChild(divItemText);
        divItem.appendChild(divItemImg);
        divItemText.appendChild(timeText);
        divItemText.appendChild(temeratureText);
        divItemText.appendChild(feelsText);
        divItemImg.appendChild(itemImg);
        const dataj = data["list"][i]["weather"]["0"]["main"];
        (0, _switchJs.switchImg)(itemImg, dataj);
        const timeData = parseInt(data["list"][i]["dt"]);
        timeText.textContent = `${(0, _timeJs.formatTime)(timeData)}`;
        const tempData = parseInt(data["list"][i]["main"]["temp"] - 273.15);
        temeratureText.textContent = `\u{422}\u{435}\u{43C}\u{43F}\u{435}\u{440}\u{430}\u{442}\u{443}\u{440}\u{430}: ${tempData.toFixed(1)}`;
        const feelsData = parseInt(data["list"][i]["main"]["feels_like"] - 273.15);
        feelsText.textContent = `\u{41E}\u{449}\u{443}\u{449}\u{430}\u{435}\u{442}\u{441}\u{44F} ${feelsData.toFixed(1)}`;
    }
}
async function wethFunc(name) {
    let t = document.querySelector(".t");
    let img = document.querySelector(".weather-img");
    const cityName = name;
    const response = await fetch((0, _urlLinkJs.urlLink)(name));
    const data = await response.json();
    let t_cel = parseInt(data["main"]["temp"]) - 273.15;
    t.textContent = t_cel.toFixed(1);
    document.querySelector(".low-bar-text").textContent = cityName;
    document.cookie = `city=${cityName}; max-age=20; path=/`;
    setTimeout(()=>{
        document.cookie = `city=; max-age=0;path=/`;
    }, 10000);
    const dataJ = data.weather[0].main;
    (0, _switchJs.switchImg)(img, dataJ);
}
function weth() {
    let name = document.querySelector(".head-text").value;
    wethFunc(name);
    wethDetail(name);
    (0, _funcsJs.cleanDiv)(".t-det-time-container", ".t-det-time");
    wethDetailFor(name);
}

},{"./switch.js":"5Ogqd","./urlLink.js":"9bAag","./time.js":"b1wnY","./funcs.js":"27D05","@parcel/transformer-js/src/esmodule-helpers.js":"jTJ7K"}],"5Ogqd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchImg", ()=>switchImg);
var _oblakoPng = require("./img/oblako.png");
var _oblakoPngDefault = parcelHelpers.interopDefault(_oblakoPng);
var _sunPng = require("./img/sun.png");
var _sunPngDefault = parcelHelpers.interopDefault(_sunPng);
var _fogPng = require("./img/fog.png");
var _fogPngDefault = parcelHelpers.interopDefault(_fogPng);
var _snowPng = require("./img/snow.png");
var _snowPngDefault = parcelHelpers.interopDefault(_snowPng);
var _rainPng = require("./img/rain.png");
var _rainPngDefault = parcelHelpers.interopDefault(_rainPng);
var _stormPng = require("./img/storm.png");
var _stormPngDefault = parcelHelpers.interopDefault(_stormPng);
const switchImg = (img, dataJson)=>{
    if (img) switch(dataJson){
        case "Clouds":
            img.src = (0, _oblakoPngDefault.default);
            break;
        case "Clear":
            img.src = (0, _sunPngDefault.default);
            break;
        case "Atmosphere":
            img.src = (0, _fogPngDefault.default);
            break;
        case "Snow":
            img.src = (0, _snowPngDefault.default);
            break;
        case "Rain":
            img.src = (0, _rainPngDefault.default);
            break;
        case "Drizzle":
            img.src = (0, _rainPngDefault.default);
            break;
        case "Thunderstorm":
            img.src = (0, _stormPngDefault.default);
            break;
    }
};

},{"./img/oblako.png":"ZAfBv","@parcel/transformer-js/src/esmodule-helpers.js":"jTJ7K","./img/sun.png":"fDfSt","./img/fog.png":"f8YMX","./img/snow.png":"3uFpN","./img/rain.png":"1bUoK","./img/storm.png":"e7o8E"}],"ZAfBv":[function(require,module,exports) {
module.exports = require("7e704ffdffd5675d").getBundleURL("3gKDs") + "oblako.5ff5f8b8.png" + "?" + Date.now();

},{"7e704ffdffd5675d":"jc6Pl"}],"jc6Pl":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fDfSt":[function(require,module,exports) {
module.exports = require("55ce9799da2a12a8").getBundleURL("3gKDs") + "sun.5a089294.png" + "?" + Date.now();

},{"55ce9799da2a12a8":"jc6Pl"}],"f8YMX":[function(require,module,exports) {
module.exports = require("e1bdd68218bc7055").getBundleURL("3gKDs") + "fog.f138bb60.png" + "?" + Date.now();

},{"e1bdd68218bc7055":"jc6Pl"}],"3uFpN":[function(require,module,exports) {
module.exports = require("cb76714d5b9c153b").getBundleURL("3gKDs") + "snow.e4f6dc0a.png" + "?" + Date.now();

},{"cb76714d5b9c153b":"jc6Pl"}],"1bUoK":[function(require,module,exports) {
module.exports = require("f26df230fbcd2141").getBundleURL("3gKDs") + "rain.7cbbf62c.png" + "?" + Date.now();

},{"f26df230fbcd2141":"jc6Pl"}],"e7o8E":[function(require,module,exports) {
module.exports = require("79abdd7fec46d9de").getBundleURL("3gKDs") + "storm.3205120a.png" + "?" + Date.now();

},{"79abdd7fec46d9de":"jc6Pl"}],"9bAag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlLinkForecast", ()=>urlLinkForecast);
parcelHelpers.export(exports, "urlLink", ()=>urlLink);
function urlLinkForecast(name) {
    const serverUrl = "http://api.openweathermap.org/data/2.5/forecast";
    const cityName = name;
    const apiKey = "ac32ff441e190838ab61e262ae3ebdbf";
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    return url;
}
function urlLink(name) {
    const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
    const cityName = name;
    const apiKey = "ac32ff441e190838ab61e262ae3ebdbf";
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    return url;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jTJ7K"}],"b1wnY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatTime", ()=>formatTime);
function formatTime(time) {
    const timeInMillis = time * 1000;
    const timeData = new Date(timeInMillis);
    const hours = timeData.getHours();
    const minutes = timeData.getMinutes();
    const times = `${hours}:${minutes}`;
    return times;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jTJ7K"}],"fkq6d":[function(require,module,exports) {
module.exports = require("835edd69e45bdb2e").getBundleURL("3gKDs") + "del.ff3f7066.png" + "?" + Date.now();

},{"835edd69e45bdb2e":"jc6Pl"}]},["864lm","adjPd"], "adjPd", "parcelRequire8fb7")

//# sourceMappingURL=index.63aff760.js.map
