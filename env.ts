import fs from "fs";

const network = process.env["DFX_NETWORK"] ?? "local";
const isDev = network !== "ic";
const isStaging = network === "staging";

const canisterIdFile = isDev
  ? "./.dfx/" + network + "/canister_ids.json"
  : "./canister_ids.json";
if (isDev) {
  console.warn("Building in dev mode");
}

let canisterIds = { MetaConnect_frontend: {}, MetaConnect_backend: {}, internet_identity: {} } as any;
if (fs.existsSync(canisterIdFile)) {
  canisterIds = JSON.parse(fs.readFileSync(canisterIdFile).toString());
} else {
  console.warn("Canister ID file does not exist:", canisterIdFile);
}

const ids = {
  MetaConnect_frontend: (canisterIds.MetaConnect_frontend || {})[network],
  MetaConnect_backend: (canisterIds.MetaConnect_backend || {})[network],
  ii: isDev ? (canisterIds.internet_identity || {})[network] : undefined,
};

const II_URL = isDev
  ? "http://" + ids.ii + ".localhost:4943"
  : "https://identity.ic0.app";

const FRONTEND_URL = isDev
  ? "http://" + ids.MetaConnect_frontend + ".localhost:4943"
  : "https://" + ids.MetaConnect_frontend + ".icp0.io";

const host = isDev ? "http://localhost:4943" : "https://icp-api.io";

export function dfx_env() {
  return {
    network,
    isDev,
    isStaging,
    II_URL,
    FRONTEND_URL,
    canisterIds: ids,
    host,
  };
}

console.log("dfx_env:", dfx_env());
