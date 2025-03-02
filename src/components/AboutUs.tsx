import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-6")}
    >
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-green-900">About Us</h1>
        <p className="text-lg text-center text-gray-700">
          Welcome to our AI-powered Mock Interview Platform!
        </p>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Are you preparing for a job interview and feeling nervous? Our platform is here to help you ace your interviews with confidence! Whether you're a fresher or an experienced professional, we provide a realistic mock interview experience tailored to your needs.
          </p>
          <p className="text-lg text-gray-700">
            Here's how it works:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Provide Job Details:</strong> Enter the job role, description, years of experience, and required skills.
            </li>
            <li>
              <strong>AI-Generated Questions:</strong> Our AI will generate 10 technical and behavioral questions based on the information you provide.
            </li>
            <li>
              <strong>Realistic Interview Experience:</strong> Turn on your camera and microphone to answer the questions just like in a real interview.
            </li>
            <li>
              <strong>Instant Feedback:</strong> After the interview, you'll receive feedback comparing your answers with the ideal responses.
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            Our platform is designed to simulate a real interview environment, helping you practice and improve your communication skills, technical knowledge, and confidence.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Why Choose Us?</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personalized interview questions based on your job role and skills.</li>
            <li>Real-time voice and video recording for a realistic experience.</li>
            <li>No recordings are stored—your privacy is our priority.</li>
            <li>Practice anytime, anywhere, at your own pace.</li>
          </ul>
        </div>
        <p className="text-center text-gray-600">
          Start your journey to interview success today! 🚀
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;