import { useState } from "react";

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: [],
    motivation: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData: any) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill: string[]) => skill !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Recruitment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div>
          <p className="font-semibold">Do you have prior experience?</p>
          <label className="mr-4">
            <input
              type="radio"
              name="experience"
              value="yes"
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="no"
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <div>
          <p className="font-semibold">Select your skills:</p>
          <label className="block">
            <input
              type="checkbox"
              name="skills"
              value="JavaScript"
              onChange={handleChange}
            />
            JavaScript
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="skills"
              value="React"
              onChange={handleChange}
            />
            React
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="skills"
              value="Tailwind"
              onChange={handleChange}
            />
            Tailwind CSS
          </label>
        </div>

        <textarea
          name="motivation"
          placeholder="Why do you want to join?"
          value={formData.motivation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecruitmentForm;
