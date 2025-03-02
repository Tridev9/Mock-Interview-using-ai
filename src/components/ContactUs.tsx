import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6")}
    >
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-blue-900">Contact Us</h1>
        <p className="text-lg text-center text-gray-700">
          Have questions or need assistance? Feel free to reach out to us!
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl">📞</span>
            <p className="text-lg text-gray-700">+91 99999 99999</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">📧</span>
            <p className="text-lg text-gray-700">triddev123@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl">🏫</span>
            <p className="text-lg text-gray-700">
              PSCMR College of Engineering and Technology, 4th Year CSE (IoT & CS incl BCT)
            </p>
          </div>
        </div>
        <p className="text-center text-gray-600">
          We are here to help you with any queries or feedback. Your satisfaction is our priority!
        </p>
      </div>
    </motion.div>
  );
};

export default ContactUs;