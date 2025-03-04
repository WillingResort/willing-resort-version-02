"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    AgentInitializer?: {
      init: (config: {
        agentRenderURL: string;
        rootId: string;
        formID: string;
        queryParams: string[];
        domain: string;
        isDraggable: boolean;
        background: string;
        buttonBackgroundColor: string;
        buttonIconColor: string;
        variant: boolean;
        customizations: {
          greeting: string;
          greetingMessage: string;
          openByDefault: string;
          pulse: string;
          position: string;
          autoOpenChatIn: string;
        };
        isVoice: boolean;
      }) => void;
    };
  }
}

const ChatBotWidget: React.FC = () => {
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
          background: "linear-gradient(180deg, #000000 0%, #000 100%)",
          buttonBackgroundColor: "#000000",
          buttonIconColor: "#FFFFFF",
          variant: true,
          customizations: {
            greeting: "Yes",
            greetingMessage: "Hello! How can I assist you la?",
            openByDefault: "No",
            pulse: "Yes",
            position: "right",
            autoOpenChatIn: "0",
          },
          isVoice: true,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatBotWidget;



