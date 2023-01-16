import Header from "./header";
import NavbarMenu from "./navbar-menu";

interface typeUserData {
  username: string;
  name: string;
}

interface typeProjectsTitleId {
  id: string;
  title: string;
}

interface typeLayout { 
  userData: typeUserData,
  projectsTitleId: typeProjectsTitleId[],
  search: string,
  handleResetSearch: any,
  handleSearch: any,
  children: any
}

export default function Layout({ userData, projectsTitleId, search, handleResetSearch, handleSearch, children }: typeLayout) {
  return (
    <>
      <Header search={search} handleResetSearch={handleResetSearch} handleSearch={handleSearch} />
      <div className="flex h-[94vh] md:h-[90.5vh]">
        <div className={`flex flex-auto max-h-full`}>
          <NavbarMenu userData={userData} projectsTitleId={projectsTitleId} />
          {children}
        </div>
      </div>
    </>
  );
}
