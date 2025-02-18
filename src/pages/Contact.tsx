import { Home, Mail, Phone } from "lucide-react";
import AnimatedText from "../components/ui/animated-text";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-100 to-white">
        <div className="py-10 px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue font-bold text-center mx-auto max-w-3xl">
            Get In Touch
          </h1>
          <p className="text-center mx-auto max-w-3xl text-gray-700 md:text-xl mt-4">
            <AnimatedText text="Have any questions or inquiries? We'd love to hear from you!" />
          </p>
        </div>

        <div className="w-full my-6 md:my-12">
          <div className="flex flex-col md:flex-row-reverse max-w-[1140px] mx-auto justify-center">
            <div>
              <form className="mx-4 md:min-w-[430px] bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-center w-full text-2xl text-blue font-bold mb-4">
                  Contact Form
                </h2>
                <label className="block mb-2 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 mb-4 border rounded outline-none"
                />
                <label className="block mb-2 font-semibold">Phone Number</label>
                <PhoneInput
                  country={"in"}
                  enableSearch={true}
                  containerClass="mb-4 "
                  inputClass=""
                  buttonClass=" bg-gray-100 px-4"
                />

                <label className="block mb-2 font-semibold" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-2 mb-4 border rounded outline-none"
                />

                <div>
                  <label className="block mb-2 font-semibold" htmlFor="subject">
                    Subject
                  </label>
                  <div className="w-full">
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-2 mb-2 border rounded outline-none bg-white appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback / Suggestions</option>
                      <option value="other">Other</option>
                    </select>

                    {subject === "other" && (
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Enter your subject"
                          value={customSubject}
                          onChange={(e) => setCustomSubject(e.target.value)}
                          className="w-full p-2 mb-2 border rounded outline-none mt-2 bg-white"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <label className="block mb-2 font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter your name"
                  className="w-full p-2 mb-4 border rounded outline-none"
                />

                <button className="bg-blue  cursor-pointer transition-all duration-300 ease-in-out border border-blue hover:bg-white hover:text-blue text-white font-semibold py-2 px-4 rounded-md w-full ">
                  Submit
                </button>
              </form>
            </div>

            <div className="my-12 md:my-10 px-4 mx-auto ">
              <h2 className="text-2xl md:text-3xl text-blue text-center md:text-left font-bold mb-4 ">
                Contact Information
              </h2>
              <div className="mt-8">
                <div className="flex items-start gap-2">
                  <Home className="w-5 h-5 text-blue mt-1" />
                  <div className="flex items-start gap-5">
                    <h4 className="text-lg font-bold">Address:</h4>

                    <p className="text-gray-800 ">
                      InkYank Private Limited,
                      <br />
                      63/A,
                      <br />
                      Masterplan complex,
                      <br />
                      Thittasalai,
                      <br />
                      Theni - 625531
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-2 gap-1">
                  <Phone className="w-5 h-5 mb-3 text-blue" />
                  <div className="mb-2 flex items-start gap-7">
                    <h4 className="text-lg font-bold">Phone:</h4>
                    <p className="text-gray-800">+91 8903333780</p>
                  </div>
                </div>
                <div className="flex items-center  mt-2 gap-1">
                  <Mail className="w-5 h-5 mb-3 text-blue" />
                  <div className="mb-2 flex items-start gap-8">
                    <h4 className="text-lg font-bold">Email:</h4>
                    <p className="text-gray-800">contact@inkyank.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
