import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=918356070349&text=Hello%2C%20I%20would%20like%20to%20make%20a%20booking.%20Can%20you%20please%20assist%20me%3F
"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
      >
        <FaWhatsapp className="w-8 h-8 " />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918356070349"
        className="flex items-center justify-center w-14 h-14 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-600"
      >
        <FaPhone className="w-8 h-8" />
      </a>
    </div>
  );
};

export default FloatingButtons;
