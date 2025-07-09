import { Router } from "express";
import { getDashboardData, getFilteredDashboardData } from "@/controllers";

export const dashboardRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: User dashboard
 */

dashboardRoutes.get("/data", getDashboardData);

dashboardRoutes.get("/filterData", getFilteredDashboardData);