import { IdentityClient } from "../web-api-client.ts";

export async function logoutApi() {
  let client = new IdentityClient();
  const data = await client.logout();
  return data;
}

export async function getCurrentUser() {
  let client = new IdentityClient();
  const data = await client.getCurrentUser();
  return data;
}
