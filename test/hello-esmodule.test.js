import test from "node:test";
import assert from "node:assert";

import * as hello from "../lib/hello-esmodule.js";

test("Success test", async (t) => {
  assert.strictEqual(hello.say(), "Hello, ES Module!");
});
