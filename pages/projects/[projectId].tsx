import React from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

const ProjectDetails = () => {
    const router = useRouter();
    const { projectId } = router.query;

  return (
    <>
      <Layout>
        <p>ehe from {projectId}</p>
      </Layout>
    </>
  );
}

export default ProjectDetails