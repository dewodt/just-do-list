import { useState } from "react";

export default function Projects() {
  const [dropDownProjects, setDropDownProjects] = useState(false);

  const [lists, setLists] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("New List");

  const addList = (newList: string) => {
    setLists([...lists, newList]);
    setInputValue("New List");
  };

  const listIcon = () => {
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

  return (
    <div className="flex flex-col flex-1  overflow-y-scroll">
      <div
        
        className=" bg-[#464449] hover:bg-[#4D4B52] bg-opacity-50  gap-1 my-2 mx-10 indent-4 rounded-[0.8rem] text-[0.87rem] overflow-auto"
      >
        <div className=" rounded-[0.3rem] hover:bg-[#4D4B52] flex cursor-pointer h-[2rem] my-1" role="button"
        onClick={() => {
          dropDownProjects
            ? setDropDownProjects(false)
            : setDropDownProjects(true);
        }}>
          <div className="ml-4 py-1.5 ">
            {dropDownProjects ? (
              <svg
                className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
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
          <div className="text-[0.7rem] font-semibold flex-1 m-auto">
            PROJECTS
          </div>
        </div>
        {dropDownProjects && (
          <div
            //  {/*Ini gabisa mgentot */}
            className="mb-2"
          >
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <div
              role="button"
              className="mx-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-[0.3rem] flex cursor-pointer"
              onClick={() => {
                addList(inputValue);
              }}
            >
              <div className="flex-1 m-auto ml-4 text-[0.67rem]">
                Add New Project
              </div>
              <div className="mr-4 py-1.5 ">
                <svg
                  className="fill-white opacity-80 w-[1rem] h-[1rem] m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </div>
            </div>
            {/* New List when clicking */}
            {lists.map((list) => (
              <>
                <li className="ml-4 mr-2 flex py-0.5 text-xs text-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 rounded-[3px] ">
                  <div className="ml-4 py-1.5">{listIcon()}</div>
                  <div className="my-auto">
                    <a href="/">{list}</a>
                  </div>
                </li>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
