import Link from "next/link";
import { Suspense } from "react";
import { redirectAction } from "../redirectAction";
import SomeComponentWithDataFetching from "../some-component-with-data-fetching";

export const dynamic = "force-dynamic"; // force SomeContentWithDataFetching to be dynamic

export default function Page() {
  const redirectActionWithPath = redirectAction.bind(null, "/other-page");

  return (
    <>
      <Suspense fallback={<p>Loading in page...</p>}>
        <SomeComponentWithDataFetching sleepTime={2500}>
          <p>Page - {Date.now()}</p>
          <p>
            <Link href="/other-page">Link to other page</Link>
          </p>
          <form action={redirectActionWithPath}>
            <button type="submit">Server action with redirect</button>
          </form>
        </SomeComponentWithDataFetching>
      </Suspense>
    </>
  );
}
