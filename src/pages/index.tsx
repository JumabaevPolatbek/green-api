import { GetServerSideProps } from "next";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import Conversation from "../components/Conversation/Conversation";
import Side from "../components/Side/Side";
import { IContact } from "../store/models/account";
type Props = {
  conatcs: IContact[];
};

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <>
      <div className={`container app`}>
        <button onClick={() => signOut()}>Log out</button>
        <div className={`row app-one`}>
          <Side />
          <Conversation />
        </div>
      </div>
    </>
  );
}
