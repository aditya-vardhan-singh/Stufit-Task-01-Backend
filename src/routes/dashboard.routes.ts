import { Router } from "express";
import { getDashboard } from "@/controllers";

export const dashboardRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: User dashboard
 */

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Get user dashboard
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Dashboard data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
dashboardRoutes.get("/", getDashboard);

