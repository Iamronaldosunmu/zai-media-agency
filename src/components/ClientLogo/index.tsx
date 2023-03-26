interface ClientLogoProps {
  imagePath: string;
  brandName: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ imagePath, brandName }) => {
  return (
    <div className="w-full">
      <img className="w-full" src={imagePath} />
      <p className="text-[22px] text-center lg:text-left xl:text-[28px] font-medium mt-[8px]">{brandName}</p>
    </div>
  );
};

export default ClientLogo;
