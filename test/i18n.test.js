const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

test("unsupported stored language falls back to English and is corrected", () => {
  const attributes = {};
  const storage = {
    value: "unsupported",
    getItem() {
      return this.value;
    },
    setItem(key, value) {
      if (key === "tva_lang") this.value = value;
    }
  };
  const document = {
    readyState: "complete",
    documentElement: {
      setAttribute(name, value) {
        attributes[name] = value;
      }
    },
    querySelectorAll() {
      return [];
    },
    querySelector() {
      return null;
    },
    addEventListener() {}
  };
  const context = vm.createContext({
    document,
    window: { localStorage: storage }
  });
  const source = fs.readFileSync(path.join(__dirname, "..", "i18n.js"), "utf8");

  vm.runInContext(source, context);

  assert.equal(attributes.lang, "en");
  assert.equal(storage.value, "en");
});
