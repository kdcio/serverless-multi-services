import generatePolicy from "@kdcio/aws-policy";

export const handler = async (event) => {
  const user = {
    name: "Ian",
    username: "ian",
    role: "admin",
  };
  const resources = ["POST/service-b", "PUT/service-b/*", "DELETE/service-b/*"];

  const authResponse = generatePolicy({
    context: { ...user },
    principalId: user.username,
    effect: "Allow",
    methodArn: event.methodArn,
    resources,
  });

  return authResponse;
};
