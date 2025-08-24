const express = require("express");
const app = express();
const PORT = 3000;

const mongoos = require("mongoose");


async function main() {

  await mongoos.connect("mongodb://127.0.0.1:27017/test");
  console.log("mongoos db connect")
}
main()



app.get("/", (req, res) => {
  res.send("HOme apge");
})


app.listen(PORT, () => console.log("Sever is runing on port", PORT));
