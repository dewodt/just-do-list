import Link from "next/link";
import Layout from "../components/layout";
import getUserData from "../lib/getUserData";

import React, { useState } from "react";
interface typeUserData {
  username: string;
  name: string;
}

interface typeTask {
  title: string;
  id: string;
  done: boolean;
  important: boolean;
  createdDate: any;
  dueDate: any;
  subtask: never[];
}

interface typeProjects {
  title: string;
  id: string;
  tasks: typeTask[];
}

interface typeProjectsTitleId {
  id: string;
  title: string;
}

const backIcon = () => {
  return (
    <svg
      className="fill-white opacity-80 w-[2.2vh] sm:w-[3.7vh] h-[2.2vh] sm:h-[3.7vh] hover:opacity-100"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  );
};

export default function About({
  userData,
  projectsTitleId,
}: {
  userData: typeUserData;
  projectsTitleId: typeProjectsTitleId[];
}) {
  const [navbarStatus, setNavbarStatus] = useState(false);

  return (
    <>
      <Layout userData={userData} projectsTitleId={projectsTitleId} search={""} handleResetSearch={null} handleSearch={null} design={navbarStatus}>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 py-[3vh] lg:px-[17vh] md:px-[10vh] px-[3.4vh] gap-1">
            {/* // ! BACK SECTION FOR MOBILE */}
            <div className="flex sm:hidden">
              <button
                onClick={() => {
                  navbarStatus ? setNavbarStatus(false) : setNavbarStatus(true);
                }}
              >
                {backIcon()}
              </button>
            </div>

            {/* // ! TITLE SECTION */}
            <div className="flex items-center gap-x-3 justify-center mb-4">
              <p className="font-semibold text-xl lg:text-2xl">About </p>
            </div>
            {/* // ! CONTENT   */}
            <div
              className="overflow-y-scroll mx-[1vh] bg-[#424242] rounded-[30px] mb-3"
              id="no-scrollbar"
            >
              <div className="mx-8 lg:mx-[7vh] my-[4vh]">
                <p className="text-justify text-sm lg:text-base">
                  Welcome to Just Do It We will facilitate you with our
                  worthwhile feature that will help you to make a plan, be it
                  daily plan or just a single-go plan
                </p>
                <br />
                <ul>
                  <p className="text-sm lg:text-base">
                    So, these are about our features:
                  </p>

                  <li className="text-lg font-semibold">
                    <br />
                    TASKS
                  </li>
                  <p className="text-justify text-sm lg:text-base">
                    Break your BIG GOALS into smaller tasks and hit the
                    checklist to mark that it is already done!
                  </p>
                  <br />

                  <li className="text-lg font-semibold">TODAY</li>
                  <p className="text-justify text-sm lg:text-base">
                    You can easily check your assigned due date tasks on TODAY!
                  </p>
                  <br />

                  <li className="text-lg font-semibold">IMPORTANT</li>
                  <p className="text-justify text-sm lg:text-base">
                    If you think that the task is important, then hit the STAR
                    to give it a mark that it is IMPORTANT!
                  </p>
                  <br />

                  <li className="text-lg font-semibold">PLANNED</li>
                  <p className="text-justify text-sm lg:text-base">
                    This is for the BIG PICTURE tasks that you've already
                    planned. If the tasks was the smaller pieces of your plan,
                    then this section is the combination of those pieces in one
                    GOAL! You can also use this section to note something that
                    already planned.
                  </p>
                  <br />

                  <li className="text-lg font-semibold">NOTES</li>
                  <p className="text-justify text-sm lg:text-base">
                    A simple yet powerful tool! You can make a note about
                    everything here, the date is automatically set by the time
                    that you wrote the note.
                  </p>
                  <br />

                  <li className="text-lg font-semibold">PROJECTS</li>
                  <p className="text-justify text-sm lg:text-base">
                    If you have some particular tasks for a certain project, you
                    can add those here! Start by add a new project then add a
                    new tasks for that project, it will make you easier to
                    separate each task on each project.
                  </p>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const username = ctx.req.headers.cookie.split("=")[0];

  // Get datas from database
  const data = await getUserData(username);

  // User data
  const name = data.name;
  const userData = { username: username, name: name };

  // Projects Title
  const projectsTitleId = data.projects.map((proj: typeProjects) => {
    return { id: proj.id, title: proj.title };
  });

  // Tasks data
  const pageData = data.tasks;

  return {
    props: { userData, projectsTitleId, pageData },
  };
}