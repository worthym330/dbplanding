declare module 'react-simple-chatbot' {
  import * as React from 'react';

  export interface Step {
    id: string;
    message?: string;
    trigger?: string;
    options?: Array<{ value: string | number; label: string; trigger: string }>;
    end?: boolean;
  }

  export interface ChatBotProps {
    steps: Step[];
    handleEnd?: () => void;
    floating?: boolean;
    headerTitle?: string;
    placeholder?: string;
    speechSynthesis?: boolean;
    recognitionEnable?: boolean;
  }

  const ChatBot: React.FC<ChatBotProps>;

  export default ChatBot;
}
