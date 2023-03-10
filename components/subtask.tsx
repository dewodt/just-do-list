import axios from "axios";
import { useEffect, useState } from "react";
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css"; 

interface SubtaskInterface {
  menu: string;
  projectId: string;
  taskData: any;
  setTaskData: any;
  filteredTasks: any;
  setFilteredTasks: any;
  subtaskPreview: React.Dispatch<React.SetStateAction<boolean>>;
  design: string;
  allData: any;
  setAllData: any;
}

export default function SubTask( { menu, projectId, taskData, subtaskPreview, setTaskData, filteredTasks, setFilteredTasks, design, allData, setAllData }: SubtaskInterface ) {
  // Khusus bagian icon
  const plusIcon = (design: string) => {
    return (
      <svg
        className={`${design} fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto cursor-pointer hover:opacity-100`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    );
  };

  const checkIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] hover:opacity-100"
        viewBox="0 0 512 512"
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const circleCheckIcon = () => {
    return (  
      <svg
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const circleIcon = (colorHover: string) => {
    return (
      <svg
        className={`fill-white opacity-80 w-[1.5vh] sm:w-[2vh] hover:fill-[${colorHover}]`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const trashIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  const calendarIcon = (design : string) => {
    return (
      <svg
        className={`${design} fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
      </svg>
    );
  };

  const crossIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white opacity-80 w-[2vh] sm:w-[3vh] h-[2vh] sm:h-[3vh] m-auto"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
      </svg>
    );
  };

  const saveIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
      </svg>
    );
  };

  const renameIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.5vh] sm:w-[2vh] h-[1.5vh] sm:h-[2vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
      </svg>
    );
  };

  // Bagian variabel program
  const [addStepInputShow, setAddStepInputShow] = useState(false);
  const [dueDatePreview, setDueDatePreview] = useState(false);
  type ObjectStep = {
    title: string;
    id: string;
    done: boolean;
  };
  const uniqid = require("uniqid"); // Ini buat generate id dari npm
  const [calendarStatus, setCalendarStatus] = useState(false);
  const [dueDate, setDueDate] = useState<number | null>(taskData.dueDate);
  const [stepTitle, setStepTitle] = useState(""); // isinya adalah status value input
  const [steps, setSteps] = useState<ObjectStep[]>(taskData.subtask); // Isinya adalah subtask atau kumpulan data step
  const [stepEdit, setStepEdit] = useState<ObjectStep>({
    // isinya adalah step yang lagi di rename/diedit
    title: "",
    id: "",
    done: false,
  });
  const [dueDateNow, setDueDateNow] = useState (new Date().valueOf());

  useEffect(() => {
    const interval = setInterval(() => {
      setDueDateNow(new Date().valueOf());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Buat nambahin subtask/step baru
  function addStep() {
    const newStep = { 
      id: uniqid("step_"),
      title: stepTitle,
      done: false 
    };
    if (addStepInputShow && stepTitle !== "") {
      // Edit DB
      axios.post("/api/addstep", {
        menu: menu,
        projectId: projectId,
        taskId: taskData.id,
        newStep: newStep
      })
        .then( () => {
          // New Steps
          const newSteps = [...steps, newStep];
          // New Task
          const newTask = {...taskData, subtask:newSteps};
          // New Tasks
          const newTasks = allData.map( (item:any) => {
            if (item.id === taskData.id) {
              return {...item, subtask: newSteps};
            } else {
              return {...item};
            }
          })
          // New Filtered Tasks
          const newFilteredTasks = filteredTasks.map( (item:any) => {
            if (item.id === taskData.id) {
              return {...item, subtask: newSteps};
            } else {
              return {...item};
            }
          })

          // Update client-sde
          setStepEdit({ id: "", title: "", done: false });
          setSteps(newSteps);
          setAllData(newTasks);
          setFilteredTasks(newFilteredTasks);
          setTaskData(newTask);
        });
      }
      setAddStepInputShow(!addStepInputShow);
      setStepTitle("");
   }
  
  // Buat hapus subtask tertentu
  function handleDelete(stepId: string) {
    // Update database
    axios.post("/api/deletestep", {
      menu: menu,
      projectId: projectId,
      taskId: taskData.id,
      stepId: stepId,
    })
      .then( () => {
        // New Tasks, Steps, and Task
        const newSteps = steps.filter((step) => { return step.id !== stepId;});
        const newTask = {...taskData, subtask: newSteps};
        const newTasks = allData.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, subtask: newSteps};
          } else {
            return {...item};
          }
        });
        const newFilteredTasks = filteredTasks.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, subtask: newSteps};
          } else {
            return {...item};
          }
        });

        // Update Client Side
        setSteps(newSteps);
        setAllData(newTasks);
        setFilteredTasks(newFilteredTasks);
        setTaskData(newTask);
      });
  }

  // Buat set mana task yang lagi diedit
  function handleEdit(task: { title: string; id: string; done: boolean }) {
    setStepEdit(task);
    setAddStepInputShow(false);
    setStepTitle(task.title);
  }

  // Buat save abis diedit
  function handleSave(stepId: string) {
    // Update database
    axios.post("/api/editstep", { 
      menu: menu,
      projectId: projectId,
      taskId: taskData.id,
      stepId: stepId,
      newStepTitle: stepTitle === "" ? "New Step" : stepTitle
    })
      .then( () => {
        // New Steps, New Tasks, and New Task
        const newSteps = steps.map( (item) => {
          if (item.id === stepId) {
            return {...item, title: stepTitle === "" ? "New Step" : stepTitle};
          } else {
            return {...item};
          }
        });
        const newTask = {...taskData, subtask: newSteps};
        const newTasks = allData.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, subtask: newSteps};
          } else {
            return {...item};
          }
        });
        const newFilteredTasks = filteredTasks.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, subtask: newSteps};
          } else {
            return {...item};
          }
        })
        
        // Update client side
        setSteps(newSteps);
        setStepEdit({ id: "", title: "", done: false });
        setStepTitle("");
        setAddStepInputShow(false);
        setAllData(newTasks);
        setFilteredTasks(newFilteredTasks);
        setTaskData(newTask);
      });
  }

  // Buat ganti status done
  function handleDone(stepId: string, stepDone: boolean) {
    // Update database
    axios.post("/api/donestep", { 
      menu: menu,
      projectId: projectId,
      taskId: taskData.id,
      stepId: stepId,
      stepDone: !stepDone
    })
      .then( () => {
        // New steps, tasks, and task.
        const newSteps = steps.map( (step) => {
          if (step.id === stepId) {
            return {...step, done: !step.done};
            } else {
              return {...step};
            }
        });
        const newTask = {...taskData, subtask: newSteps};
        const newTasks = allData.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, subtask: newSteps};
          } else {
            return {...item};
          }
        });
        const newFilteredTasks = filteredTasks.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, subtask: newSteps};
          } else {
            return {...item};
          }
        });

        // Update client side
        setSteps(newSteps);
        setAllData(newTasks);
        setFilteredTasks(newFilteredTasks);
        setTaskData(newTask);
      });
  }
  
  function handleDueDate(type: string) {
    // Different types of handling
    let newDueDate = dueDate;
    if (type === "today") {
      newDueDate = (new Date()).setHours(23,59,59,0);
    } else if (type === "tomorrow") {
      newDueDate = (new Date()).setHours(23,59,59,0) + 86400000;
    } else if (type === "reset") {
      newDueDate = null;
    }
    // Update database
    axios.post("/api/editduedate", {
      menu: menu,
      projectId: projectId,
      taskId: taskData.id,
      newDueDate: newDueDate,
    })
      .then( () => {
        // New tasks and task
        const updateData = {...taskData, dueDate: newDueDate};
        const newTasks = allData.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, dueDate: newDueDate};
          } else {
            return {...item};
          }
        });
        const newFilteredTasks = filteredTasks.map( (item:any) => {
          if (item.id === taskData.id) {
            return {...item, dueDate: newDueDate};
          } else {
            return {...item};
          }
        });

        // Update Client Side
        setDueDate(newDueDate);
        setFilteredTasks(newFilteredTasks);
        setAllData(newTasks);
        setTaskData(updateData);
        setDueDatePreview(false);
        setCalendarStatus(false);  
      })
  }
  
  // * to convert from dueDate number format to a date string
  const generateDate = (dateData:number) => {
    return (new Date(dateData)).toLocaleDateString("en-UK", {
      weekday:"short",
      day: "numeric",
      month: "short",
      year: "2-digit",
    })};

  // * to convert from dueDate number format to a time string
  const generateTime = (dateData:number) => {
    return (new Date(dateData)).toLocaleTimeString("en-UK", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className={`${design} flex-col w-full absolute right-0 lg:relative h-[94vh] md:h-[90.5vh] z-10 lg:w-[24.4375vw] bg-[#323232]`}>
      <div className="flex flex-col flex-1 p-[2.421vh] gap-3">
        <div className="bg-[#424242] overflow-y-scroll" id="no-scrollbar">
          <div className="flex flex-col m-[3vh] gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[2vh] sm:text-[2.9vh] font-semibold break-all mr-1.5">
                {taskData.title}
              </p>
              <button
                onClick={() => {
                  subtaskPreview(false);

                }}
              >
                {crossIcon()}
              </button>
            </div>
            <div
              className="flex flex-col max-h-[53vh] lg:max-h-[51vh] gap-2.5 overflow-y-scroll"
              id="no-scrollbar"
            >
              {steps.map((step) => (
                <div key={step.id} className="flex w-full gap-3 items-center">
                  {step.done ? (
                    <span
                      className="m-auto"
                      onClick={() => {
                        handleDone(step.id, step.done);
                      }}
                    >
                      {circleCheckIcon()}
                    </span>
                  ) : (
                    <span
                      className="m-auto"
                      onClick={() => {
                        handleDone(step.id, step.done);
                      }}
                    >
                      {circleIcon("#54A1EA")}
                    </span>
                  )}

                  {stepEdit === step ? (
                    <>
                      <input
                        type="text"
                        placeholder="New Step"
                        defaultValue={step.title}
                        onChange={(event) => {
                          setStepTitle(event.target.value);
                        }}
                        className="flex w-full text-[1.4vh] sm:text-[2.2vh] border-b-2 outline-none bg-[#4a4a4a]"
                      ></input>
                      <button
                        onClick={() => {
                          handleSave(step.id);
                        }}
                      >
                        {saveIcon()}
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="flex flex-1 text-[1.4vh] sm:text-[2.2vh] border-b-2 break-all">
                        {step.done ? (
                          <s className="opacity-50">{step.title}</s>
                        ) : (
                          <>{step.title}</>
                        )}
                      </p>
                      <button
                        onClick={() => {
                          handleEdit(step);
                        }}
                      >
                        {renameIcon()}
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(step.id);
                        }}
                      >
                        {trashIcon()}
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* // ! ADD STEP SECTION */}
            <div
              className={`${
                stepEdit.id !== "" &&
                stepEdit.title !== "" &&
                "cursor-not-allowed"
              } mt-1 flex gap-3 hover:bg-[##323232]`}
              onClick={() => {
                !addStepInputShow && setAddStepInputShow(true);
              }}
            >
              <div className="m-auto">
                {addStepInputShow && stepEdit.id === "" && stepEdit.title === ""
                  ? circleIcon("none")
                  : plusIcon(
                      `rotate-0 cursor-${
                        stepEdit.id !== "" && stepEdit.title !== ""
                          ? "not-allowed"
                          : "default"
                      }`
                    )}
              </div>

              <input
                className={`${
                  stepEdit.id !== "" &&
                  stepEdit.title !== "" &&
                  "caret-transparent cursor-not-allowed"
                } flex-1 outline-none w-[3vw] bg-transparent font-medium text-[1.4vh] sm:text-[2.2vh] placeholder:text-white placeholder:opacity-70`}
                placeholder="Add New Step"
                value={
                  stepEdit.id === "" && stepEdit.title === "" ? stepTitle : ""
                }
                onChange={(event) => {
                  setStepTitle(event.target.value);
                }}
              />
              {addStepInputShow &&
                stepEdit.id === "" &&
                stepEdit.title === "" && (
                  <button
                    className="m-auto cursor-pointer"
                    onClick={() => {
                      addStep();
                    }}
                  >
                    {stepTitle === ""
                      ? plusIcon("rotate-45 hover:opacity-100")
                      : checkIcon()}
                  </button>
                )}
            </div>
          </div>
        </div>
        <div
          className="bg-[#424242] px-2.5 py-2 relative flex justify-start calendar hover:bg-[#4b4b4b]"
          
        >
        <div
            className={`${
              dueDatePreview ? "flex" : "hidden"
            } flex-col flex-1 text-sm absolute z-20 min-w-[50vw] lg:min-w-[12vw] sm:min-w-[30vw] bg-[#313131]`}>
            {/* // TODO: set due date */}
            {calendarStatus ? (
              <>
              <div className="flex flex-col text-center cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] text-white">
                <div className="text-black">
                  {/* // ? Ini kenapakah padahal masih jalan aja pas gw debug */}
                  <Datetime onClose={()=>{handleDueDate("custom")}} closeOnSelect={true} onChange={(date)=>{typeof date !== "string" && setDueDate(date.valueOf())}}  inputProps={{ className: "text-white outline-none bg-transparent text-center ", placeholder:"Click To Set" }} />
                </div>
              </div>
              </>
            ) : (
              <div className="flex flex-col text-center">
                <div onClick={()=>{setDueDatePreview(false)}} className="hover:bg-[#4b4b4b] cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] ">
                  {plusIcon("rotate-45")}
                </div>
                <div onClick={()=>{handleDueDate("today")}} className="hover:bg-[#4b4b4b] cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] ">
                  Today
                </div>
                <div onClick={() => {handleDueDate("tomorrow")}} className="hover:bg-[#4b4b4b] cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] ">
                  Tomorrow
                </div>
                <div
                  onClick={() => {
                    setCalendarStatus(true);
                  }}
                  className="hover:bg-[#4b4b4b] cursor-pointer px-[1.8vh] sm:px-[2.6vh] py-[1.3vh] md:py-[2vh] text-[1.4vh] sm:text-[2.2vh] "
                >
                  Set Due Date
                </div>
              </div>
            )}
          </div>
          <div className="flex p-[0.5vh] sm:p-[1vh] gap-4 justify-around items-center">
            <div>{calendarIcon(taskData.dueDate !== null ? (taskData.dueDate < dueDateNow ? "fill-red-500" : "fill-[#6cb0ef]"):"")}</div>
            <p onClick={() => {
            !dueDatePreview && setDueDatePreview(true);
          }} className={`${taskData.dueDate !== null && (taskData.dueDate < dueDateNow ? "text-red-500" : "text-[#6cb0ef]")} flex-1 cursor-pointer text-[1.4vh] text-center sm:text-[2vh]`}>
              {taskData.dueDate === null ? "Add Due Date" : generateDate(taskData.dueDate) + " " + "|" + " " + generateTime(taskData.dueDate)}
            </p>
            {taskData.dueDate !== null && (<button onClick={()=>{handleDueDate("reset")}}>{plusIcon((taskData.dueDate < dueDateNow ? "fill-red-500 rotate-45" : "fill-[#6cb0ef] rotate-45"))}</button>)}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[3vh]">
        <p className="text-[1.4vh] sm:text-[2.2vh] font-medium text-center mx-7">
          {`Created at ${(new Date(taskData.createdDate)).toLocaleString("en-UK", {weekday:"short",
            day: "numeric",
            month: "short",
            year: "numeric", 
          })}`}
        </p>
      </div>
    </div>
  );
}
