interface WhatWeDoSectionItemProps {
  title: string;
  text: string;
  image: string;
  imageWidth: number;
}

const WhatWeDoSectionItem: React.FC<WhatWeDoSectionItemProps> = ({
  title,
  text,
  image,
  imageWidth,
}) => {
  return (
    <div style={{ position: "relative", bottom: imageWidth == 30 ? 10 : 0 }} className="max-w-[350px] md:max-w-[420px] mx-auto">
      <figure className="flex justify-center opacity-75 mb-[10px]">
        <img style={{ width: imageWidth}} src={image} />
      </figure>
      <header className=" text-[23px] lg:text-[26px] text-center font-bold">
        {title}
      </header>
      <p className="mb-[24px] md:text-[20px] lg:text-[19.5px] font-semibold text-[grey] text-center">
        {text}
      </p>
    </div>
  );
};
export default WhatWeDoSectionItem;
