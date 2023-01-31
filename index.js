import * as fs from "node:fs/promises"
import express from "express"

const app = express()

app.get("/", async function (req, res) {
  res.send(await fs.readFile("./index.html", "utf8"))
})
app.get("/about", async function (req, res) {
  res.send(await fs.readFile("./about.html", "utf8"))
})
app.get("/contact-me", async function (req, res) {
  res.send(await fs.readFile("./contact-me.html", "utf8"))
})
app.get("/*", async function (req, res) {
  res.send(await fs.readFile("./404.html", "utf8"))
})

app.listen(3000, () => console.log("available port 3000"))
