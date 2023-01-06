import Header from "./header";
import NavbarMenu from "./navbar-menu";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <div className="flex h-[94vh] md:h-[90.5vh]">
        <div className={`flex flex-auto max-h-full`}>
          <NavbarMenu/>
          {props.children}
        </div>
      </div>
    </>
  );
}
