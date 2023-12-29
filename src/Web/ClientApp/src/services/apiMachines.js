import { MachinesClient } from "../web-api-client.ts";

export async function getMachines() {
    let client = new MachinesClient();
    const data= await client.getMachines();   
  
    return data;
  }