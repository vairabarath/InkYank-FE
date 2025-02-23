import { ArrowRightIcon, CircleHelp, Stars } from "lucide-react";
import Accordion, { AccordionItem } from "./Accordian";
// Import icons

const TrainingProgram = () => {
  const Programs = [
    {
      title: "Blockchain and Web3 Development",
      location: "Remote",
      type: "Part-time / Full-time",
    },
    {
      title: "Front-end Development",
      location: "Remote",
      type: "Part-time / Full-time",
    },
    {
      title: "Back-end Development",
      location: "Remote",
      type: "Part-time / Full-time",
    },
    {
      title: "Full-stack Development",
      location: "Remote",
      type: "Part-time / Full-time",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl text-center md:text-4xl font-bold mb-6">
        Training Program
      </h2>
      <div className="max-w-4xl mx-auto">
        <Accordion>
          <AccordionItem
            value="Sudar – Annual Training Program"
            trigger="Sudar – Annual Training Program"
          >
            <div className="bg-blue-100 p-6 rounded-lg border border-gray-200 shadow-md">
              <p className="text-gray-700">
                We conduct <strong>Sudar-Annual training programs</strong> in
                colleges across India and abroad, equipping students with
                hands-on expertise in:
              </p>

              {/* Key Highlights Section */}
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <ArrowRightIcon className="inline-block mr-1" /> Core
                  Blockchain Technology
                </li>
                <li>
                  <ArrowRightIcon className="inline-block mr-1" /> DApp
                  Development
                </li>
                <li>
                  <ArrowRightIcon className="inline-block mr-1" /> Web3 Game
                  Development
                </li>
                <li>
                  <ArrowRightIcon className="inline-block mr-1" /> Smart
                  Contract Development
                </li>
                <li>
                  <ArrowRightIcon className="inline-block mr-1" /> Decentralized
                  Protocols & Tokenomics
                </li>
                <li>
                  <ArrowRightIcon className="inline-block mr-1" /> Practical,
                  Project-Based Learning
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                Our goal is to <strong>empower young minds</strong> with the
                skills required to thrive in the blockchain industry, bridging
                the gap between
                <strong> academia and real-world applications.</strong>
              </p>

              {/* Talent Hiring Section */}
              <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-md text-blue-900">
                <p>
                  <strong>
                    <Stars className="inline-block mr-2 text-yellow-500" />"
                    Career Opportunity:
                  </strong>{" "}
                  We actively identify and hire the most talented individuals
                  from each batch, integrating them into our ecosystem.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Online Training Program */}

          <AccordionItem
            value="Online Training Program"
            trigger="Online Training Programs for Global Web3 Talent"
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

          <AccordionItem value="Enrollment" trigger="Enroll Now">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md ">
              <div className="pb-4 w-full flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Available Training Programs
                </h2>
                <button
                  className="bg-blue-600 hidden md:block transition-all duration-300 ease-in-out border border-blue-600 
                             hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-6 rounded-md"
                >
                  Enroll Now
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Programs.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-semibold">{program.title}</h3>
                    <div className=" text-gray-600 text-sm mt-2">
                      {program.location}
                    </div>
                    <div className=" text-gray-500 text-sm mt-1">
                      {program.type}
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-5 w-full text-center ">
                <button
                  className="bg-blue-600  md:hidden transition-all duration-300 ease-in-out border border-blue-600 
                             hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-6 rounded-md"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default TrainingProgram;
