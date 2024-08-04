import React from "react";
import FlippingCart from "../FlippingCard";
import { Service } from "@/app/constants/services";

interface RenderServicesProps {
  services: Service[];
}

const RenderServices: React.FC<RenderServicesProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {services.map(
        ({ id, title, description, src, tools, toolsImageProps }) => (
          <FlippingCart
            title={title}
            description={description}
            src={src}
            tools={tools}
            key={id}
            toolsImageProps={toolsImageProps}
          />
        )
      )}
    </div>
  );
};

export default RenderServices;
