import {
  Award,
  Bookmark,
  Check,
  CheckCircle2,
  CircleHelp,
  Code2,
  Database,
  LayoutPanelLeft,
  Network,
  Server,
} from "lucide-react";
import Accordion, { AccordionItem } from "./Accordian";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/Flipwords";
import { useEffect, useState } from "react";
import { EnrollmentForm } from "./EnrollmentForm";

// Import icons

const TrainingProgram = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const Programs = [
    {
      title: "Artificial Intelligence",
      location: "Remote",
      type: "Part-time / Full-time",
    },
    {
      title: "CyberSecurity",
      location: "Remote",
      type: "Part-time / Full-time",
    },
    {
      title: "Blockchain and Web3 Development",
      location: "Remote",
      type: "Part-time / Full-time",
    },
    {
      title: "Full Stack Development",
      location: "Remote",
      type: "Part-time / Full-time",
    },
  ];

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);

  return (
    <div>
      {/* <h2 className="text-3xl text-center md:text-4xl font-bold mb-10">
        Training Program
      </h2> */}
      <div className="text-center mb-6">
        <h3 className="text-3xl md:text-4xl font-bold text-blue mb-3">
          Sudar Online Training Program
        </h3>
        <p className="text-gray-600">
          Comprehensive courses designed for industry-ready skills
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Accordion>
          {/* Online Training Program for Global Web3 Talent */}
          <AccordionItem
            value="Online Training Program"
            trigger="Online Global Web3 Talent Training Program"
          >
            <div className="bg-blue-100 p-6 rounded-lg border border-gray-200 shadow-md">
              <p className="text-gray-700">
                We offer <strong>comprehensive online training programs</strong>{" "}
                designed to make{" "}
                <strong>blockchain education accessible worldwide</strong>. Our
                curriculum provides <strong>in-depth</strong> knowledge in:
              </p>

              {/* Key Features Section */}
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>📌 Blockchain Fundamentals</li>
                <li>📌 Smart Contracts & DApp Development</li>
                <li>📌 Web3 Game Mechanics</li>
                <li>📌 Real-World Decentralized Applications</li>
              </ul>

              {/* Learning Approach Section */}
              <p className="text-gray-700 mt-4">
                Our <strong>hands-on approach</strong> includes:
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>🎥 Live Sessions with Industry Experts</li>
                <li>💡 Interactive Coding Challenges</li>
                <li>🛠️ Hands-on Project Development</li>
              </ul>

              {/* Highlighted Box for Impact */}
              <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-md text-blue-900">
                <p>
                  <CircleHelp className="inline-block  mb-1 text-blue w-5 h-5" />{" "}
                  <strong>Who Can Join? </strong> Whether you're a student,
                  developer, or blockchain enthusiast, our program gives you the
                  skills to excel in the decentralized future.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* online training program for artificial intelligence */}
          <AccordionItem
            value="AI-Training-Program"
            trigger="Online AI & Machine Learning Training Program"
            color="purple"
          >
            <div className="bg-purple-100 p-6 rounded-lg border border-gray-200 shadow-md">
              <p className="text-gray-700">
                We offer <strong>cutting-edge AI training programs</strong>{" "}
                designed to{" "}
                <strong>democratize artificial intelligence education</strong>.
                Our curriculum covers <strong>fundamental to advanced</strong>{" "}
                topics including:
              </p>

              {/* Key Features Section */}
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>🤖 Machine Learning Fundamentals</li>
                <li>🧠 Deep Learning & Neural Networks</li>
                <li>🖼️ Computer Vision & Image Processing</li>
                <li>🗣️ Natural Language Processing (NLP)</li>
                <li>📊 Data Science & Predictive Analytics</li>
              </ul>

              {/* Learning Approach Section */}
              <p className="text-gray-700 mt-4">
                Our <strong>project-based learning</strong> methodology
                includes:
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>🎥 Live AI Workshops with Industry Leaders</li>
                <li>💻 Real-world Dataset Challenges</li>
                <li>🛠️ End-to-End AI Model Development</li>
                <li>📈 Model Deployment & Optimization</li>
              </ul>

              {/* Highlighted Box for Impact */}
              <div className="mt-6 p-4 bg-gray-50 border-l-4 border-purple-500 rounded-md text-purple-900">
                <p>
                  <CircleHelp className="inline-block mb-1 text-purple-500 w-5 h-5" />{" "}
                  <strong>Who Should Enroll? </strong> Perfect for developers,
                  data professionals, and tech enthusiasts looking to master AI
                  technologies that are transforming industries.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Online Training Program for Cyber Security */}
          <AccordionItem
            value="CyberSecurity-Training-Program"
            trigger="Online CyberSecurity Training Program"
            color="emerald"
          >
            <div className="bg-emerald-100 p-6 rounded-lg border border-gray-200 shadow-md">
              <p className="text-gray-700">
                Our <strong>intensive CyberSecurity program</strong> equips
                participants with <strong>real-world defense strategies</strong>{" "}
                against evolving digital threats. The curriculum covers{" "}
                <strong>essential security domains</strong> including:
              </p>

              {/* Key Features Section */}
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>🔒 Introduction to Cybersecurity Principles</li>
                <li>🛡️ Network Security & Threat Analysis</li>
                <li>💻 Secure Software Development Practices</li>
                <li>🕵️ Ethical Hacking & Penetration Testing</li>
                <li>🔐 Cryptography and Encryption Techniques</li>
                <li>🚨 Incident Response & Disaster Recovery</li>
              </ul>

              {/* Learning Approach Section */}
              <p className="text-gray-700 mt-4">
                Our <strong>hands-on security training</strong> includes:
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>🎯 Live Cyber Range Exercises</li>
                <li>💥 Simulated Attack/Defense Scenarios</li>
                <li>🛡️ Vulnerability Assessment Labs</li>
                <li>📝 Security Policy Development Workshops</li>
              </ul>

              {/* Highlighted Box for Impact */}
              <div className="mt-6 p-4 bg-gray-50 border-l-4 border-emerald-500 rounded-md text-emerald-900">
                <p>
                  <CircleHelp className="inline-block mb-1 text-emerald-500 w-5 h-5" />{" "}
                  <strong>Ideal For: </strong> IT professionals, system
                  administrators, developers, and anyone serious about building
                  cyber resilience in today's threat landscape.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Online Training Program for Full Stack Development  */}
          <AccordionItem
            value="fullstack-development"
            trigger="Full Stack Web Development Training Program"
            color="amber"
          >
            <div className="bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-sm">
              {/* Course Header */}
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-amber-600" size={24} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Full Stack Development Program
                </h3>
              </div>

              {/* Curriculum Section */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Bookmark className="text-amber-500" size={18} />
                  Comprehensive Curriculum
                </h4>

                <div className="grid gap-4">
                  <div className="p-4 bg-white rounded-lg border border-amber-100 shadow-xs">
                    <h5 className="font-medium text-amber-700 mb-2 flex items-center gap-2">
                      <LayoutPanelLeft className="text-amber-500" size={16} />
                      Front-End Development
                    </h5>
                    <ul className="text-gray-600 space-y-1.5 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        HTML5, CSS3, JavaScript (ES6+)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        React.js / Angular frameworks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        Responsive design & accessibility
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-100 shadow-xs">
                    <h5 className="font-medium text-amber-700 mb-2 flex items-center gap-2">
                      <Server className="text-amber-500" size={16} />
                      Back-End Development
                    </h5>
                    <ul className="text-gray-600 space-y-1.5 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        Node.js with Express
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        Python (Django/Flask)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        Authentication & authorization
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-100 shadow-xs">
                    <h5 className="font-medium text-amber-700 mb-2 flex items-center gap-2">
                      <Database className="text-amber-500" size={16} />
                      Database Management
                    </h5>
                    <ul className="text-gray-600 space-y-1.5 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        SQL (PostgreSQL, MySQL)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        NoSQL (MongoDB, Firebase)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        ORMs & database design
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-amber-100 shadow-xs">
                    <h5 className="font-medium text-amber-700 mb-2 flex items-center gap-2">
                      <Network className="text-amber-500" size={16} />
                      APIs & Advanced Concepts
                    </h5>
                    <ul className="text-gray-600 space-y-1.5 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        RESTful API design
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        GraphQL implementation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                          size={14}
                        />
                        WebSockets & real-time data
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Program Outcomes */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Award className="text-amber-500" size={18} />
                  What You'll Achieve
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-amber-100 p-1 rounded-full">
                      <Check className="text-amber-600" size={14} />
                    </div>
                    <span className="text-gray-600">
                      <strong className="text-gray-800">
                        Portfolio Development:
                      </strong>{" "}
                      Build and deploy 5+ full stack applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-amber-100 p-1 rounded-full">
                      <Check className="text-amber-600" size={14} />
                    </div>
                    <span className="text-gray-600">
                      <strong className="text-gray-800">
                        Industry Skills:
                      </strong>{" "}
                      Master modern development tools and workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-amber-100 p-1 rounded-full">
                      <Check className="text-amber-600" size={14} />
                    </div>
                    <span className="text-gray-600">
                      <strong className="text-gray-800">Career Ready:</strong>{" "}
                      Complete preparation for junior developer roles
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem value="Enrollment" trigger="Enroll Now">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <div className="pb-4 w-full flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  <FlipWords words="Available Training Programs" />
                </h2>
                <div>
                  {/* Your existing content */}
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </button>

                  {/* Custom Modal Implementation */}
                  {isFormOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      {/* overlay */}
                      <div
                        className="fixed inset-0 bg-black/50 transition-opacity"
                        aria-hidden="true"
                        onClick={() => setIsFormOpen(false)}
                      />

                      {/* Modal container */}
                      <div className="flex min-h-[80vh] items-center justify-center p-4">
                        {/* Modal content */}
                        <div
                          className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl"
                          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                        >
                          {/* Close button */}
                          <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
                            aria-label="Close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>

                          {/* Form content */}
                          <EnrollmentForm
                            onClose={() => setIsFormOpen(false)}
                            isModal
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Animated Program Cards */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {Programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md "
                  >
                    <h3 className="text-lg font-semibold">{program.title}</h3>
                    <div className=" text-gray-600 text-sm mt-2">
                      {program.location}
                    </div>
                    <div className=" text-gray-500 text-sm mt-1">
                      {program.type}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="my-5 w-full text-center ">
                <button
                  className="bg-blue-600 md:hidden transition-all duration-300 ease-in-out border border-blue-600 
                  hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-6 rounded-md"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default TrainingProgram;
