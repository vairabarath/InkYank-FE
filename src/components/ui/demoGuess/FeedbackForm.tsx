import React, { useState } from "react";
import StarRating from "./StarRating";

type FormData = {
  fullName: string;
  organization: string;
  role: string;
  email: string;
  walletAddress: string;
  experienceRating: string;
};

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    organization: "",
    role: "",
    email: "@gmail.com",
    walletAddress: "",
    experienceRating: "1",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      console.log("Checkbox changed");
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitResult("");
    const endpoint = import.meta.env.VITE_SHEETDB_API_ENDPOINT;

    const payload = {
      fullName: formData.fullName,
      organization: formData.organization,
      role: formData.role,
      email: formData.email,
      walletAddress: formData.walletAddress,
      experienceRating: formData.experienceRating,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitResult("Thank you for your feedback!");
        setFormData({
          fullName: "",
          organization: "",
          role: "",
          email: "",
          walletAddress: "",
          experienceRating: "",
        });
      } else {
        setSubmitResult("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setSubmitResult("Error submitting the form. Please try again later.");
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Feedback Form
        </h2>

        <div className="space-y-8">
          {/* Section 1: Participant Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Participant Info
            </h3>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Organization / Company Name
              </label>
              <input
                type="text"
                name="organization"
                placeholder="Enter your organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Role / Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="role"
                placeholder="e.g., Engineer, Product Manager, Founder"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Wallet Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="walletAddress"
                placeholder="Enter your polygon wallet address"
                value={formData.walletAddress}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Section 3: Experience Feedback */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Experience Feedback
            </h3>

            <div>
              <label className="block text-gray-800 font-semibold mb-3">
                Overall experience rating:{" "}
                <span className="text-red-500">*</span>
              </label>
              <StarRating
                totalStars={5}
                initialRating={parseInt(formData.experienceRating, 10)}
                onChange={(rating) =>
                  setFormData((prev) => ({
                    ...prev,
                    experienceRating: rating.toString(),
                  }))
                }
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200 shadow-md"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>

          {/* Submission feedback */}
          {submitResult && (
            <p
              className={`text-center mt-4 font-medium ${
                submitResult.includes("Thank")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitResult}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
