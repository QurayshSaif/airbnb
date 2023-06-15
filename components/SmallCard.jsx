import Image from "next/image";

export default function SmallCard({ img, location, distance }) {
  return (
    <>
      <div>
        <Image src={img} layout="fill" />
      </div>
    </>
  );
}
