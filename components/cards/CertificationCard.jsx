"use client";
import Image from "next/image";
import Button from "../common/Button";
import { useState } from "react";


const CertificationCard = ({badge, title, img, CerficationNo, ObtainOn, ValidUntil}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className= "bg-white w-[400px] h-[400px] rounded-2xl flex flex-col p-3 gap-5 items-center">
        <div className="flex w-full  items-center justify-between rounded-default">
            <Image
                src={badge}
                alt={title}
                className="w-auto h-auto"
            />
            <p className = "body-large !font-bold">{title}</p>
        </div>
        <div className="flex items-center justify-between w-full h-full rounded-default ">
            <Image
                src={img}
                alt={title}
                className="w-auto h-auto rounded-[10]"
            />
            <div className = "flex flex-col gap-5">
            <div>   
            <p className = "body-large">Certificate No</p>
            <p className = "text-accent">{CerficationNo}</p>
            </div>
            <div>
            <p className = "body-large">Obtained On</p>
            <p>{ObtainOn}</p>
            </div>
            <div>
            <p className = "body-large">Valid Until</p>
            <p>{ValidUntil}</p>
            </div>
            <Button text="View" variant="primary" onClick={() => setIsOpen(true)}/>
            </div>
        </div>
        {isOpen && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                onClick={() => setIsOpen(false)}
            >
                <div
                className="relative"
                onClick={(e) => e.stopPropagation()}
                >
                <button
                    className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>

                <Image
                    src={img}
                    alt={title}
                    className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                />
                </div>
            </div>
        )}
    </div>   
    );
}

export default CertificationCard;