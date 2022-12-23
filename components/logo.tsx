import Image from "next/image";
export default function Logo() {
  return (
    <div className="relative my-3 w-96 h-60">
      <Image
        src={"/logo-app.png"}
        layout="fill"
        alt="gambar"
        className="rounded-full"
      ></Image>
    </div>
  );
}
