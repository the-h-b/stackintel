"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import ContactImage from "../../assets/static/contact.png";
import FaqImage from "../../assets/static/faq.png";

const page = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          reason: "",
        });
      } else {
        setError(
          "An error occurred while sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "An error occurred while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "What is Stack Intel?",
      answer:
        "Stack Intel is a leading fintech company that offers cutting-edge investment and banking solutions to individuals and businesses worldwide.",
    },
    {
      question: "How can I open an account?",
      answer:
        "Opening an account is simple. Fill out our online form, submit required documents, and our team will guide you through the onboarding process.",
    },
    {
      question: "What services does Stack Intel provide?",
      answer:
        "We provide a range of financial products including investment management, digital wallets, loan services, and advanced analytics for traders and investors.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Your data security is our top priority. We use cutting-edge encryption and compliance measures to protect all customer information.",
    },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={ContactImage}
            alt="contacts-image"
            height={800}
            width={800}
            className="h-auto w-full md:w-[70%]"
          />
          <div className="flex flex-row justify-start items-start mt-4">
            <div className="flex flex-col justify-start">
              <p className="text-md pb-2 text-gray-800 mt-2">
                Call us for any questions or concerns.
              </p>
              <div className="flex flex-row items-center space-x-2">
                <BsTelephone className="text-xl" />
                <p className="text-base font-semibold">+91 81948 66666</p>
              </div>

              <div className="flex flex-row items-center space-x-2 pt-2">
                <CiMail className="text-xl" />
                <p className="text-base font-semibold">info@stackintel.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="mt-1 px-2 py-2 block w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-500 outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="mt-1 px-2 py-2 block w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 9127892787"
                className="mt-1 px-2 py-2 block w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                className="mt-1 px-2 py-2 block w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Your message..."
                className="mt-1 block w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                  I agree to the terms and conditions of{" "}
                  <span className="text-gray-600 font-semibold">
                    StackIntel
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded-sm bg-primaryColor text-white font-semibold hover:bg-blue-800"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-center mt-2">
                  {successMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-medium mb-6">
            Frequently Asked Questions
          </h2>
          <Image
            src={FaqImage}
            alt="faq-image"
            height={800}
            width={800}
            className="h-auto w-full md:w-[70%]"
          />
        </div>

        {/* Right Column with FAQs */}
        <div className="w-full lg:w-1/2">
          {faqs.map((faq, index) => {
            const isExpanded = index === expandedIndex;
            return (
              <div key={index} className="border border-gray-300 rounded mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-normal text-md pl-4 py-2 md:py-0">
                    {faq.question}
                  </h3>
                  <div
                    onClick={() => handleToggle(index)}
                    className={`h-10 w-10 flex items-center justify-center rounded-r-md cursor-pointer ${
                      isExpanded
                        ? "bg-transparent text-primaryColor"
                        : "bg-primaryColor text-white"
                    }`}
                  >
                    {isExpanded ? (
                      <AiOutlineMinus className="text-md" />
                    ) : (
                      <AiOutlinePlus className="text-md" />
                    )}
                  </div>
                </div>
                {isExpanded && (
                  <p className="text-md text-gray-600 mt-2 pl-4 pb-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
