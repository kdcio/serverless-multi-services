const fs = require("fs");
const yaml = require("yaml");

const renameFunctions = (serviceName, basePath, funcs) => {
  const keys = Object.keys(funcs);
  const functions = {};
  keys.forEach((k) => {
    const func = funcs[k];
    func.handler = `${basePath}${func.handler}`;
    if (func.events) {
      func.events = func.events.map((e) => {
        if (!e.http || !e.http.authorizer) return e;
        e.http.authorizer = `${serviceName}-${e.http.authorizer}`;
        return e;
      });
    }
    functions[`${serviceName}-${k}`] = funcs[k];
  });
  return functions;
};

module.exports = () => {
  const services = ["service-a", "service-b", "service-c"];

  let functions = {};
  services.forEach((serviceName) => {
    const basePath = `./packages/${serviceName}/`;
    let file = fs.readFileSync(`${basePath}functions.yml`, "utf8");
    file = file.replace(/\$\{self\:service\}/g, serviceName);
    file = file.replace(/\$\{self\:provider.stage\}/g, "local");
    const funcs = yaml.parse(file);

    functions = {
      ...functions,
      ...renameFunctions(serviceName, basePath, funcs),
    };
  });

  return functions;
};
