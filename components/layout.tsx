export default function Layout(props: any) {
  return (
    <div className="flex flex-auto max-h-full">
      <div className="m-auto">{props.children} </div>
    </div>
  );
}
