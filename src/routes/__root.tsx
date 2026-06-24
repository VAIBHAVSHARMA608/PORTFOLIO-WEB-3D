import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div
      style={{
        background: "black",
        color: "lime",
        minHeight: "100vh",
        padding: "40px",
        fontSize: "32px",
      }}
    >
      <h1>WEB LORD TEST</h1>
      <p>If you can see this, root route is rendering.</p>

      <Outlet />
    </div>
  );
}
