import Head from "next/head";
import Slider from "react-input-slider";
import React, { useState } from "react";

export default function Home() {
  const [svalue, setSvalue] = useState(0);
  const [coralOpacity, setCoralOpacity] = useState(1);

  function correctCoralOpacity(x) {
    setCoralOpacity(1.2 - x);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Coral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6 text-indigo-500">
          Coral Bleaching
        </h1>

        <div className="justify-center items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="370"
            height="250"
            viewBox="0 0 370 250"
          >
            <path
              id="path1 "
              style={{ fill: "#685494", fillOpacity: coralOpacity }}
              d="M 55.3 149.02 43.21 196.19 0.88 124.23 55.3 149.02 z"
            />
            <path
              id="path2"
              style={{ fill: "#7a65a6", fillOpacity: coralOpacity }}
              d="M 90.98 249.4 0.88 207.68 43.21 196.19 90.98 249.4 z"
            />
            <path
              id="path3"
              style={{ fill: "#41208c", fillOpacity: coralOpacity }}
              d="M 92.19 112.74 55.3 149.02 55.3 51.67 92.19 112.74 z"
            />
            <path
              id="path4"
              style={{ fill: "#9884c4", fillOpacity: coralOpacity }}
              d="M 157.5 83.11 92.19 112.74 126.05 8.73 157.5 83.11 z"
            />
            <path
              id="path5"
              style={{ fill: "#b7a4e0", fillOpacity: coralOpacity }}
              d="M 218.57 79.48 157.5 83.11 204.66 0.87 218.57 79.48 z"
            />
            <path
              id="path6"
              style={{ fill: "#cfc3e8", fillOpacity: coralOpacity }}
              d="M 297.14 116.85 297.05 116.91 218.57 79.48 271.18 28.69 297.14 116.85 z"
            />
            <path
              id="path7"
              style={{ fill: "#685494", fillOpacity: coralOpacity }}
              d="M 366.12 110.93 321.37 204.05 297.18 116.97 366.12 110.93 z"
            />
            <path
              id="path8"
              style={{ fill: "#b0aabd", fillOpacity: coralOpacity }}
              d="M 371.56 204.05 311.09 245.78 321.37 204.05 371.56 204.05 z"
            />
            <path
              id="path9"
              style={{ fill: "#e1d4ff", fillOpacity: coralOpacity }}
              d="M 218.57 79.48 143.99 178.8 157.5 83.11 218.57 79.48 z"
            />
            <path
              id="path10"
              style={{ fill: "#a281eb", fillOpacity: coralOpacity }}
              d="M 215.2 247.35 92.19 249.38 92.19 247.79 143.52 179.43 143.86 179.75 215.2 247.35 z"
            />
            <path
              id="path11"
              style={{ fill: "#7b53d4", fillOpacity: coralOpacity }}
              d="M 297.05 116.91 217.95 166.19 218.57 79.48 297.05 116.91 z"
            />
            <path
              id="path12"
              style={{ fill: "#501ac4", fillOpacity: coralOpacity }}
              d="M 297.18 116.97 218.63 247.3 217.37 247.32 217.95 167.35 217.95 166.19 297.05 116.91 297.18 116.97 z"
            />
            <path
              id="path13"
              style={{ fill: "#3b0e9c", fillOpacity: coralOpacity }}
              d="M 321.37 204.05 311.09 245.78 222.33 247.24 321.37 204.05 z"
            />
            <path
              id="path14"
              style={{ fill: "#331670", fillOpacity: coralOpacity }}
              d="M 91.79 248.32 90.98 249.4 43.21 196.19 55.3 149.02 91.79 248.32 z"
            />
            <path
              id="path15"
              style={{ fill: "#2a0775", fillOpacity: coralOpacity }}
              d="M 92.19 112.74 92.19 247.79 91.79 248.32 55.3 149.02 92.19 112.74 z"
            />
            <path
              id="path16"
              style={{ fill: "#2c1857", fillOpacity: coralOpacity }}
              d="M 143.52 179.43 92.19 247.79 92.19 112.74 143.52 179.43 z"
            />
            <path
              id="path17"
              style={{ fill: "#44326b", fillOpacity: coralOpacity }}
              d="M 157.5 83.11 143.99 178.8 143.66 179.25 143.52 179.43 92.19 112.74 157.5 83.11 z"
            />
            <path
              id="path18"
              style={{ fill: "#5a4d78", fillOpacity: coralOpacity }}
              d="M 143.86 179.75 215.2 247.35 217.37 247.32 217.95 167.35 215.44 167.75 215.44 167.75 143.94 179.2 z"
            />
            <path
              id="path19"
              style={{ fill: "#6b647d", fillOpacity: coralOpacity }}
              d="M 321.37 204.05 222.33 247.24 218.63 247.3 297.18 116.97 321.37 204.05 z"
            />
            <path
              id="path20"
              style={{ fill: "#726c80", fillOpacity: coralOpacity }}
              d="M 143.99 178.8 218.57 79.48 217.95 166.19 z"
            />
          </svg>
        </div>

        <div className="flex flex-row space-x-3 mt-6">
          <div>0°C</div>
          <div>
            <Slider
              axis="x"
              x={svalue}
              xmax={1}
              xstep={0.01}
              onChange={({ x }) => {
                setSvalue(x), correctCoralOpacity(x);
              }}
            />
          </div>
          <div>1.5°C</div>
        </div>

        <div className="text-sm text-indigo-500">
          Rise in temperature of ocean waters
        </div>

        <div className="text-indigo-900 w-4/6 mt-8">
          Coral reefs are incredibly diverse and important ecosystems. Yet
          current estimates show that 19% of all coral reefs are beyond recovery
          and another 15% are in critical condition and may die within 10 to 20
          years Coral reefs and the extraordinary biodiversity they support are
          under thermal stress, which can result in a phenomenon called coral
          bleaching. Only one thing causes coral bleaching on a regional or
          global scale, and that is sea surface temperature. When the water gets
          hot and stays hot, corals will bleach.
        </div>
      </main>
    </div>
  );
}
