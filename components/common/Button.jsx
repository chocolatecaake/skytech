import Link from "next/link";

const Button = ({ text, icon, variant = "primary", href, onClick }) => {
  const variants = {
    CTA: "bg-secondary text-white hover:bg-darkred",

    primary: "bg-primary border-transparent text-white hover:bg-accent",

    secondary: "bg-white text-primary hover:bg-accent",

    tertiary:
      "bg-white/10 text-white inset-border backdrop-blur hover:bg-accent",

    // tertiary:
    //   "inset-border bg-white text-primary backdrop-blur hover:bg-accent",
    badge: "bg-lightaccent text-darkblue shadow-none",
    glassBadge: "glass backdrop-blur",
  };

  const classes = `
    flex items-center gap-2
    w-fit h-fit
    px-5 py-2.5
    rounded-default
    font-semibold
    transition-all duration-300
    shadow-default
    cursor-pointer
    ${variants[variant]}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
