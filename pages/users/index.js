import Head from "next/head";
import MyNavbar from "../../components/Navbar";

export default function User() {
  return (
    <div>
      <Head>
        <title>Code Test NEXT</title>
        <meta name="description" content="Code Test Nest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyNavbar />
      <div>User Main Page</div>
    
    </div>
  );
}
