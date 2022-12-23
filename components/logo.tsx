import Image from "next/image";
export default function Logo() {
  return (
    <div className="relative m-auto w-96 h-96">
      <Image
        src={"/logo-app.png"}
        layout="fill"
        alt="gambar"
        className="rounded-full"
      ></Image>
    </div>
  );
}
