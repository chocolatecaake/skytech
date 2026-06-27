const Button = ({ text, icon, variant = "primary", onClick }) => {
  const variants = {
    CTA: "bg-secondary text-white hover:bg-darkred",

    primary: "bg-primary border-transparent text-white hover:bg-accent",

    secondary: "bg-white hover:bg-accent",

    tertiary: "bg-white/10 text-white inset-border hover:bg-accent",

    // tertiary:
    //   "inset-border bg-white text-primary backdrop-blur hover:bg-accent",
    badge: "bg-lightaccent text-darkblue shadow-none",
    glassBadge: "glass",
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex
        flex-col
        w-fit
        h-fit
        px-5 py-2.5
        rounded-default
        transition-all duration-300
        cursor-pointer
        font-semibold
        shadow-default
        ${variants[variant]}
      `}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
