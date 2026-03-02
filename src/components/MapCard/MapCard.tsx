import React from "react";

type MapCardType = "google map V1" | "google map V2" | "Dashboard";
type MapCardSize = "M" | "S" | "XS";

type MapCardProps = {
  type?: MapCardType;
  size?: MapCardSize;
  address?: string;
  addressLabel?: string;
  mapImageSrc?: string;
  className?: string;
};

const SIZE_MAP: Record<MapCardSize, Record<MapCardType, { width: number; height: number }>> = {
  M: {
    "google map V1": { width: 930, height: 272 },
    "google map V2": { width: 930, height: 272 },
    Dashboard: { width: 450, height: 373 },
  },
  S: {
    "google map V1": { width: 690, height: 276 },
    "google map V2": { width: 690, height: 272 },
    Dashboard: { width: 330, height: 343 },
  },
  XS: {
    "google map V1": { width: 343, height: 272 },
    "google map V2": { width: 343, height: 272 },
    Dashboard: { width: 343, height: 272 },
  },
};

export function MapCard({
  type = "google map V1",
  size = "M",
  address = "Viale liberazione 16, Milano (MI)",
  addressLabel = "GOOGLE MAP",
  mapImageSrc,
  className,
}: MapCardProps) {
  const dims = SIZE_MAP[size][type] ?? { width: 343, height: 272 };
  const isV1 = type === "google map V1";
  const shadow =
    size === "XS" && type === "google map V2"
      ? "shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]"
      : "shadow-[0px_2px_6px_0px_rgba(0,0,0,0.02)]";

  return (
    <div
      className={[
        "relative rounded-sm overflow-hidden bg-neutral-gray-3",
        !isV1 ? shadow : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ width: dims.width, height: dims.height }}
    >
      {/* Map placeholder or image */}
      {mapImageSrc ? (
        <img
          src={mapImageSrc}
          alt="Map"
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[#e8e8e8] flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 4C16.268 4 10 10.268 10 18C10 28.4 24 44 24 44C24 44 38 28.4 38 18C38 10.268 31.732 4 24 4ZM24 23C21.239 23 19 20.761 19 18C19 15.239 21.239 13 24 13C26.761 13 29 15.239 29 18C29 20.761 26.761 23 24 23Z"
              fill="#c21817"
              opacity="0.4"
            />
          </svg>
        </div>
      )}

      {/* V1 text overlay */}
      {isV1 && (
        <div className="absolute right-0 top-0 bottom-0 w-[240px] bg-white flex flex-col justify-center px-6">
          <p className="text-[10px] font-medium tracking-[0.4px] uppercase text-neutral-gray-2 mb-2">
            {addressLabel}
          </p>
          <p className="text-body-m tracking-[0.5px] text-black">{address}</p>
        </div>
      )}

      {/* V2 / Dashboard controls */}
      {!isV1 && (
        <>
          {/* Expand button */}
          <div className="absolute top-6 right-6 size-8 bg-white rounded-sm shadow-[0px_2px_6px_6px_rgba(0,0,0,0.02)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1H5M1 1V5M13 13H9M13 13V9M1 13H5M1 13V9M13 1H9M13 1V5"
                stroke="black"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* Zoom controls */}
          <div className="absolute bottom-10 right-6 w-8 bg-white rounded-sm shadow-[0px_2px_6px_6px_rgba(0,0,0,0.02)] flex flex-col items-center py-2">
            <button className="flex items-center justify-center size-6">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1V9M1 5H9" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            <div className="h-px w-5 bg-neutral-gray-3 my-1" />
            <button className="flex items-center justify-center size-6">
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                <path d="M1 1H9" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {/* Map disclaimer */}
          <div className="absolute bottom-2 right-2 bg-white/70 px-1 py-0.5 flex items-center gap-1">
            <span className="text-[9px] tracking-[0.2px] text-black">Map data 2021</span>
            <div className="w-px h-2.5 bg-neutral-gray-3" />
            <span className="text-[9px] tracking-[0.2px] text-black">Terms of use</span>
            <div className="w-px h-2.5 bg-neutral-gray-3" />
            <span className="text-[9px] tracking-[0.2px] text-black">Report map error</span>
          </div>
        </>
      )}
    </div>
  );
}
