"use client";

import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaComments, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
// import ChatBot from "react-simple-chatbot";

// const steps = [
//   {
//     id: "1",
//     message: "Welcome to our support!",
//     trigger: "2",
//     user:true
//   },
//   {
//     id: "2",
//     message: "What can I help you with?",
//     trigger: "3",
//     user: true,
//   },
//   {
//     id: "3",
//     options: [
//       { value: "faq", label: "FAQ", trigger: "4" },
//       { value: "contact", label: "Contact Us", trigger: "5" },
//     ],
//   },
//   {
//     id: "4",
//     message: "Here are the FAQs...",
//     end: true,
//   },
//   {
//     id: "5",
//     message: "Please contact us at support@example.com.",
//     end: true,
//   },
// ];

const FloatingButtons: React.FC = () => {
  // const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 flex flex-col space-y-3 z-10">
      {/* WhatsApp Button */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=918356070349&text=Hello%2C%20I%20would%20like%20to%20make%20a%20booking.%20Can%20you%20please%20assist%20me%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
        animate={{
          y: [0, -10, 0],
          x: [0, 10, -10, 10, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+918356070349"
        className="flex items-center justify-center w-14 h-14 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-600"
        animate={{
          y: [0, -10, 0],
          x: [0, 10, -10, 10, 0]
        }}
        
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaPhone className="w-8 h-8" />
      </motion.a>

      {/* ChatBot Button */}
      {/* {isChatOpen ? (
        <div className="relative">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <ChatBot steps={steps} />
          </motion.div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <motion.button
          onClick={() => setIsChatOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FaComments className="w-8 h-8" />
        </motion.button>
      )} */}
    </div>
  );
};

export default FloatingButtons;
