interface BrandLogoProps {
  image: string;
  brandName: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ image, brandName }) => {
  return (
    <div className="relative -z-10">
      <img className="w-full rounded-[21px]" src={image} />
      <div className="absolute top-0 right-0 left-0 bottom-0 semi-transparent-overlay rounded-[21px] flex items-end pb-[14px] lg:pb-[18px] pl-[13px] lg:pl-[16px] text-[12px] lg:text-[18px] text-white font-bold">
        <p>{brandName}</p>
      </div>
    </div>
  );
};

export default BrandLogo;
