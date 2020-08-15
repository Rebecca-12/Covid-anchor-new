const server = require("./infra/server");

const main = async () => {
  // Run Server
  await server();
};

main();
