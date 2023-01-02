import Header from "./header";
import NavbarMenu from "./navbar-menu";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <div className="flex h-[90.6vh]">
        <NavbarMenu />
        <div className={`flex flex-auto max-h-full`}>
          {props.children}
        </div>
      </div>
    </>
  );
}
