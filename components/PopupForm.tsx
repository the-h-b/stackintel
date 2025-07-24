"use client";

import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

interface ModalProps {
  handleCloseModal(): void;
  isModalOpen: boolean;
}

interface FormData {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  designation: string;
  reason: string;
}

const PopupForm = ({ handleCloseModal, isModalOpen }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    designation: "",
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Handle form input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
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
          name: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          designation: "",
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

  console.log(isModalOpen);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="bg-white w-[90%] md:w-[50%] lg:w-[40%] p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-left">Book a Demo</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 focus:outline-none rounded-md"
          />
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
            className="w-full p-2 border border-gray-300 focus:outline-none rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 focus:outline-none rounded-md"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-2 border border-gray-300 focus:outline-none rounded-md"
          />
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            required
            className="w-full p-2 border border-gray-300 focus:outline-none rounded-md"
          />
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason for contacting us"
            required
            className="w-full p-2 border border-gray-300 focus:outline-none rounded-md h-24"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-2 bg-blue-800 text-white rounded-md"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-center mt-2">{successMessage}</p>
        )}
        <button
          onClick={handleCloseModal}
          className="absolute text-3xl top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
