import Image from "next/image";

const MountainHeader = ({ title, borderClass }: { title?: string; borderClass?: string }) => {
  return (
    <div className="flex items-center gap-2 pb-4">
      <h2 className="jakarta text-[1rem] ">{title}</h2>
      {/* <div
        className="border-b-2 border-[#2A78A6] rounded-full w-10"
      ></div> */}
      <div
        className={
          borderClass ?? "border-b-2 border-[#2A78A6] rounded-full w-10"
        }
      ></div>
      <Image
        src="/images/icons/765737_09 1.png"
        alt="Mountain logo"
        width={105}
        height={35}
      />
    </div>
  );
};

export default MountainHeader;
