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
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [FRONTEND_URL, "https://stufit-task-01-frontend.vercel.app/"],
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  })
);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/dashboard", protectRoute, dashboardRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Dashboard API server running at port number: ${PORT}`);
  console.log(`🌐 Swagger UI available at: http://localhost:${PORT}/api-docs`);
  console.log(`🔗 Frontend URL: ${FRONTEND_URL}`);
});
