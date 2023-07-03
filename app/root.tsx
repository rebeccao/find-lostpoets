// ./app/root.tsx

import { LiveReload, Outlet, Links } from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import styles from './styles/app.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}
export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>WTF</title>
        <Links/>
      </head>
      <body>
        <Outlet/>
        <LiveReload />
      </body>
    </html>
  );
}