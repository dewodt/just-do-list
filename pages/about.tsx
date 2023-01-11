import Layout from "../components/layout";
import getUserData from "../lib/getUserData";

import React from "react";

export default function About({ data } : any) {
  return (
    <>
      <Layout name={data.name} username={data.username}>
        <p>About</p>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const username = ctx.req.headers.cookie.split("=")[0];
  const data = await getUserData(username);
  return {
    props: { data }
  }
}
