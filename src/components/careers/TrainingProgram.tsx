import { useState } from "react";
import { motion } from "framer-motion";
import { Box, ChevronsLeftRightEllipsis, ReceiptText } from "lucide-react";

// Define types
type TrainingCourse = {
  title: string;
  duration: string;
  icon: JSX.Element;
};

type TrainingProgramsType = {
  annual: TrainingCourse[];
  online: TrainingCourse[];
};

type Program = {
  name: string;
  id: keyof TrainingProgramsType; // "annual" | "online"
};

const TrainingPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState<
    keyof TrainingProgramsType | null
  >(null);

  const programs: Program[] = [
    { name: "Annual Program", id: "annual" },
    { name: "Online Program", id: "online" },
  ];

  const trainingDetails: TrainingProgramsType = {
    annual: [
      {
        title: "Blockchain Basics",
        duration: "3 Months",
        icon: <Box className="h-8 w-8 text-blue-600" />,
      },
      {
        title: "Fullstack Development",
        duration: "6 Months",
        icon: <ChevronsLeftRightEllipsis className="h-8 w-8 text-blue-600" />,
      },
      {
        title: "Smart Contract Development",
        duration: "4 Months",
        icon: <ReceiptText className="h-8 w-8 text-blue-600" />,
      },
    ],
    online: [
      {
        title: "AI & Machine Learning",
        duration: "5 Months",
        icon: <Box className="h-8 w-8 text-green-600" />,
      },
      {
        title: "Cybersecurity Essentials",
        duration: "4 Months",
        icon: <ChevronsLeftRightEllipsis className="h-8 w-8 text-green-600" />,
      },
      {
        title: "Cloud Computing",
        duration: "6 Months",
        icon: <ReceiptText className="h-8 w-8 text-green-600" />,
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Training Programs
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedProgram(program.id)}
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-bold text-center">{program.name}</h3>
            </motion.div>
          ))}
        </div>

        {selectedProgram && (
          <motion.div
            className="bg-white p-8 mt-8 rounded-lg shadow-md hover:shadow-lg flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="w-full md:w-1/2">
              {trainingDetails[selectedProgram].map((training, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.3,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 80,
                  }}>
                  <div className="flex items-center">
                    {training.icon}
                    <h3 className="text-2xl font-bold ml-4">
                      {training.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">Duration: {training.duration}</p>
                  {index < 2 && <hr className="my-4 border-gray-300" />}
                </motion.div>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <motion.button
                className="bg-blue-600 cursor-pointer transition-all duration-300 ease-in-out border border-blue-600 hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}>
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TrainingPrograms;
