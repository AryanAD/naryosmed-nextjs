"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const ContactUs = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../../components/Map"), {
        loading: () => <div>Loading Map...</div>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      ContactUs
      <div className="h-[330px] w-[100dvw]">
        <Map posix={[4.6945, -74.141]} />
      </div>
    </div>
  );
};

export default ContactUs;
