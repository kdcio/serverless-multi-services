import response from "@kdcio/api-gw-resp";

export const handler = async () => {
  console.log(`list`);
  const body = {
    movies: [
      { name: "Lord of the Rings" },
      { name: "Forest Gump" },
      { name: "Breaveheart" },
    ],
  };
  return response.OK({ body });
};
