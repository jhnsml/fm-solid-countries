/// <reference types="vite/client" />
import { createRootRoute, Link } from "@tanstack/solid-router";
import appCss from "~/styles/app.css?url";
import * as Solid from "solid-js";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

export const Route = createRootRoute({
    head: () => ({
        links: [
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
            },
            { rel: "stylesheet", href: appCss },
        ],
    }),
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: Solid.JSX.Element }) {
    return (
        <>
            <div>
                <Link to="/">Index</Link>
                <Link to="/about">About</Link>
            </div>
            {children}
            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}
