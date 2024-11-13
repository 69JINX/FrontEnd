import Image from "next/image";
import styles from "./page.module.css";
import Box from './Box.jsx'

export default function Home() {
  return (
    <>
      <Box color_in={'red'} color_out={'green'}/>
    </>
  );
}
