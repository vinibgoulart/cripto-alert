import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import type { Env } from "hono";
import { AlertModel } from "@crypto-alert/alert";
import { UserDocument } from "@crypto-alert/user";

export const alertsGet = (app: OpenAPIHono<Env, {}, "/">) => {
  const route = createRoute({
    method: "get",
    path: "/alert",
    request: {
      query: z.object({
        active: z
          .boolean()
          .openapi({
            example: true,
          })
          .optional(),
      }),
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.array(
              z
                .object({
                  _id: z.string().openapi({
                    example: "123",
                  }),
                  price: z.number().openapi({
                    example: 42,
                  }),
                  symbol: z.string().openapi({
                    example: "BTC",
                  }),
                  active: z.boolean().openapi({
                    example: true,
                  }),
                  reachedAt: z.string().openapi({
                    example: "2021-08-20T19:10:00.000Z",
                  }),
                  createdAt: z.string().openapi({
                    example: "2021-08-20T19:10:00.000Z",
                  }),
                })
                .openapi("Alert")
            ),
          },
        },
        description: "Alert found",
      },
      404: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string().openapi({
                example: "Alert not found",
              }),
            }),
          },
        },
        description: "Alert not found",
      },
    },
  });

  app.openapi(route, async (c) => {
    const user = c.get("User") as UserDocument;
    const active = c.req.query("active") || true;

    const alertsGetResponse = await AlertModel.find({
      userId: user._id,
      active,
    });

    const alerts = alertsGetResponse.map((alert) => ({
      _id: alert._id,
      price: alert.price,
      symbol: alert.symbol,
      active: alert.active,
      reachedAt: alert.reachedAt,
      createdAt: alert.createdAt,
    }));

    return c.json(alerts, 200);
  });
};