import Head from "next/head";
import { Manrope } from "next/font/google";
import { CHome } from "@/components";

const manrope = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>BlitsBets</title>
        <meta
          name="description"
          content="Truly Decentralizing the Gaming Sector"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={manrope.className}>
        <CHome />
      </main>
    </>
  );
}
