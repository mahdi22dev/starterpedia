export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/((?!home|login|[resource]|api|register|public|_next|.*\\..*).*)"],
};
