import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
export default function UserDetails() {
  const router = useRouter();
  console.log(router.query.userId);
  return (
    <div>
      <div> User Details</div>
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

      <div>{router.query.userId}</div>
    </div>
  );
}
