import { useState } from "react";
import { ArrowRight, ClockAlert, IdCardIcon, Wifi, X } from "lucide-react";
import { motion } from "framer-motion";

interface TeachingApplicationFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const TeachingApplicationForm = ({
  onClose,
  isModal = false,
}: TeachingApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    language: "",
    hoursPerWeek: "",
    availableDays: [] as string[],
    teachingSubjects: [] as string[],
    otherSubject: "",
    experienceDescription: "",
    hasTeachingExperience: "",
    teachingExperienceDescription: "",
    motivation: "",
    hasEquipment: "",
    acceptsUnpaidRole: false,
  });

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
    // Add your form submission logic here
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
          <h2 className="text-2xl font-bold text-gray-800">
            Teaching Volunteer Application
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
      )}

      {!isModal && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Join as a Volunteer Teacher
          </h1>
          <p className="text-gray-600">
            Fill out this form to apply as a teaching volunteer
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg">
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
                Email Address*
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
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Location (City, Country)*
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Language*
              </label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <ClockAlert className="text-blue-600" size={18} />
            </span>
            Availability
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How many hours per week can you volunteer?*
              </label>
              <div className="space-y-2">
                {["1-5 hours", "6-10 hours", "11+ hours"].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="hoursPerWeek"
                      value={option}
                      checked={formData.hoursPerWeek === option}
                      onChange={handleChange}
                      required
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Which days are you available?* (Check all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="availableDays"
                      value={day}
                      checked={formData.availableDays.includes(day)}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600"
                    />
                    <span>{day}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Interests & Experience */}
        <div className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full mr-3">
              <ArrowRight className="text-blue-600" size={18} />
            </span>
            Teaching Interests & Experience
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Which tech subjects can you teach?* (Check all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Blockchain",
                  "AI/ML",
                  "CyberSecurity",
                  "Full Stack Development",
                ].map((subject) => (
                  <label key={subject} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="teachingSubjects"
                      value={subject}
                      checked={formData.teachingSubjects.includes(subject)}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600"
                    />
                    <span>{subject}</span>
                  </label>
                ))}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="teachingSubjects"
                    value="Other"
                    checked={formData.teachingSubjects.includes("Other")}
                    onChange={handleCheckboxChange}
                    className="rounded text-blue-600"
                  />
                  <span>Other:</span>
                  <input
                    type="text"
                    name="otherSubject"
                    value={formData.otherSubject}
                    onChange={handleChange}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded-md"
                    placeholder="Specify"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Briefly describe your experience in these subjects*
              </label>
              <textarea
                name="experienceDescription"
                value={formData.experienceDescription}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you have any teaching/mentoring experience?*
              </label>
              <div className="space-y-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="hasTeachingExperience"
                      value={option}
                      checked={formData.hasTeachingExperience === option}
                      onChange={handleChange}
                      required
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {formData.hasTeachingExperience === "Yes" && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    If yes, briefly describe:
                  </label>
                  <textarea
                    name="teachingExperienceDescription"
                    value={formData.teachingExperienceDescription}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to volunteer as a tech instructor?*
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Wifi className="mr-2 text-blue-500" size={16} />
                Do you have a stable internet connection and a computer for
                online teaching?*
              </label>
              <div className="space-y-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="hasEquipment"
                      value={option}
                      checked={formData.hasEquipment === option}
                      onChange={handleChange}
                      required
                      className="text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="acceptsUnpaidRole"
                  checked={formData.acceptsUnpaidRole}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      acceptsUnpaidRole: e.target.checked,
                    }))
                  }
                  required
                  className="rounded text-blue-600"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  I understand this is an unpaid volunteer role*
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Form Submission */}
        <div className="flex justify-end">
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
