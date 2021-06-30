import Head from "next/head";
import { Button } from "reactstrap";
import MyNavbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Code Test NEXT</title>
        <meta name="description" content="Code Test Nest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyNavbar />
      <div>
        <Button>test</Button>
      </div>
    </div>
  );
}
