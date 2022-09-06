import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cobregon/mf-menu",
  app: () => System.import("@cobregon/mf-menu"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@cobregon/mf-main",
  app: () => System.import("@cobregon/mf-main"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@cobregon/mf-images",
  app: () => System.import("@cobregon/mf-images"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
