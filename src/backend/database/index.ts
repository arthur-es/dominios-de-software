import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

import { supabaseUrl, supabaseKey } from "../../config";

export const PrismaInstance = (function () {
  let instance: PrismaClient;

  function createInstance(): PrismaClient {
    const client = new PrismaClient();

    instance = client;

    return client;
  }

  return {
    getInstance: function () {
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

export const SupabaseInstance = (function () {
  let instance: any;

  function createInstance(): any {
    const supabase = createClient(supabaseUrl, supabaseKey);

    instance = supabase;

    return supabase;
  }

  return {
    getInstance: function () {
      if (!instance) {
        console.log("🆕 Criando nova instância do supabase client...");
        instance = createInstance();
      } else {
        console.log("Retornando instância existente do supabase client...");
      }
      return instance;
    },
  };
})();
