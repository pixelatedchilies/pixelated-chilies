"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const HeyflowWidget = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const handleScriptLoad = () => {
      setIsScriptLoaded(true);
    };

    const script = document.createElement("script");
    script.src = "https://static.heyflow.com/widget/latest/webview.js";
    script.async = true;
    script.onload = handleScriptLoad;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Script
        src="https://static.heyflow.com/widget/latest/webview.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      {isScriptLoaded && (
        <heyflow-wrapper
          flow-id="pixelated-chilies-form"
          dynamic-height
          scroll-up-on-navigation
          style-config='{"width": "100%"}'
        ></heyflow-wrapper>
      )}
    </>
  );
};

export default HeyflowWidget;
