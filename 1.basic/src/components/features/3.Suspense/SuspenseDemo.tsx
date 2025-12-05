import { lazy, Suspense } from "react";
// import { Child } from "./Child";

const Child = lazy(() => import('./Child'))

export const SuspenseDemo = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Child />
        </Suspense>
    </div>
  );
};