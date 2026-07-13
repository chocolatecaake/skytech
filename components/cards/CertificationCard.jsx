import Image from "next/image";
import Button from "../common/Button";

const CertificationCard = ({badge, title, img, CerficationNo, ObtainOn, ValidUntil}) => {
    return (
    <div className= "bg-white w-[390px] h-[380px] rounded-2xl flex flex-col p-3 gap-3 items-center">
        <div className="flex w-full  items-center justify-between rounded-default">
            <Image
                src={badge}
                alt={title}
                width={80}
                height={80}
                className="object-contain"
            />
            <p>{title}</p>
        </div>
        <div className="flex w-full  items-center justify-between rounded-default ">
            <Image
                src={img}
                alt={title}
                width={80}
                height={80}
                className="object-contain bg-red-600"
            />
            <div className = "flex flex-col w-full items-start">
            <p>Certificate No</p>
            <p className = "text-accent">{CerficationNo}</p>
            <p className = "mt-5">Obtained On</p>
            <p>{ObtainOn}</p>
            <p className = "mt-5">Valid Until</p>
            <p>{ValidUntil}</p>
            <Button
            
            />
            </div>
        </div>
    </div>   
    );
}

export default CertificationCard;