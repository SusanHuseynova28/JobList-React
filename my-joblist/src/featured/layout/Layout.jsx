import React, { useState } from 'react';
import Sidebar from '../../components/SideBar';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaRegTrashCan } from "react-icons/fa6";

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    jobId: '',
    jobTitle: '',
    companyName: '',
    location: '',
    experience: '',
    position: '',
    type: 'Full Time',
    status: 'Active',
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    setJobs((prevJobs) => [...prevJobs, jobDetails]);
    setJobDetails({
      jobId: '',
      jobTitle: '',
      companyName: '',
      location: '',
      experience: '',
      position: '',
      type: 'Full Time',
      status: 'Active',
    });
    handleCloseModal();
  };

  const handleDeleteJob = (index) => {
    setJobs((prevJobs) => prevJobs.filter((_, i) => i !== index));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="">
          <div className="p-4 bg-[#222736] min-h-screen text-white">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Jobs Lists</h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white mt-10 py-2 px-4 rounded"
                onClick={handleOpenModal}
              >
                Add New Job
              </button>
            </div>
            {jobs.length > 0 && (
              <table className="w-full text-white mt-6 ">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Job Id</th>
                    <th className="px-4 py-2">Job Title</th>
                    <th className="px-4 py-2">Company Name</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Experience</th>
                    <th className="px-4 py-2">Position</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{job.jobId}</td>
                      <td className="border px-4 py-2">{job.jobTitle}</td>
                      <td className="border px-4 py-2">{job.companyName}</td>
                      <td className="border px-4 py-2">{job.location}</td>
                      <td className="border px-4 py-2">{job.experience}</td>
                      <td className="border px-4 py-2">{job.position}</td>
                      <td className="border px-4 py-2">{job.type}</td>
                      <td className="border px-4 py-2">{job.status}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded mx-auto"
                          onClick={() => handleDeleteJob(index)}
                        >
                           
                          <FaRegTrashCan />
                        
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {children}
        </main>
        <Footer />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-[#222736] p-6 mt-4 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-white">Add Job</h2>
              <button className="text-white" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <form onSubmit={handleAddJob}>
              <div className="mb-4">
                <label className="block text-white mb-1">Job Id</label>
                <input
                  type="text"
                  name="jobId"
                  value={jobDetails.jobId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                  placeholder="Insert Job Id"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={jobDetails.jobTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                  placeholder="Insert Job Title"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={jobDetails.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                  placeholder="Insert Company Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={jobDetails.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                  placeholder="Insert Location"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={jobDetails.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                  placeholder="Insert Experience"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  value={jobDetails.position}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                  placeholder="Insert Position"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Type</label>
                <select
                  name="type"
                  value={jobDetails.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-white mb-1">Status</label>
                <select
                  name="status"
                  value={jobDetails.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
