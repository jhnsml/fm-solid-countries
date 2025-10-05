/// <reference types="vite/client" />
import { createRootRoute, Link } from "@tanstack/solid-router";
import appCss from "~/styles/index.css?url";
import * as Solid from "solid-js";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { css } from "styled-system/css";

export const Route = createRootRoute({
    head: () => ({
        links: [{ rel: "stylesheet", href: appCss }],
    }),
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: Solid.JSX.Element }) {
    return (
        <>
            <div>
                <Link to="/">Index</Link>
                <Link to="/about" class={css({ color: "tomato" })}>
                    About
                </Link>
            </div>
            {children}
            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}
