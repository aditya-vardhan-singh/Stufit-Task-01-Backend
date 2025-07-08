import "express-async-errors";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { notFound, errorHandler, protectRoute } from "@/middlewares";
import { authRoutes, dashboardRoutes } from "@/routes";
import { FRONTEND_URL, PORT } from "@/libs";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [FRONTEND_URL],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Dashboard API server running at port number: ${PORT}`);
});
