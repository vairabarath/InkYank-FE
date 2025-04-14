import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Contact2Icon,
  GraduationCap,
  IdCardIcon,
  Laptop,
  Smartphone,
  Users2Icon,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";

interface EnrollmentFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const EnrollmentForm = ({
  onClose,
  isModal = false,
}: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    devices: [] as string[],
    fathersName: "",
    fathersOccupation: "",
    email: "",
    mobile: "",
    address: "",
    degree: "",
    institution: "",
    graduationYear: "",
    currentStatus: "",
    learningStyle: "",
    preferredLearning: [] as string[],
    workPreference: "",
    unpaidTrainingAcceptance: "",
    unpaidTrainingReason: "",
    priorExperience: "",
    areaOfInterest: "",
    knownTechnologies: [] as string[],
    skillRating: "",
    interestReason: "",
    expectedSalary: "",
    workPreferenceLocation: "",
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (field: string) => {
    setActiveDropdown(activeDropdown === field ? null : field);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const currentValues = [
        ...(prev[name as keyof typeof formData] as string[]),
      ];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return {
          ...prev,
          [name]: currentValues.filter((item) => item !== value),
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (onClose) onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`bg-white ${
        isModal ? "rounded-lg" : "min-h-screen"
      } p-6 max-w-4xl mx-auto`}
    >
      {isModal && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Enrollment Form</h2>
        </div>
      )}

      {!isModal && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Join Our Training Program
          </h1>
          <p className="text-gray-600">
            Fill out this form to apply for our upcoming training sessions
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div className="bg-gray-50 p-6 hover:bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <IdCardIcon className="text-blue-600" size={18} />
            </span>
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender*
              </label>
              <div className="relative">
                <div
                  className="flex justify-between items-center w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer"
                  onClick={() => toggleDropdown("gender")}
                >
                  <span>{formData.gender || "Select gender"}</span>
                  {activeDropdown === "gender" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {activeDropdown === "gender" && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {["Male", "Female", "Other"].map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, gender: option }));
                          setActiveDropdown(null);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth*
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Devices Owned at Home
              </label>
              <div className="flex flex-wrap gap-3 mt-1">
                {[
                  { value: "PC", icon: <Laptop size={16} /> },
                  { value: "Laptop", icon: <Laptop size={16} /> },
                  { value: "Wi-Fi", icon: <Wifi size={16} /> },
                  { value: "Smartphone", icon: <Smartphone size={16} /> },
                ].map((device) => (
                  <label
                    key={device.value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      name="devices"
                      value={device.value}
                      checked={formData.devices.includes(device.value)}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600"
                    />
                    <span className="flex items-center text-sm">
                      {device.icon}
                      <span className="ml-1">{device.value}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Family Information Section */}
        <div className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <Users2Icon className="text-blue-600" size={18} />
            </span>
            Family Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Father's Name*
              </label>
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Father's Occupation*
              </label>
              <input
                type="text"
                name="fathersOccupation"
                value={formData.fathersOccupation}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <Contact2Icon className="text-blue-600" size={18} />
            </span>
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number*
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Home Address*
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Educational Background Section */}
        <div className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <GraduationCap className="text-blue-600" size={18} />
            </span>
            Educational Background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree*
              </label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution*
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year of Graduation*
              </label>
              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Status*
              </label>
              <div className="relative">
                <div
                  className="flex justify-between items-center w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer"
                  onClick={() => toggleDropdown("currentStatus")}
                >
                  <span>
                    {formData.currentStatus || "Select your current status"}
                  </span>
                  {activeDropdown === "currentStatus" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {activeDropdown === "currentStatus" && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {["Final Year Student", "New Graduate", "Arrears"].map(
                      (option) => (
                        <div
                          key={option}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              currentStatus: option,
                            }));
                            setActiveDropdown(null);
                          }}
                        >
                          {option}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Preferences Section */}
        <div className="bg-gray-50 p-6  hover:bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <ArrowRight className="text-blue-600" size={18} />
            </span>
            Learning Preferences
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Which learning style is more suitable for you?*
              </label>
              <div className="space-y-2">
                {[
                  "Self-Taught – Learn anything on my own",
                  "Formally Trained – Being educated by others",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="learningStyle"
                      value={option}
                      checked={formData.learningStyle === option}
                      onChange={handleChange}
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred way of learning new concepts/subjects:*
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Reading Books & Articles",
                  "Watching Videos",
                  "Learning by practice",
                  "Attending Seminars & Classes",
                  "Other",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="preferredLearning"
                      value={option}
                      checked={formData.preferredLearning.includes(option)}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Preferences Section */}
        <div className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <ArrowRight className="text-blue-600" size={18} />
            </span>
            Career Preferences
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Would you prefer gaining valuable work experience for one year
                with a lower salary or earning a high salary with limited
                experience and learning?*
              </label>
              <div className="space-y-2">
                {[
                  "One year with a low salary but gaining valuable work experience and extensive knowledge",
                  "One year with a good salary but limited work experience and no knowledge acquisition",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="workPreference"
                      value={option}
                      checked={formData.workPreference === option}
                      onChange={handleChange}
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you comfortable with the fact that this is an unpaid
                training program for 3 months?*
              </label>
              <div className="space-y-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="unpaidTrainingAcceptance"
                      value={option}
                      checked={formData.unpaidTrainingAcceptance === option}
                      onChange={handleChange}
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {formData.unpaidTrainingAcceptance && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why or why not?
                  </label>
                  <textarea
                    name="unpaidTrainingReason"
                    value={formData.unpaidTrainingReason}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you have any prior experience (internships, projects)
                relevant to your degree?
              </label>
              <textarea
                name="priorExperience"
                value={formData.priorExperience}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="bg-gray-50 p-6 hover:bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <ArrowRight className="text-blue-600" size={18} />
            </span>
            Technical Skills
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your area of interest?*
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Front-End Development",
                  "Back-End Development",
                  "Full Stack Development",
                  "Game Development",
                  "Systems Programming",
                  "Embedded Programming",
                  "Blockchain",
                  "Others",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="areaOfInterest"
                      value={option}
                      checked={formData.areaOfInterest === option}
                      onChange={handleChange}
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please select the programming languages and concepts you are
                already familiar with:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Python",
                  "C",
                  "C++",
                  "JAVA",
                  "RUST",
                  "GO",
                  "C#",
                  "PEARL",
                  "RUBY",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Flask",
                  "Django",
                  "Node-JS",
                  "React",
                  "Flutter",
                  "Angular",
                  "Vue",
                  "Spring Boot",
                  "Others",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="knownTechnologies"
                      value={option}
                      checked={formData.knownTechnologies.includes(option)}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                If you were to rate your programming skills, what score would
                you give yourself?*
              </label>
              <div className="grid grid-cols-4 gap-2">
                {["Below 30%", "31 – 50%", "51 – 70%", "71 – 90%"].map(
                  (option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="skillRating"
                        value={option}
                        checked={formData.skillRating === option}
                        onChange={handleChange}
                        className="text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why are you interested in this internship/training program?*
              </label>
              <textarea
                name="interestReason"
                value={formData.interestReason}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Expectations Section */}
        <div className="bg-gray-50 p-6 hover:bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <ArrowRight className="text-blue-600" size={18} />
            </span>
            Expectations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What is your expected salary if you complete one year of working
                in our company? (per month)*
              </label>
              <input
                type="text"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What is your preferred way of working?*
              </label>
              <div className="relative">
                <div
                  className="flex justify-between items-center w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer"
                  onClick={() => toggleDropdown("workPreferenceLocation")}
                >
                  <span>
                    {formData.workPreferenceLocation || "Select preference"}
                  </span>
                  {activeDropdown === "workPreferenceLocation" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {activeDropdown === "workPreferenceLocation" && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {["Work From Home", "In-Office", "Both"].map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            workPreferenceLocation: option,
                          }));
                          setActiveDropdown(null);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Form Submission */}
        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </div>
      </form>
    </motion.div>
  );
};
