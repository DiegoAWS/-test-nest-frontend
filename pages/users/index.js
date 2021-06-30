import Head from "next/head";
import Link from "next/link";
export default function User() {
  return (
    <div>
      <Head>
        <title>Code Test NEXT</title>
        <meta name="description" content="Code Test Nest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>User Main Page</div>
      <ul>
        <li key="0">
          <Link href="/users/"> User</Link>
        </li>
        <li key="1">
          <Link href="/users/test-id"> User 1</Link>
        </li>
        <li key="2">
          <Link href="/users/Other-user"> User 2</Link>
        </li>
      </ul>
    </div>
  );
}
