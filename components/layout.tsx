export default function Layout(props: any) {
  return (
    <div className="h-screen flex max-h-full">
      <div className="m-auto">{props.children} </div>
    </div>
  );
}
