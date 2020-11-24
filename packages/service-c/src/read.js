import response from "@kdcio/api-gw-resp";

export const handler = async (event) => {
  console.log(`read ${event.pathParameters.id}`);
  const body = { name: "Lord of the Rings" };
  return response.OK({ body });
};
