interface StyleRow {
  label: string;
  className: string;
  xsLabel?: string;
  xsClassName?: string;
}

const styles: StyleRow[] = [
  {
    label: "Call out 56",
    className: "text-callout",
  },
  {
    label: "H1 header 44",
    className: "text-h1",
  },
  {
    label: "H2 header 28",
    className: "text-h2",
    xsLabel: "H2/XS header 24",
    xsClassName: "text-h2-xs",
  },
  {
    label: "H3 header 20",
    className: "text-h3",
    xsLabel: "H3/XS header 18",
    xsClassName: "text-h3-xs",
  },
  {
    label: "H4 header 16",
    className: "text-h4",
    xsLabel: "H4/XS header 14",
    xsClassName: "text-h4-xs",
  },
  {
    label: "H5 Subtitle 10",
    className: "text-subtitle",
    xsLabel: "H5/XS Subtitle all caps 14",
    xsClassName: "text-subtitle-xs",
  },
  {
    label: "Body 12",
    className: "text-body",
    xsLabel: "Body/XS",
    xsClassName: "text-body-xs",
  },
  {
    label: "Button 12",
    className: "text-button",
    xsLabel: "Button/XS 14",
    xsClassName: "text-button-xs",
  },
  {
    label: "Button Link 12",
    className: "text-button-link",
  },
  {
    label: "Caption 9",
    className: "text-caption",
    xsLabel: "Caption/XS 12",
    xsClassName: "text-caption-xs",
  },
  {
    label: "Tag 8",
    className: "text-tag",
    xsLabel: "Caption/XS/ all caps 12",
    xsClassName: "text-caption-xs-caps",
  },
  {
    label: undefined as unknown as string,
    className: "",
    xsLabel: "Tag 9",
    xsClassName: "text-tag-xs",
  },
];

export default function TextStyles() {
  return (
    <div className="min-h-screen bg-neutral-gray-3">
      {/* Header */}
      <div className="bg-neutral-black px-20 py-16">
        <p className="text-callout text-neutral-white">Text styles</p>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-2 gap-8 px-20 pt-16 pb-8">
        <div className="bg-neutral-gray-1 px-9 py-5">
          <p className="text-callout text-neutral-white">M/S</p>
        </div>
        <div className="bg-neutral-gray-1 px-9 py-5">
          <p className="text-callout text-neutral-white">XS - mobile</p>
        </div>
      </div>

      {/* Style rows */}
      <div className="grid grid-cols-2 gap-x-8 px-28 pb-20">
        {styles.map((style, i) => (
          <Row key={i} style={style} />
        ))}
      </div>
    </div>
  );
}

function Row({ style }: { style: StyleRow }) {
  return (
    <>
      <div className="py-4">
        {style.label && (
          <p className={`text-neutral-black ${style.className}`}>
            {style.label}
          </p>
        )}
      </div>
      <div className="py-4">
        {style.xsLabel && (
          <p className={`text-neutral-black ${style.xsClassName}`}>
            {style.xsLabel}
          </p>
        )}
      </div>
    </>
  );
}
