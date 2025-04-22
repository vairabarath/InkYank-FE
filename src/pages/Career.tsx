import { motion } from "framer-motion";
import TrainingPrograms from "../components/careers/TrainingProgram";
import { useEffect, useState } from "react";
import { TeachingApplicationForm } from "../components/careers/TeachingApplicationForm";

const Career = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);
  return (
    <div className="bg-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl mb-6">
            Empower your career with opportunities to learn, grow, and make an
            impact.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-blue font-bold mb-8">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌟",
                title: "Growth Opportunities",
                description:
                  "Accelerate your professional growth with exciting challenges.",
              },
              {
                icon: "📚",
                title: "Training Programs",
                description:
                  "Upskill yourself with cutting-edge training programs.",
              },
              {
                icon: "🌍",
                title: "Global Impact",
                description:
                  "Be part of projects that make a difference worldwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-blue-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-blue-50 py-16">
        <TrainingPrograms />
      </section>

      {/* Open Positions */}
      <section className="bg-white  py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-blue font-bold text-center mb-8">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Developer - Internship ",
                location: "Remote",
                type: "Part-time / Full-time",
              },
              {
                title: "Blockchain Developer - Internship",
                location: "Remote",
                type: "Part-time / Full-time",
              },
              {
                title: "Backend Engineer - Internship",
                location: "Remote",
                type: "Part-time / Full-time",
              },
              {
                title: "UX/UI Designer - Internship",
                location: "Remote",
                type: "Part-time / Full-time",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-blue-300"
              >
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-blue-600 font-semibold">{job.type}</p>
                <button
                  disabled
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            If you are interested in teaching and mentoring the technologies to
            empower the youths ? Join us today!
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100"
          >
            Get Started
          </button>
        </div>
      </footer>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            aria-hidden="true"
            onClick={() => setIsFormOpen(false)}
          />

          {/* Modal container */}
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Modal content */}
            <div
              className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <TeachingApplicationForm
                onClose={() => setIsFormOpen(false)}
                isModal
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
