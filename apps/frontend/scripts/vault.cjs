const fs = require("node:fs");
const vault = require("node-vault")({
  apiVersion: "v1",
  endpoint: "http://192.168.20.189:8200",
  token: "Raju@1bk2",
});

async function main() {
  const filePath = ".env.local";
  let content = "hello world";

  try {
    const secret = await vault.read("kv/data/dev");
    const data = secret.data.data;

    content = Object.entries(data)
      .map(([k, v]) => `${k}=${v}\n`)
      .join("");

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully!");
      }
    });
  } catch {
    console.error("Error writing file:");
  }
}

main();
