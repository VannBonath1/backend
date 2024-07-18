import app from "@/src/app";
import configs from "@/src/config";
import connectToDatabase from "./database/connection";
// bruh
function run() {
  connectToDatabase();
  app.listen(configs.port, () => {
    console.log(`User Service running on Port: ${configs.port}`);
  });
}

run();
