import { BatchTimmingsClient } from "../web-api-client.ts";



export async function getBatchTimmings() {
    let client = new BatchTimmingsClient();
    const data = await client.getBatchTimmings();
  
    return data;
  }
  