import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl text-red-700">
      <Image
        src="https://carpassion.vn/wp-content/uploads/2024/01/PORSCHE_911GTS_DKIMG_0920.jpg"
        width={1000}
        height={1000}
        alt="lat mat 8"
      />
      <Image
        src={"/images/rollroy.jpg"}
        width={1000}
        height={1000}
        alt="rollroy"
      />
    </div>
  );
}
