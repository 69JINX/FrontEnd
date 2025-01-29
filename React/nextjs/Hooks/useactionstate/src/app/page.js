import Image from "next/image";
import WithoutuseActionState from "./WithoutuseActionState";
import WithuseActionState from "./WithuseActionState";

export default function Home() {
  return (
    <div className="h-[100vh] grid grid-cols-2 content-center place-items-center ">
      <WithoutuseActionState />
      <WithuseActionState />
    </div>
  );
}
