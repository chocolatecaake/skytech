import Link from "next/link";

const Button = ({
  text,
  icon,
  variant = "primary",
  href,
  onClick,
  download,
}) => {
  const variants = {
    CTA: "bg-secondary text-white hover:bg-darkred cursor-pointer",

    primary: "bg-primary border-transparent text-white hover:bg-accent cursor-pointer",

    secondary: "bg-white text-primary hover:bg-accent cursor-pointer",

    tertiary:
      "bg-white/10 text-white inset-border backdrop-blur hover:bg-accent cursor-pointer",

    // tertiary:
    //   "inset-border bg-white text-primary backdrop-blur hover:bg-accent",
    badge: "bg-lightaccent text-darkblue shadow-none",
    glassBadge: "glass backdrop-blur",
    ongoing: "bg-lightaccent text-primary",
    completed: "bg-primary text-white",
  };

  const classes = `
    flex items-center gap-2
    w-fit h-fit
    px-5 py-2.5
    rounded-default
    font-semibold
    transition-all duration-300
    shadow-default
    ${variants[variant]}
  `;

  // plain <a>: Next's Link would try to prefetch the file as a route
  if (download) {
    return (
      <a href={href} download={download} className={classes}>
        {icon}
        {text}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} target="_blank">
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
