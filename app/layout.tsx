import { Suspense } from "react";
import SomeComponentWithDataFetching from "./some-component-with-data-fetching";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <h1>Bug with server action redirect with layout using suspense</h1>
        {children}
        <Suspense fallback={<p>Loading in layout...</p>}>
          <SomeComponentWithDataFetching sleepTime={5000}>
            <p>Data fetched on the layout</p>
          </SomeComponentWithDataFetching>
        </Suspense>
      </body>
    </html>
  );
}
