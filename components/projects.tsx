import axios from "axios";
import Link from "next/link";
import { useState } from "react";

interface typeUserData {
  username: string;
  name: string;
}

interface typeProjectsTitleId {
  title: string;
  id: string;
};

export default function Projects( { userData, projectsTitleId }: { userData: typeUserData, projectsTitleId: typeProjectsTitleId[] } ) {
  const projectIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.6rem] h-[0.6rem] m-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    );
  };
  const deleteIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.6rem] h-[0.6rem] m-auto hover:fill-zinc-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  const checkIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.8rem] h-[0.8rem] m-auto hover:fill-zinc-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
      </svg>
    );
  };
  const crossIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.8rem] h-[0.8rem] m-auto hover:fill-zinc-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
      </svg>
    );
  };
  const renameIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[0.8rem] h-[0.8rem] m-auto hover:fill-zinc-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
      </svg>
    );
  };

  type MyObject = {
    title: string;
    id: string;
  };

  const uniqid = require("uniqid"); // Ini buat generate id dari npm
  const [dropDownProjects, setDropDownProjects] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [projects, setProjects] = useState<MyObject[]>(projectsTitleId);
  const [title, setTitle] = useState("");
  const [editProject, setEdit] = useState<MyObject>({ title: "", id: "" });

  function addProjects() {
    // New Array (no mutation)
    const newProject = {
      id: uniqid("project_"),
      title: title,
      tasks: []
    };

    if (showInput && title !== "") {
      // Edit database
      axios.post("http://localhost:3000/api/addproject", {
        username: userData.username,
        newProject: newProject,
      }).then( () => {
        // Edit client side
        setProjects([...projects, newProject]);
      })
    }
    setTitle("");
    setShowInput(!showInput);
  };

  function handleSave(projectId: string) {
    // Edit database
    axios.post("http://localhost:3000/api/editproject", {
        username: userData.username,
        projectId: projectId,
        newTitle: title ? title : "New Project",
      }).then( () => {
        // Create new array (no mutation)
        const newProjects = projects.map( (project) => {
          if (project.id === projectId) { 
            return {...project, title: title ? title : "New Project"}
          } else {
            return {...project}
          }
        })

        // Edit client side
        setProjects(newProjects);
        setEdit({ id: "", title: "" });
        setTitle("");
      })
  }

  function handleEditProject(project: { title: string; id: string }) {
    setEdit(project);
    setShowInput(false);
    setTitle(project.title);
  }

  function handleDelete(projectId: string) {
    // Edit database
    axios.post("http://localhost:3000/api/deleteproject", {
      username: userData.username,
      projectId: projectId,
    })
      .then( () => {
        // New Array (no mutation)
        const newProjects = projects.filter( (project) => { return project.id !== projectId } );

        // Edit client side
        setProjects(newProjects);
        setEdit({ id: "", title: "" });
        setTitle("");
      })
  }

  return (
    <div
      id="no-scrollbar"
      className="flex flex-col flex-1 mb-1 overflow-y-scroll"
    >
      <div
        id="no-scrollbar"
        className=" bg-[#464449] hover:bg-[#4D4B52] bg-opacity-50 gap-1 my-2 mx-10 indent-4 rounded-[0.8rem] text-[0.87rem] overflow-auto"
      >
        <div
          className=" rounded-[0.3rem] hover:bg-[#4D4B52] flex cursor-pointer h-[2rem] my-1"
          role="button"
          onClick={() => {
            dropDownProjects
              ? setDropDownProjects(false)
              : setDropDownProjects(true);
          }}
        >
          <div className="ml-4 py-1.5 ">
            {dropDownProjects ? (
              <svg
                className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64h117.5c16.97 0 33.25 6.742 45.26 18.75L275.9 96H416c35.35 0 64 28.66 64 64v32h-48V160c0-8.824-7.178-16-16-16H256L192.8 84.69C189.8 81.66 185.8 80 181.5 80H64C55.18 80 48 87.18 48 96v288l71.16-142.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z" />
              </svg>
            ) : (
              <svg
                className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M448 480H64c-35.3 0-64-28.7-64-64V192H512V416c0 35.3-28.7 64-64 64zm64-320H0V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H448c35.3 0 64 28.7 64 64z" />
              </svg>
            )}
          </div>
          <div className="text-[1.5vh] 2xl:text-[1.6vh] font-semibold flex-1 m-auto">
            PROJECTS
          </div>
        </div>
        {dropDownProjects && (
          <div className="mb-2 ">
            <div className="mx-2 dark:hover:text-white rounded-[0.3rem] flex mb-1 dark:hover:bg-gray-600">
              {showInput ? (
                <div className="flex p-1 gap-2 mx-4 flex-1">
                  <input
                    type="text"
                    placeholder="Project Name"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    className="text-black w-[9vw] flex-1 text-xs outline-none rounded-[3px] bg-white placeholder:indent-3"
                  />
                  <div className="m-auto" role="button" onClick={addProjects}>
                    {title === "" ? crossIcon() : checkIcon()}
                  </div>
                </div>
              ) : (
                <div
                  className="flex mx-2 gap-2 flex-1  rounded-[3px]"
                  role="button"
                  onClick={addProjects}
                >
                  <div className="flex flex-1 mx-3">
                    <div className="flex-1 m-auto text-[1.5vh] 2xl:text-[1.6vh] indent-0">
                      Add New Project
                    </div>
                    <div className="py-1.5">
                      <svg
                        className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto hover:fill-zinc-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* New project when clicking */}
            {projects.map((project) =>
              editProject === project && showInput === false ? (
                <>
                  <li
                    key={project.id}
                    className="ml-4 mr-2 flex w-full py-1 text-[1.5vh] 2xl:text-[1.6vh] text-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 rounded-[3px] "
                  >
                    <div className="m-auto flex">
                      <button disabled={true} className="py-1.5">
                        {projectIcon()}
                      </button>
                      <div className="my-auto flex-1 indent-0 mx-3.5">
                        <input
                          type="text"
                          className="w-[5.15vw] outline-none"
                          placeholder="Project Name"
                          defaultValue={project.title}
                          onChange={(event) => {
                            setTitle(event.target.value);
                          }}
                        />
                      </div>
                      <button
                        className="py-1"
                        onClick={() => handleSave(project.id)}
                      >
                        {checkIcon()}
                      </button>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="ml-4 mr-2 flex py-1 text-[1.5vh] 2xl:text-[1.6vh] text-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 rounded-[3px] ">
                    <div className="m-auto flex flex-1">
                      <button disabled={true} className="py-1.5">
                        {projectIcon()}
                      </button>
                      <div className="my-auto flex-1 w-[7vw]" key={project.id}>
                        <Link
                          href={{
                            pathname: "/projects/[slug]",
                            query: { slug: project.id },
                          }}
                        >
                          <div
                            className="mx-4 indent-0 break-all cursor-pointer"
                          >
                            {project.title}{" "}
                          </div>
                        </Link>
                      </div>
                      <button
                        className="text- py-1 mr-2"
                        onClick={() => handleEditProject(project)}
                      >
                        {renameIcon()}
                      </button>
                      <button
                        className="py-1"
                        onClick={() => handleDelete(project.id)}
                      >
                        {deleteIcon()}
                      </button>
                    </div>
                  </li>
                </>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
