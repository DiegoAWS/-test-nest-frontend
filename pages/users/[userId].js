import { useRouter } from "next/router";
import React from "react";
import MyNavbar from "../../components/Navbar";

export default function UserDetails() {
  const router = useRouter();
  console.log(router.query.userId);
  return (
    <div>

      <MyNavbar />
      <div> User Details</div>
    

      <div>{router.query.userId}</div>
    </div>
  );
}
