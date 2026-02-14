"use client";

import Lottie from "lottie-react";
import loadingCat from "../assets/loading-cat.json";

export function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="h-64 w-64">
        <Lottie animationData={loadingCat} loop={true} />
      </div>
    </div>
  );
}
