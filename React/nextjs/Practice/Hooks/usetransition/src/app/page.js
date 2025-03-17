import Image from "next/image";
import WithoutUseTransition from "./Components/WithoutUseTransition";
import WithUseTransition from "./Components/WithUseTransition";

export default function Home() {
  return (
    <>
      <div className="flex m-2">
        <WithoutUseTransition />
        <WithUseTransition/>
      </div>
    </>
  );
}
