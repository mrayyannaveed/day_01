import { withAuth } from "next-auth/middleware";

export default withAuth(
  // middleware function not needed here, withAuth handles access
  () => {},
  {
    callbacks: {
      authorized: ({ token }) => {
        // token exists -> allow; otherwise redirect by NextAuth
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/checkout", "/account/:path*", "/orders/:path*"],
};
