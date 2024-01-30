import { MachinesClient } from "../web-api-client.ts";

export async function getMachines() {
  let client = new MachinesClient();
  const data = await client.getMachines();

  return data;
}

export async function CreateMachines(machines) {
  debugger;
  let client = new MachinesClient();
  const data = await client.createMachines(machines); 
  return data;
}
