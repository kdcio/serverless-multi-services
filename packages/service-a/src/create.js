import crypto from "crypto";
import response from "@kdcio/api-gw-resp";

export const randomString = (len) => crypto.randomBytes(len).toString("hex");

export const handler = async (event) => {
  console.log("create");

  const body = { id: randomString(32) };

  return response.OK({ body });
};
