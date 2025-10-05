import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
    ssr: true,
    head: () => ({
        meta: [
            {
                title: "Homepage",
            },
        ],
    }),
});

function RouteComponent() {
    return (
        <main>
            <h1>Hello world!</h1>
        </main>
    );
}
