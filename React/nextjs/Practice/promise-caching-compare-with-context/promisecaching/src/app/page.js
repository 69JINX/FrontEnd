import Image from "next/image";
import App from "./components/App";
import Context from "@/context/Context";

export default function Home() {
  return (
    <Context>
      <App />
    </Context>
  );
}
