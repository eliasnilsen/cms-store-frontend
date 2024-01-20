import { Billboard as BillboardType } from "@/lib/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="hidden md:block">
      <Image
        src={data.imageUrl}
        width={2592}
        height={864}
        alt="billboard image"
      />
    </div>
  );
};

export default Billboard;
