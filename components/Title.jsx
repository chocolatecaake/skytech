const Title = ({ pretitle, header, align }) => {
  return (
    <div
      className={`flex flex-col text-${align} 
    ${
      align === "center"
        ? "items-center"
        : align === "right"
          ? "items-end"
          : "items-start"
    }
`}
    >
      <div className="w-fit space-y-2 md:space-y-6">
        <span className="block spaced text-tertiary">{pretitle}</span>
        <h1>{header}</h1>
        <div className="h-[3px] bg-secondary rounded-full" />
      </div>
    </div>
  );
};

export default Title;
