import Image from "next/image";
import { lazy } from "react";
import App1 from "./App1";

const LazyComponent = lazy(() => import('./App'));

export default function Home() {
  return (
    <>
      <LazyComponent />
      <App1 />
    </>

  );
}
