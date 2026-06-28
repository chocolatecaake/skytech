const WhatsAppButton = ({
  phoneNumber,
  message,
  children = "Chat on WhatsApp",
}) => {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <div className="flex w-fit p-2 bg-primary rounded-full fixed bottom-8 shadow-sm shadow-white right-4 z-50 hover:bg-accent">
        {children}
      </div>
    </a>
  );
};

export default WhatsAppButton;
