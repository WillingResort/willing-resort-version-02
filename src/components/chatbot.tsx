"use client";
import { useEffect } from "react";

const JotFormWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: "https://agent.jotform.com/0195619fe6f67dbe9d9b591f9c4adb2c4ef3",
          rootId: "JotformAgent-0195619fe6f67dbe9d9b591f9c4adb2c4ef3",
          formID: "0195619fe6f67dbe9d9b591f9c4adb2c4ef3",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isDraggable: false,
          background: "linear-gradient(180deg, #000000 0%, #f5a623 100%)",
          buttonBackgroundColor: "#000000",
          buttonIconColor: "#FFFFFF",
          variant: false,
          customizations: {
            greeting: "Yes",
            greetingMessage: "Hi! How can I assist you?",
            openByDefault: "No",
            pulse: "Yes",
            position: "right",
            autoOpenChatIn: "0",
          },
          isVoice: false,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default JotFormWidget;
