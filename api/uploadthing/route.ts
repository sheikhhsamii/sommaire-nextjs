import { createRouteHandler } from "uploadthing/next";

import { ourFileUploader } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileUploader,
});
