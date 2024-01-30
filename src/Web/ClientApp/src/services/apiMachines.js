import { MachinesClient } from "../web-api-client.ts";

export async function getMachines() {
  let client = new MachinesClient();
  const data = await client.getMachines();

  return data;
}

export async function CreateMachines(machines) {
  let client = new MachinesClient();
  const data = await client.createMachines(machines);
  return data;
}

export async function EditMachines(id, machines) { 
  machines = { ...machines, id };
  let client = new MachinesClient();
  const data = await client.updateMachines(id, machines);
  return data;
}

export async function DeleteMachines(id) { 
  let client = new MachinesClient();
  const data = await client.deleteMachines(id);
  return data;
}