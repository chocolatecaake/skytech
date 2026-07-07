import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <div className="flex w-fit p-2.5 bg-primary rounded-full fixed bottom-8 shadow-sm shadow-white right-4 z-50 hover:bg-accent">
        <FaWhatsapp size={40} className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
