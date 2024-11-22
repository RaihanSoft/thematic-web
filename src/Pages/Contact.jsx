import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const departmentOptions = [
    { label: "Support", value: "support" },
    { label: "Sales", value: "sales" },
    { label: "Marketing", value: "marketing" },
  ];

  const professionOptions = [
    { label: "Developer", value: "developer" },
    { label: "Designer", value: "designer" },
    { label: "Manager", value: "manager" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success alert
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      website: "",
      message: "",
    });
    setSelectedDepartments([]);
    setSelectedProfessions([]);
  };

  return (
    <div
      className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-2xl rounded-md animate__animated animate__fadeIn"
      data-aos="fade-up"
    >
      <h1 className="text-center text-3xl font-bold my-4 w-[50%] pb-2 border-b-2 mx-auto">Contact</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Input */}

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Website Input */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="https://example.com"
          />
        </div>

        {/* Select Department */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Select Department<span className="text-red-500">*</span>
          </label>
          <MultiSelect
            options={departmentOptions}
            value={selectedDepartments}
            onChange={setSelectedDepartments}
            labelledBy="Choose departments"
            className="mt-2"
          />
        </div>

        {/* Profession */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Profession<span className="text-red-500">*</span>
          </label>
          <MultiSelect
            options={professionOptions}
            value={selectedProfessions}
            onChange={setSelectedProfessions}
            labelledBy="Choose professions"
            className="mt-2"
          />
        </div>

        {/* Message */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;