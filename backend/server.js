const app = require("./app");

const Database = require("./config/mongoose");
port = 4000;
app.listen(port, () => {
  console.log(`the port is running ${port}`);
});
