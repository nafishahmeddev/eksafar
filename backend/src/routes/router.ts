import path from "path"
import fs from "fs";
import colors from "colors";

import _debugger from "../middleware/debugger";

const BASE_URL = "";
const routeFormatter = (routeToUse: string): string => {
  const route = routeToUse
    .slice(__dirname.length, routeToUse.includes("index") ? -9 : -3)
    .replace("/[", "/:")
    .replace("]", "");
  return BASE_URL + route;
};

function globalErrorHandler(err: any, req: any, res: any, next) {
  return res.status(500).json({
    resultCode: 500,
    message: req.locale.__("UNKNOWN_ERROR")
  });
}

async function loopThroughFolder(app, currentDir: string = __dirname) {
  const files = fs.readdirSync(currentDir);
  await Promise.all(files.map(async (elm) => {
    if (
      elm[0] == "_" ||
      elm.includes(".validation") ||
      elm.includes("router") ||
      elm.includes(".map")
    )
      return;

    const newPath = path.join(currentDir, elm);
    const stats = fs.statSync(newPath);

    if (!stats.isFile()) return await loopThroughFolder(app, newPath);

    const endPointRouter = await import(newPath);

    const middleware = [_debugger];

    const wrappedFunction = () => {
      endPointRouter.default.mergeParams = true;

      for (const stack of endPointRouter.default.stack) {
        const methodPath = stack.route.stack;
        const newHandler = methodPath[methodPath.length - 1].handle.bind();
        methodPath[methodPath.length - 1].handle = async (req, res, next) => {
          try {
            await newHandler(req, res, next);
          } catch (err) {
            globalErrorHandler(err, req, res, next);
          }
        };
      }
      return endPointRouter.default;
    };

    const formattedRoute = routeFormatter(newPath);

    console.log(
      endPointRouter.OPTIONS?.secure
        ? colors.green("SECURE")
        : colors.blue("PUBLIC"),
      formattedRoute
    );
    app.use(formattedRoute, ...middleware, wrappedFunction());
  }));
  return app;
}

export default async function (app) {
  console.log(colors.blue("======= Routers ========"))
  return await loopThroughFolder(app);
};