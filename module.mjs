// @ts-check
import { module } from "@prisma/composer";
import tutorialWithNextService from "./service.mjs";
import nextjsDashboardService from "./nextjs-dashboard/service.mjs";

export default module("tutorial-with-next", ({ provision }) => {
  provision(tutorialWithNextService, { id: "tutorialwithnext" });
  provision(nextjsDashboardService, { id: "nextjsdashboard" });
});
