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

export default function Layout({ userData, projectsTitleId, children }: { userData: typeUserData, projectsTitleId: typeProjectsTitleId[], children: any }) {
  return (
    <>
      <Header />
      <div className="flex h-[94vh] md:h-[90.5vh]">
        <div className={`flex flex-auto max-h-full`}>
          <NavbarMenu userData={userData} projectsTitleId={projectsTitleId} />
          {children}
        </div>
      </div>
    </>
  );
}
