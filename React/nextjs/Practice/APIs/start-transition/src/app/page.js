import Image from "next/image";
import WithoutStartTransition from "./components/WithoutStartTransition";
import WithStartTransition from "./components/WithStartTransition";

export default function Home() {
  return (
    <div className="flex gap-10">
      <WithoutStartTransition />
      <br/>
      <WithStartTransition />
    </div>
  );
}
