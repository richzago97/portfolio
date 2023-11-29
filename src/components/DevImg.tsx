import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }: any) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Profile Image"></Image>
    </div>
  );
};

export default DevImg;
