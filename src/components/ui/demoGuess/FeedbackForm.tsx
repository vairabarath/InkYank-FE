import { Info } from "lucide-react";
import React, { useState } from "react";

type FormData = {
  fullName: string;
  organization: string;
  role: string;
  email: string;
  mobileNo: string;
  walletAddress: string;
  comments: string;
  experienceRating: string;
};

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    mobileNo: "",
    walletAddress: "",
    comments: "",
    experienceRating: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");

  const validateMobileNumber = (mobile: string): boolean => {
    if (mobile === "") {
      return true;
    }

    const cleanedMobile = mobile.replace(/[\s\-()]/g, "");
    const mobileRegex = /^\+?[0-9]{10,15}$/;

    return mobileRegex.test(cleanedMobile);
  };

  const validateWalletAddress = (address: string): boolean => {
    if (address === "") {
      return true;
    }

    const polygonRegex = /^0x[a-fA-F0-9]{40}$/;
    return polygonRegex.test(address);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "mobileNo" && value && !validateMobileNumber(value)) {
      setErrors((prev) => ({
        ...prev,
        mobileNo: "Please enter a valid mobile number (10-15 digits)",
      }));
    }

    if (name === "walletAddress" && value && !validateWalletAddress(value)) {
      setErrors((prev) => ({
        ...prev,
        walletAddress: "Please enter a valid Polygon wallet address (0x...)",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.mobileNo && !validateMobileNumber(formData.mobileNo)) {
      newErrors.mobileNo = "Please enter a valid mobile number (10-15 digits)";
    }

    if (
      formData.walletAddress &&
      !validateWalletAddress(formData.walletAddress)
    ) {
      newErrors.walletAddress =
        "Please enter a valid Polygon wallet address (0x...)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitResult("");

    if (!validateForm()) {
      setSubmitting(false);
      return;
    }

    const endpoint = import.meta.env.VITE_SHEETDB_API_ENDPOINT_DECENT;

    const payload = {
      data: [
        {
          fullName: formData.fullName,
          organization: formData.organization || "",
          role: formData.role,
          email: formData.email,
          mobileNo: formData.mobileNo || "",
          walletAddress: formData.walletAddress || "",
          comments: formData.comments || "",
          experienceRating: formData.experienceRating || "",
        },
      ],
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      if (response.ok) {
        setSubmitResult("Thank you for your feedback!");
        setFormData({
          fullName: "",
          organization: "",
          role: "",
          email: "",
          mobileNo: "",
          walletAddress: "",
          comments: "",
          experienceRating: "",
        });
        setErrors({});
      } else {
        console.error("Error response:", responseData);
        setSubmitResult(
          `Failed to submit: ${responseData.message || "Please try again."}`,
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
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

        <form onSubmit={handleSubmit} className="space-y-8">
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
                className={`w-full border-2 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
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
                className={`w-full border-2 ${
                  errors.role ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
              />
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">{errors.role}</p>
              )}
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
                className={`w-full border-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNo"
                placeholder="Enter your mobile number"
                value={formData.mobileNo}
                onChange={handleInputChange}
                className={`w-full border-2 ${
                  errors.mobileNo ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
              />
              {errors.mobileNo && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileNo}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Polygon Wallet Address
              </label>
              <input
                type="text"
                name="walletAddress"
                placeholder="0x..."
                value={formData.walletAddress}
                onChange={handleInputChange}
                className={`w-full border-2 ${
                  errors.walletAddress ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
              />
              {errors.walletAddress ? (
                <p className="text-red-500 text-sm mt-1">
                  {errors.walletAddress}
                </p>
              ) : (
                <div className="mt-2 flex items-start space-x-2">
                  <Info className="text-blue w-4" />
                  <p className=" text-blue-600 text-sm">
                    Provide your Polygon wallet address to be eligible for
                    exclusive token airdrops and rewards!
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Comments / Feedback
              </label>
              <textarea
                name="comments"
                placeholder="Share your thoughts, suggestions, or feedback..."
                value={formData.comments}
                onChange={handleInputChange}
                rows={5}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-vertical"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Experience Rating (1-5)
              </label>
              <input
                type="number"
                name="experienceRating"
                placeholder="Rate from 1 to 5"
                min="1"
                max="5"
                value={formData.experienceRating}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200 shadow-md"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>

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
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
