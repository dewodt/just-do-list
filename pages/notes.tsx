import axios from "axios";
import { useState } from "react";
import Layout from "../components/layout";
import getUserData from "../lib/getUserData";

export default function Notes({ data } : any) {
  const notesIcon = () => {
    return (
      <svg
        className="fill-white w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    );
  };

  const backIcon = () => {
    return (
      <div
        role="button"
        className="flex items-center justify-center hover:scale-[1.15] duration-100 ease-in-out rounded-full w-[4vh] sm:w-[6vh] h-[4vh] sm:h-[6vh]"
      >
        <svg
          className="fill-white opacity-80 w-[2.5vh] sm:w-[4.2vh] h-[2.5vh] sm:h-[4.2vh] m-auto hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </div>
    );
  };

  const checkIcon = () => {
    return (
      <div
        role="button"
        className="ml-auto items-center justify-center hover:scale-[1.15] right-0 duration-100 ease-in-out rounded-full w-[4vh] sm:w-[6vh] h-[4vh] sm:h-[6vh] mt-1"
      >
        <svg
          className="fill-white opacity-80 w-[2.5vh] sm:w-[4.2vh] h-[2.5vh] sm:h-[4.2vh] m-auto hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </div>
    );
  };

  const plusIcon = (rotate: string) => {
    return (
      <svg
        className={`${rotate}  ${
          rotate === "rotate-45" && "hover:scale-[1.15]"
        } items-center justify-center fill-white duration-100 ease-in-out w-[3vh] sm:w-[4.7vh] h-[3vh] sm:h-[4.7vh]`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    );
  };

  const saveIcon = () => {
    return (
      <svg
        className=" fill-white hover:scale-[1.15] duration-100 ease-in-out w-[2.2vh] sm:w-[3.4vh] h-[2.2vh] sm:h-[3.4vh]"
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
      </svg>
    );
  };

  const trashIcon = () => {
    return (
      <svg
        className="fill-white hover:scale-[1.15] duration-100 ease-in-out w-[2vh] sm:w-[3.2vh] h-[2vh] sm:h-[3.2vh]"
        xmlns="http:// * www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  type Objectnote = {
    title: string;
    id: string;
    description: string;
    dateCreated: number | null;
  };

  // ! I've tidied the lines, don't use automation from prettier to make tidier
  // *  VARIABLE INITIALIZATION

  const uniqid = require("uniqid");                                         // * to generate id from npm
  const [subNotesPreviewMode, setSubNotesPreviewMode] = useState("back");   // * to popUp editing field or add new notes

  // ? Entah kenapa gw nemuin bug gegara pas mode edit gw ambil data yang diedit buat ditampilin pas subnotespreview mode edit
  // ? Abis itu pas disave kan harusnya gw otak atik dateNow ga masalah kan buat gw set date now pas ngeklik save tapi entah kenapa ga kesave

  const [title, setTitle] = useState("");                         // * to track changes in inputs title and data sets title
  const [description, setDescription] = useState("");             // * to track changes in inputs title and data sets description
  const [notes, setNotes] = useState<Objectnote[]>(data.notes);   // TODO : notes dataset should be saved to the database     
  const [noteEdit, setNoteEdit] = useState<Objectnote>({          // * contains the notes that is being edited
    title: "",
    id: "",
    description: "",
    dateCreated: null,
  });

  // * to convert from dateCreated number format to date string
  const generateDateNow = () => {
    return (new Date()).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    };

  // * to convert from dateCreated number format to a time string
  const generateTimeNow = () => {
    return (new Date()).toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  // * function to add new notes
  function addNotes() {
    // New Note
    const newNote = {
      id: uniqid("note_"),
      title: title,
      description: description,
      dateCreated: Date.now()
    }
    if (title && description) {
      // Call api utk edit database
      axios.post("http://localhost:3000/api/addnote", {
        username: data.username, 
        newNote: newNote
      })
        .then( () => {
          // Update client-side
          setNotes([...notes, newNote]);
        });
    }
    setTitle("");
    setDescription("");
    setSubNotesPreviewMode("back");
  }

  // * function to return to the main display mode without making changes
  function backMenuNote() {
    setTitle("");
    setDescription("");
    setSubNotesPreviewMode("back");
  }

  // * function when clicking the add button which will set the time state
  function handleNewNotesPreview() {
    setSubNotesPreviewMode("add");
  }

  // * function to set which note is being edited
  function handleEdit(note: {
    title: string;
    id: string;
    description: string;
    dateCreated: number | null;
  }) {
    // taking specific data and set to state
    setNoteEdit(note);
    setTitle(note.title);
    setDescription(note.description);
    setSubNotesPreviewMode("edit");
  }

  // * function to handle delete note that edited
  function handleDelete(noteId: string) {
    // Edit database
    axios.post("http://localhost:3000/api/deletenote", {
      username: data.username,
      noteId: noteId
    })
      .then( () => {
        // Update client side
          setNotes(notes.filter( (note) => { return note.id !== noteId;}));
          setTitle("");
          setDescription("");
          setSubNotesPreviewMode("back");
        });
  }

  // *  to save changes after editing
  function handleSave(noteId: string) {
    const updateIndex = notes.findIndex((note) => { return note.id === noteEdit.id; });
    // to handle note's date that actually change
    if (title !== notes[updateIndex].title || description !== notes[updateIndex].description) {
      axios.post("http://localhost:3000/api/editnote", {
        username: data.username, 
        noteId: noteId,
        newTitle: title,
        newDesc: description,
        newDate: Date.now()
      })
        .then( () => { 
          // Edit client-side
          // Create new array (no mutation)
          const newNotes = notes.map( (note) => {
            if (note.id === noteId) {
              return {...note, title: title, description: description, dateCreated: Date.now()}
            } else {
              return {...note}
            }
          })
          setNotes(newNotes);
        })
    }
    setNoteEdit({ id: "", title: "", description: "", dateCreated: null });
    setTitle("");
    setDescription("");
    setSubNotesPreviewMode("back");
  }

  return (
    <>
      <Layout name={data.name} username={data.username}>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 pt-[2vh] lg:px-[3.8vh] lg:pt-[3.8vh] px-[3.4vh] ">

            {/* // ! HEADER NOTES SECTION */}
            <div className="flex  items-center gap-x-2">
              <span>{notesIcon()}</span>
              <p className="font-semibold text-[2.5vh] sm:text-[3.8vh]">
                Notes{" "}
              </p>
            </div>

            {/* // ! MAPPING DATASET NOTES SECTION */}
            <div
              className="notes grid min-[250px]:grid-cols-2 xl:grid-cols-3 mt-8 overflow-y-scroll m-auto gap-x-[8.71vw] gap-y-[2.97vh] xl:gap-x-[4.31vw] sm:gap-y-[6vh]"
              id="no-scrollbar"
            >
              {notes.map((note) => (
                <>
                  <div
                    role="button"
                    onClick={() => {handleEdit(note);}}
                    className="flex bg-[#424242] rounded-[10px] sm:rounded-[20px] h-[17.83vh] w-[50.411vw] min-[250px]:h-[20.83vh] min-[250px]:w-[30.411vw] lg:w-[20.83vw] sm:h-[30.411vh] hover:opacity-80 px-[2vw] py-[1.8vh] cursor-pointer "
                  >
                    <div className="flex flex-col flex-1 justify-center my-[0.9vh] mx-[2vw] sm:my-[1.6vh] sm:mx-[1.3vw]">
                      <p className="font-semibold mb-auto text-[2vh] sm:text-[2.9vh] break-all line-clamp-1  lg:mt-1">
                        {note.title}
                      </p>
                      <p className="flex break-all text-[1.3vh] sm:text-[2.1vh] text-justify text-[#CECECE] line-clamp-3">
                        {note.description}
                      </p>
                      <p className="mt-auto text-[1vh] sm:text-[1.6vh] text-[#CECECE]">
                        {generateDateNow()}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* // ! Add Blue Button */}
          <button
            onClick={() => {handleNewNotesPreview();}}
            className="flex items-center justify-center bg-blue-400 hover:scale-[1.15] duration-300 ease-in-out absolute sm:bottom-[6vh] sm:right-[4vw] bottom-[4vh] right-[10vw] rounded-full w-[4.5vh] sm:w-[7vh] h-[4.5vh] sm:h-[7vh]"
          >
            {plusIcon("rotate-0")}
          </button>
        </div>

        {/* // ! NOTESPREVIEW SECTION */}
        {(subNotesPreviewMode == "add" || subNotesPreviewMode === "edit") && (
          <>
            <div className="flex flex-col w-[100vw] lg:w-[81vw] right-0  absolute z-10 bg-[#323232]  h-[94vh] md:h-[90.5vh]">
              <div className="flex flex-col  flex-1 mx-4 pt-[1vh] lg:px-[3.8vh] px-[3.4vh] gap-y-[1.6vh] sm:gap-y-[2.2vh]">
                <div className="flex flex-center mt-2">
                  {/* //* Back Button */}
                  <button
                    onClick={() => {backMenuNote();}}
                  >
                    {backIcon()}
                  </button>

                  <div className="ml-auto flex gap-x-[4vh]">
                  {/* // * Delete Button if in edit mode */}
                    {subNotesPreviewMode === "edit" && (
                      <button
                        onClick={() => {handleDelete(noteEdit.id);}}
                      >
                        {trashIcon()}
                      </button>
                    )}
                  {/* //* Cross Button if empty input, Save Button in edit mode, and Add Button in add mode  */}
                    <button
                      className="ml-auto"
                      onClick={() => {subNotesPreviewMode === "add" ? addNotes() : handleSave(noteEdit.id);}}
                    >
                      {title === "" || description === "" ? plusIcon("rotate-45")
                        : subNotesPreviewMode === "edit"  ? saveIcon()
                        : checkIcon()}
                    </button>
                  </div>
                </div>

                {/* // ! TITLE SUBNOTES SECTION */}
                <div className="flex items-center gap-x-3 mt-1">
                  <input
                    className="font-semibold text-[2vh] sm:text-[2.9vh] w-full bg-transparent outline-none"
                    onChange={(event) => {setTitle(event.target.value);}}
                    value={title}
                    type="text"
                    placeholder="Title"
                  />
                </div>
                {/* // ! TIME SUBNOTES SECTION */}
                <p className="text-[1.7vh] sm:text-[2.2vh] mt-1 sm:mt-2 text-slate-300">
                  {/* Date */}
                  {generateDateNow()}
                  {/* Time */}
                  <span className="ml-1">
                    {"|"} {generateTimeNow()}
                  </span>
                </p>
                {/* // ! DESCRIPTION SUBNOTES SECTION */}
                <div className="flex flex-1 items-start mb-[4vh]">
                  <textarea
                    id="descriptionInput"
                    value={description}
                    onChange={(event) => {setDescription(event.target.value);}}
                    className="flex-1 h-full items-start break-all overflow-y-visible outline-none bg-transparent text-[1.4vh] sm:text-[2.1vh]"
                    placeholder="Start Typing....."
                  ></textarea>
                </div>
              </div>
            </div>
          </>
        )}
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