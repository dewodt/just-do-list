import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import axios from "axios";
import SubTask from "../../components/subtask";
import getUserData from "../../lib/getUserData";
import PageHead from "../../components/pagehead";

interface typeUserData {
  username: string;
  name: string;
}

interface typeProjectsTitleId {
  id: string;
  title: string;
}

interface typeTask {
  title: string;
  id: string;
  done: boolean;
  important: boolean;
  createdDate: any,
  dueDate: any,
  subtask: never[]
};

interface typePageData {
  title: string;
  id: string;
  tasks: typeTask[];
};

export default function ProjectDetails( { userData, projectsTitleId, pageData }: { userData: typeUserData, projectsTitleId: typeProjectsTitleId[], pageData: typePageData } ) {
  // *  * ICON
  const starLineIcon = () => {
    return (
      <svg
        className="fill-white w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80 hover:fill-[#54A1EA]"
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
      </svg>
    );
  };

  const starFullIcon = () => {
    return (
      <svg
        className="fill-white  w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80 hover:fill-[#54A1EA]"
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    );
  };

  const plusIcon = (rotate: string) => {
    return (
      <svg
        className={`${rotate} fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto cursor-pointer`}
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    );
  };

  const checkIcon = () => {
    return (
      <svg
        xmlns="http:// * www.w3.org/2000/svg"
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:opacity-100"
        viewBox="0 0 512 512"
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const circleCheckIcon = (design : string) => {
    return (
      <svg
        className={`${design} fill-white opacity-80 w-[1.8vh] sm:w-[1.6vh] lg:w-[2.2vh] 2xl:w-[2.2vh] hover:fill-[#54A1EA]`}
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const circleIcon = (colorHover: string) => {
    return (
      <svg
        className={`fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:fill-[${colorHover}]`}
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const trashIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  const renameIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
      </svg>
    );
  };

  const saveIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
      </svg>
    );
  };

  const arrowIcon = () => {
    return (
      <svg
        className={`w-4 h-4 sm:w-5 sm:h-5 ${!dropDownFinished && "-rotate-90"}`}
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http:// * www.w3.org/2000/svg"
        >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };

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

  const calendarIcon = (design:string) => {
    return (
      <svg
        className={`fill-${design} opacity-80 w-[1vh] sm:w-[1.3vh] h-[1vh] sm:h-[1.3vh] m-auto`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
      </svg>
    );
  };
  
// ! I've tidied the lines, don't use automation from prettier to make tidier
  // *  VARIABLE INITIALIZATION
  const router = useRouter();
  const projectId = router.query.projectId as string;
  const uniqid = require("uniqid");                                 // * to generate id from npm
  const [addTaskInputShow, setAddTaskInputShow] = useState(false);  // * to popup input new task
  const [stepPreview, setStepPreview] = useState(false);            // * open subtask of a task
  const [dropDownFinished, setDropDownFinished] = useState(false);  // * make dropdown finished popup
  const [taskTitle, setTaskTitle] = useState("");                   // * the value input to state and submit on data changes
  const [tasks, setTasks] = useState<typeTask[]>(pageData.tasks);         // * array of all task
  const [taskEdit, setTaskEdit] = useState<typeTask>({              // * contains the task that is being renamed or edited
    title: "",
    id: "",
    done: false,
    important: false,
    createdDate: null,
    dueDate: null,
    subtask: []
  });

  const [stepTaskPreview, setStepTaskPreview] = useState<typeTask>({  // * contains the task that the step wants to display
    title: "",
    id: "",
    done: false,
    important: false,
    createdDate: null,
    dueDate: null,
    subtask: []
  });

  const [search, setSearch] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(pageData.tasks);
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [dueDate, setDueDate] = useState (new Date().valueOf());

  useEffect(() => {
    const interval = setInterval(() => {
      setDueDate(new Date().valueOf());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleSearch(search: string) {
    setSearch(search);
    const newTasks = tasks.filter( (task) => {
      if (task.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    setFilteredTasks(newTasks);
    setStepPreview(false);
  }

  function handleResetSearch() {
    setSearch("");
    setFilteredTasks(tasks);
  }
  
  // *  to add new task
  function addTask() {
    const newTask = {
      id: uniqid("task_"),
      title: taskTitle,
      done: false,
      important: false,
      createdDate: Date.now(),
      dueDate: null,
      subtask: []
    }
    if (addTaskInputShow && taskTitle !== "") {
      // Update database
      axios.post("/api/addtask", {
        menu: "projects",
        projectId: projectId,
        newTask: newTask
      })
        .then( () => {
          // Update client-side
          setTasks([...tasks, newTask]);
          setFilteredTasks([...tasks, newTask]);
          setSearch("")
        });
    }
    setTaskTitle("");
    setAddTaskInputShow(!addTaskInputShow);
  }

  // *  to delete certain task
  function handleDelete(idTaskEdit: string) {
    // Update database
    axios.post("/api/deletetask", {
      menu: "projects",
      projectId: projectId,
      taskId: idTaskEdit
    })
      .then( () => {
        // New Tasks
        const newTasks = tasks.filter(function (task) {
          return task.id != idTaskEdit;
        });

        const newFilteredTasks = filteredTasks.filter(function (task) {
          return task.id != idTaskEdit;
        });

        // Update client side
        setTasks(newTasks);
        setFilteredTasks(newFilteredTasks);
        setStepPreview(false);
      });
  }

  // *  to set which task is being edited
  function handleEdit(task: {
    title: string;
    id: string;
    done: boolean;
    important: boolean;
    createdDate: any;
    dueDate: any;
    subtask:never[]
  }) {
    setTaskEdit(task);
    setAddTaskInputShow(false);
    setTaskTitle(task.title);
  }

  // *  to save changes after editing
  function handleSave(taskId: string) {
    // Update database
    axios.post("/api/edittask", {
      menu: "projects",
      projectId: projectId,
      taskId: taskId,
      newTaskTitle: taskTitle === "" ? "New Tasks" : taskTitle
    })
      .then( () => {
        // Create new array (no mutation)
        const newTasks = tasks.map( (item) => {
          if (item.id === taskId) {
            return {...item, title: taskTitle === "" ? "New Tasks" : taskTitle};
          } else {
            return {...item};
          }
        })

        const newFilteredTasks = newTasks.filter( (task) => {
          if (task.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return true;
          } else {
            return false;
          }
        })

        // Update client side
        setTasks(newTasks);
        setFilteredTasks(newFilteredTasks);
        setTaskEdit({ id: "", title: "", done: false, important: false, createdDate: null, dueDate: null, subtask: [] });
        setTaskTitle("");
        setStepPreview(false);

        // handle bug when clicking edit mode in stepPreview mode
        const taskData = tasks.filter(function (task) {
          return task.id === taskId;
        });
        setStepTaskPreview(taskData[0])
        setAddTaskInputShow(false);
      });
  }

  // *  to change done status of task
  function handleDone(taskId: string, taskDone: boolean) {
    // Update database
    axios.post("/api/donetask", {
      menu: "projects",
      projectId: projectId,
      taskId: taskId,
      taskDone: !taskDone
    })
    .then( () => {
      // Create new array (no mutation)
      const newTasks = tasks.map( (item) => {
        if (item.id === taskId) {
          return {...item, done: !item.done};
        } else {
          return {...item};
        }
      })

      // Create new array for filtered data
      const newFilteredTasks = filteredTasks.map( (item) => {
        if (item.id === taskId) {
          return {...item, done: !item.done};
        } else {
          return {...item};
        }
      })

      // Update client side
      setTasks(newTasks);
      setFilteredTasks(newFilteredTasks);
    });
  }

  // *  to change important status of task
  function handleImportant(taskId: string, taskImportant: boolean) {
    // Update database
    axios.post("/api/importanttask", {
      menu: "projects",
      projectId: projectId,
      taskId: taskId,
      taskImportant: !taskImportant
    })
    .then( () => {
        // Create new array (no mutation)
        const newTasks = tasks.map( (item) => {
          if (item.id === taskId) {
            return {...item, important: !item.important};
          } else {
            return {...item};
          }
        })

        // Create new array for filtered case
        const newFilteredTasks = filteredTasks.map( (item) => {
          if (item.id === taskId) {
            return {...item, important: !item.important};
          } else {
            return {...item};
          }
        })

        // Update client side
        setTasks(newTasks);
        setFilteredTasks(newFilteredTasks)
      });
  }

  // * to handle change step preview popup
  function handleSubTaskPreview(task: {
    title: string;
    id: string;
    done: boolean;
    important: boolean;
    createdDate: any;
    dueDate: any;
    subtask:never[]
  }) {
    setStepTaskPreview(task);
    setAddTaskInputShow(false);
    setTaskTitle("");
    stepPreview ? setStepPreview(false) : setStepPreview(true);
  }
  const generateDate = (dateData:number) => {
    if(dateData !== null){
    return (new Date(dateData)).toLocaleDateString("en-UK", {
      weekday:"short",
        day: "numeric",
        month: "short",
        year: "2-digit",
    });}
  };

  // * to convert from dueDate number format to a time string
  const generateTime = (dateData:number) => {
    if(dateData !== null){
    return (new Date(dateData)).toLocaleTimeString("en-UK", {
      hour: "numeric",
      minute: "numeric",
    });}
  };

// ! I've tidied the lines, don't use automation from prettier to make tidier

return (
  <>
    <PageHead title={`${pageData.title} | Just Do List`}/>
    <Layout userData={userData} projectsTitleId={projectsTitleId} search={search} handleResetSearch={handleResetSearch} handleSearch={handleSearch} design={navbarStatus}>
      <div className="flex flex-1">
        <div className="flex flex-col flex-1 py-[2vh] lg:p-[3.8vh] px-[3.4vh] gap-1">
    {/* // ! BACK SECTION FOR MOBILE */}
          <div className="flex sm:hidden">
            <button onClick={()=>{navbarStatus ? setNavbarStatus(false) : setNavbarStatus(true)}}>
               {backIcon()}
            </button>
          </div>

    {/* // ! TITLE SECTION */}
          <div className="flex  items-center gap-x-3 mt-2 lg:mt-0">
            <p className="font-semibold text-xl sm:text-2xl">
              {pageData.title}
            </p>
          </div>
          
    {/* // ! TASK LIST UNDONE SECTION */}
          <div
            className="flex flex-1 flex-col my-3 overflow-y-scroll"
            id="no-scrollbar"
            >
            {/* // * div to loop through the created task list * */}
            {filteredTasks.map(
              (task) =>
                !task.done && (
                  <div
                    key={task.id}
                    className="flex bg-[#424242] hover:opacity-80 duration-200 p-[1.4vh] cursor-pointer mb-[1.47vh] "
                  >
                    <div className="flex flex-1 items-center justify-center mx-[1vw] gap-2 sm:gap-3">
                      {/* // * Handle changes to the checkdone icon */}
                        <span
                          onClick={() => {handleDone(task.id, task.done);}}
                        >
                          {circleIcon((task.dueDate < dueDate && task.dueDate !== null) ? " hover:fill-red-500":"hover:fill-[#54A1EA]")}
                        </span>
                       {/* // * Handle changes when edited from paragraphs to input */}
                      {taskEdit === task ? (
                        <>
                          <input
                            type="text"
                            className="outline-none bg-[#3d3d3d] bg-opacity-50 flex break-all flex-1 text-sm md:text-base xl:text-lg text-justify"
                            placeholder="New Task"
                            defaultValue={task.title}
                            onChange={(event) => {setTaskTitle(event.target.value)}}
                          />
                          <button
                            onClick={() => {handleSave(task.id);}}
                          >
                            {saveIcon()}
                          </button>
                        </>
                      ) : (
                        <>
                        <div className={`${(task.dueDate < dueDate && task.dueDate !== null) && "text-red-500"} flex flex-col flex-1`}>
                          <p
                            className="flex break-all flex-1 text-sm md:text-base xl:text-lg text-justify"
                            onClick={() => {handleSubTaskPreview(task)}}
                          >
                            {task.done ? <s className="opacity-50">{task.title} </s> : task.title}
                          </p>
                          {task.dueDate !== null && 
                          <div className="flex justify-start gap-x-1 mt-1">
                            {calendarIcon(task.dueDate < dueDate ? "red-500":"white")}
                            <p className="text-[0.7rem] sm:text-xs flex flex-1">{`${generateDate(task.dueDate) === generateDate(dueDate) ? "Today" : (generateDate(dueDate+86400000)===generateDate(task.dueDate)?"Tomorrow":generateDate(task.dueDate))} | ${generateTime(task.dueDate)}  `}</p>
                          </div>}
                        </div>
                          
                          {/* // * Handle changes to starIcon Important */}
                          {!task.important ? (
                            <button
                              onClick={() => {handleImportant(task.id, task.important)}}
                            >
                              {starLineIcon()}
                            </button>
                          ) : (
                            <button
                              onClick={() => {handleImportant(task.id, task.important)}}
                            >
                              {starFullIcon()}
                            </button>
                          )}
                          {/* // * Handle button to edit rename task */}
                          <button
                            onClick={() => {handleEdit(task)}}
                          >
                            {renameIcon()}
                          </button>
                          {/* // * Handle button to delete task */}
                          <button
                            onClick={() => {handleDelete(task.id)}}
                          >
                            {trashIcon()}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )
            )}

    {/* // ! FINISHED SECTION   */}
      {/* // * The logic is that finished will appear if one of the task done is true */}
            {filteredTasks.some((task) => {
              return task.done === true;
            }) && (
              <div
                onClick={() => {dropDownFinished? setDropDownFinished(false): setDropDownFinished(true)}}
                className="flex items-center gap-1 bg-[#424242] hover:opacity-80 w-fit pl-[0.6vw] pr-[1vw] py-[0.3vh] cursor-pointer my-[1.7vh]"
              >
                <span>
                  {arrowIcon()}
                </span>
                <p className="text-sm font-medium md:text-base xl:text-lg">
                  Finished
                </p>
              </div>
            )}

    {/* // ! TASK LIST DONE SECTION */}
            {/* // * div to loop through the created task list * */}
            {filteredTasks.map(
              (task) =>
                task.done && (
                  <div
                    key={task.id}
                    className={`${dropDownFinished ? "flex" : "hidden"} bg-[#424242] hover:opacity-80 duration-200 p-[1.4vh] cursor-pointer mb-[1.47vh] `}
                  >
                    <div className="flex flex-1 items-center justify-center mx-[1vw] gap-3">
                      {/* // * Handle changes to the icon done checklist */}
                        <span
                          onClick={() => {handleDone(task.id, task.done);}}
                        >
                          {circleCheckIcon("")}
                        </span>
                      {/* // * Handle input changes when in edit mode */}
                      {taskEdit === task ? (
                        <>
                          <input
                            type="text"
                            className="outline-none bg-[#3d3d3d] bg-opacity-50 flex break-all flex-1 text-sm md:text-base xl:text-lg text-justify"
                            placeholder="New Task"
                            defaultValue={task.title}
                            onChange={(event) => {setTaskTitle(event.target.value);}}
                          />
                          <button
                            onClick={() => {handleSave(task.id);}}
                          >
                            {saveIcon()}
                          </button>
                        </>
                      ) : (
                        <>
                          <p
                            className="flex break-all flex-1 text-sm md:text-base xl:text-lg text-justify"
                            onClick={() => {handleSubTaskPreview(task);}}
                          >
                            {task.done ? <s className="opacity-50">{task.title} </s> : task.title}
                          </p>
                          {/* //* Handle icon important changes */}
                          {!task.important ? (
                            <button
                              onClick={() => {handleImportant(task.id, task.important);}}
                            >
                              {starLineIcon()}
                            </button>
                          ) : (
                            <button
                              onClick={() => {handleImportant(task.id, task.important);}}
                            >
                              {starFullIcon()}
                            </button>
                          )}
                          {/* //* Handle edit mode */}
                          <button
                            onClick={() => {handleEdit(task);}}
                            >
                            {renameIcon()}
                          </button>
                          {/* //* Handle delete mode */}
                          <button
                            onClick={() => {handleDelete(task.id);}}
                          >
                            {trashIcon()}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>

    {/* // ! ADD NEW TASK SECTION  */}
          <div
            className={`${(taskEdit.id !== "" && taskEdit.title !== "") && "cursor-not-allowed"} bg-[#424242] opacity-100 flex p-[1.5vh] hover:opacity-80 `}
            onClick={() => {!addTaskInputShow && setAddTaskInputShow(true);}}
          >
            <div className="flex flex-1 px-[1.5vw] gap-4">
              <div className="m-auto">
                {addTaskInputShow && taskEdit.id === "" && taskEdit.title === "" ? circleIcon("")
                  :
                  plusIcon(`rotate-0 cursor-${taskEdit.id !== "" && taskEdit.title !== "" ? "not-allowed" : "default"}`)}
              </div>
              <input
                className={`${
                  taskEdit.id !== "" &&
                  taskEdit.title !== "" &&
                  "caret-transparent cursor-not-allowed"
                } flex-1 outline-none w-[8vw] font-medium text-sm md:text-base xl:text-lg bg-transparent placeholder:text-white placeholder:opacity-70`}
                placeholder="Add New Task"
                value={taskEdit.id === "" && taskEdit.title === "" ? taskTitle : ""}
                onChange={(event) => {setTaskTitle(event.target.value);}}
              />
              {addTaskInputShow &&
                taskEdit.id === "" &&
                taskEdit.title === "" && (
                  // TODO ? it's better when the user presses input then setEdit is filled with blank
                  <div
                    className="m-auto cursor-pointer"
                    onClick={() => {addTask();}}
                  >
                    {taskTitle === "" ? plusIcon("rotate-45 hover:opacity-100") : checkIcon()}
                  </div>
                )}
            </div>
          </div>
        </div>

    {/* // ! STEP PREVIEW SECTION */}
         {stepPreview && <SubTask menu="projects" projectId={projectId} design={stepPreview?"flex":"hidden"} taskData={stepTaskPreview} setTaskData={setStepTaskPreview} allData={tasks} setAllData={setTasks} filteredTasks={filteredTasks} setFilteredTasks={setFilteredTasks} subtaskPreview={setStepPreview}/>}
      </div>
    </Layout>
  </>
);
}

export async function getServerSideProps(ctx: any) {
  // Get username from cookie
  const username = ctx.req.headers.cookie.split("=")[0];
  
  // Get datas from database
  const data = await getUserData(username);
  
  // Get user data
  const name = data.name;
  const userData = {username: username, name: name}

  // Projects Title & ID (Left Nav Bar)
  const projectsTitleId = data.projects.map( (project: typePageData ) => { return {id: project.id, title: project.title} })

  // Get chosen project data
  const projectId = ctx.query.projectId;
  const [ pageData ] = data.projects.filter( (project: typePageData ) => { return project.id === projectId });

  return {
    props: { userData, projectsTitleId, pageData }
  }
}
