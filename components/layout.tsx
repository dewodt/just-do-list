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

export default function Layout({ userData, projectsTitleId, children, design }: { userData: typeUserData, projectsTitleId: typeProjectsTitleId[], children: any, design: boolean }) {
  return (
    <>
      <Header />
      <div className="flex h-[94vh] md:h-[90.5vh]">
        <div className={`flex flex-auto max-h-full`}>
          <NavbarMenu userData={userData} projectsTitleId={projectsTitleId} design={design}/>
          {children}
        </div>
      </div>
    </>
  );
}
