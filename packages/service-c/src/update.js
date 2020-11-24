import response from "@kdcio/api-gw-resp";

export const handler = async (event) => {
  console.log(`update ${event.pathParameters.id}`);

  return response.NO_CONTENT();
};
