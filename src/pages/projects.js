import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";


const projects = () => {
  return (
    <>
      <Head>
        <title>Nuwan | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <maim>
        <Layout>
          <AnimatedText text={"Projects Done By Me"} />
        </Layout>
      </maim>
    </>
  );
};

export default projects;
