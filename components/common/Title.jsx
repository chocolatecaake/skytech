const Title = ({ pretitle, header, align, variant, size, as: Tag = "div" }) => {
  // ponytail: defaults to div because globals.css `h2` has !important sizes that would override `.h1`; pass as="h1" once per page
  return (
    <div
      className={`flex flex-col ${variant === "light" ? "text-white" : "bg-background"} text-${align} 
      ${
        align === "center"
          ? "items-center"
          : align === "right"
            ? "items-end"
            : "items-start"
      }
  `}
    >
      <div className="w-fit">
        {pretitle && (
          <span
            className={`block mb-3 spaced ${variant === "light" ? "text-yellow" : "text-tertiary bg-background"}`}
          >
            {pretitle}
          </span>
        )}
        <Tag className={`${size ?? "h1"} mb-6`}>{header}</Tag>
        <div className="h-[3px] bg-secondary rounded-full" />
      </div>
    </div>
  );
};

export default Title;
