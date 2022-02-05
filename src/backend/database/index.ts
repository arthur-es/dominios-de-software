import { PrismaClient } from "@prisma/client";

const PrismaInstance = (function () {
  let instance: PrismaClient;

  function createInstance(): PrismaClient {
    const client = new PrismaClient();

    instance = client;

    return client;
  }

  return {
    getInstance: async function () {
      if (!instance) {
        console.log("🆕 Criando nova instância do prisma...");
        instance = createInstance();
      } else {
        console.log("Retornando instância existente do prisma...");
      }
      return instance;
    },
  };
})();

export default PrismaInstance;
