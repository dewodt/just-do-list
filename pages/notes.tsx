import { useState } from "react";
import Layout from "../components/layout";
import SubNotes from "../components/subnotes";
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
  // Khusus bagian variabel kerja
  const [subNotesPreview, setSubNotesPreview] = useState(false);

  return (
    <>
      <Layout name={data.name} username={data.username}>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 pt-[2vh] lg:px-[3.8vh] lg:pt-[3.8vh] px-[3.4vh] ">
            <div className="flex  items-center gap-x-2">
              <span>{notesIcon()}</span>
              <p className="font-semibold text-[2.5vh] sm:text-[3.8vh]">
                Notes{" "}
              </p>
            </div>
            <div
              className="flex flex-wrap justify-center mt-8 overflow-y-scroll gap-x-[8.71vw] gap-y-[2.97vh] xl:gap-x-[4.31vw] sm:gap-y-[6vh]"
              id="no-scrollbar"
            >
              <div
                role="button"
                onClick={() => {
                  subNotesPreview
                    ? setSubNotesPreview(false)
                    : setSubNotesPreview(true);
                }}
                className="flex bg-[#424242] rounded-[10px] sm:rounded-[20px] h-[20.83vh] w-[30.411vw] sm:w-[20.83vw] sm:h-[30.411vh] hover:opacity-80 px-[2vw] py-[1.8vh] cursor-pointer "
              >
                <div className="flex flex-col flex-1 justify-center my-[0.3vh] mx-[1.8vw] sm:my-[1.1vh] sm:mx-[1vw]">
                  <p className="font-semibold text-[2vh] sm:text-[2.9vh] lg:mb-[2vh] mb-[0.5vh] lg:mt-1">
                    Title
                  </p>
                  <p className="flex flex-1 break-all text-[1.3vh] sm:text-[2.1vh] text-justify text-[#CECECE] line-clamp-4">
                    addjlkajkaposdimaopdsinopasdinaopsidnopasidopiasndopiasdoias-do
                  </p>
                  <p className="text-[1.3vh] sm:text-[2.1vh] text-[#CECECE]">
                    Date Created
                  </p>
                </div>
              </div>
              <div
                role="button"
                onClick={() => {
                  subNotesPreview
                    ? setSubNotesPreview(false)
                    : setSubNotesPreview(true);
                }}
                className="flex bg-[#424242] rounded-[10px] sm:rounded-[20px] h-[20.83vh] w-[30.411vw] sm:w-[20.83vw] sm:h-[30.411vh] hover:opacity-80 px-[2vw] py-[1.8vh] cursor-pointer "
              >
                <div className="flex flex-col flex-1 justify-center my-[0.3vh] mx-[1.8vw] sm:my-[1.1vh] sm:mx-[1vw]">
                  <p className="font-semibold text-[2vh] sm:text-[2.9vh] lg:mb-[2vh] mb-[0.5vh] lg:mt-1">
                    Title
                  </p>
                  <p className="flex flex-1 break-all text-[1.3vh] sm:text-[2.1vh] text-justify text-[#CECECE] line-clamp-4">
                    addjlkajkaposdimaopdsinopasdinaopsidnopasidopiasndopiasdoias-do
                  </p>
                  <p className="text-[1.3vh] sm:text-[2.1vh] text-[#CECECE]">
                    Date Created
                  </p>
                </div>
              </div>
              <div
                role="button"
                onClick={() => {
                  subNotesPreview
                    ? setSubNotesPreview(false)
                    : setSubNotesPreview(true);
                }}
                className="flex bg-[#424242] rounded-[10px] sm:rounded-[20px] h-[20.83vh] w-[30.411vw] sm:w-[20.83vw] sm:h-[30.411vh] hover:opacity-80 px-[2vw] py-[1.8vh] cursor-pointer "
              >
                <div className="flex flex-col flex-1 justify-center my-[0.3vh] mx-[1.8vw] sm:my-[1.1vh] sm:mx-[1vw]">
                  <p className="font-semibold text-[2vh] sm:text-[2.9vh] lg:mb-[2vh] mb-[0.5vh] lg:mt-1">
                    Title
                  </p>
                  <p className="flex flex-1 break-all text-[1.3vh] sm:text-[2.1vh] text-justify text-[#CECECE] line-clamp-4">
                    addjlkajkaposdimaopdsinopasdinaopsidnopasidopiasndopiasdoias-do
                  </p>
                  <p className="text-[1.3vh] sm:text-[2.1vh] text-[#CECECE]">
                    Date Created
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span role="button" onClick={()=>{setSubNotesPreview(true)}} className="flex items-center justify-center bg-blue-400 hover:scale-[1.15] duration-300 ease-in-out absolute sm:bottom-[6vh] sm:right-[4vw] bottom-[4vh] right-[10vw] rounded-full w-[4.5vh] sm:w-[7vh] h-[4.5vh] sm:h-[7vh]">
            <svg
              className="fill-white opacity-80 w-[3.5vh] sm:w-[5vh] h-[3.5vh] sm:h-[5vh] m-auto hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </span>
        </div>
        {subNotesPreview && <SubNotes />}
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