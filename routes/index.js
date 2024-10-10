import express from "express";
import dashboardRouter from "./dashBoardRoutes.js";

const apiRouter = express.Router();

// v1 router
apiRouter.use("/dashboard",dashboardRouter );

export default apiRouter;
