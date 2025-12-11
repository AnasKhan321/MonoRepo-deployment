import Image, { type ImageProps } from "next/image";

import styles from "./page.module.css";
import {prisma}  from "@repo/db/client"

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default  async  function Home() {

  const user = await prisma.user.findFirst() ; 

  return (
    <div className={styles.page}>

{JSON.stringify(user)}

    </div>
  );
}
