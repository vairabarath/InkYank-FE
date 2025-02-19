import { motion } from "framer-motion";
import TrainingPrograms from "../components/careers/TrainingProgram";

const Career = () => {
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Join Us?</h2>
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

      {/* Open Positions */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Developer",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "Blockchain Intern",
                location: "On-site",
                type: "Internship",
              },
              {
                title: "Backend Engineer",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "UX/UI Designer",
                location: "Remote",
                type: "Part-time",
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
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrainingPrograms />

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            If you are interested in teaching blockchain to empower the youths ?
            Join us today!
          </p>
          <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Career;
