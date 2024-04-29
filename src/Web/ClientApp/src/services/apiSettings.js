import { IdentityClient } from "../web-api-client.ts";


export async function UpdateUser(userName, userDetails) {

    let client = new IdentityClient();
    const data = await client.updateCurrentUser(userName, userDetails);
    return data;
  }
  