import express from "express";
import dashboardRouter from "./dashBoardRoutes.js";
import cartRouter from './cartRoutes.js'
import paymentRoutes from './paymentRoutes.js'

const apiRouter = express.Router();
// Testing the brach dev_safwan

// v1 router
apiRouter.use("/dashboard",dashboardRouter );
apiRouter.use('/cart',cartRouter)
apiRouter.use('/order',paymentRoutes)


export default apiRouter;
