import { IdentityClient, SecurityClient } from "../web-api-client.ts";


export async function UpdateUser(userName, userDetails) {

    let client = new IdentityClient();
    const data = await client.updateCurrentUser(userName, userDetails);
    return data;
  }
  
  export async function UpdateUserPassword(userPassword) {
    debugger;
    let client = new SecurityClient();
    const data = await client.updateCurrentUserPassword(userPassword);
    return data;
  }
  