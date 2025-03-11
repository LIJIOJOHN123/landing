import React, { useEffect } from "react";

function CalendlyDemo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2 className="text-center">Schedule a Meeting</h2>
      <div className="meetings-iframe-container" data-src="https://meetings-na2.hubspot.com/sudhir?embed=true"></div>
    </div>
  );
}

export default CalendlyDemo;
