import FeedbackForm from "../components/global-components/FeedbackForm";

const FeedbackPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header Section */}
      <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          We Value Your Feedback
        </h1>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Help us improve by sharing your thoughts and experiences
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full py-8 px-4">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedbackPage;
