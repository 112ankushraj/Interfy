import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from '../../axios/AxiosInstance';

export default function CreateCertificate() {
  const [formData, setFormData] = useState({
    studentName: '',
    domain: '',
    duration: '',
    certificationNo: '',
    startingDate: '',
    awardDate: '',
    adminKey: '',
  });

  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const { studentName, domain, duration, certificationNo, startingDate, awardDate, adminKey } = formData;

    if (!studentName || !domain || !duration || !certificationNo || !startingDate || !awardDate) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    try {
      setLoading(true);
      await axios.post('/certificate/create', formData);
      setMessage({ type: 'success', text: 'Certificate created successfully!' });
      setFormData({
        studentName: '',
        domain: '',
        duration: '',
        certificationNo: '',
        startingDate: '',
        awardDate: '',
        adminKey: '',
      });
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.response?.data?.message || 'Error creating certificate.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Internship Certificate | Admin - Internfy</title>
        <meta
          name="description"
          content="Create and manage internship certificates securely via Internfy's admin panel. Ensure students receive verified, trackable credentials."
        />
        <meta
          name="keywords"
          content="Internfy, create certificate, internship admin, generate certificate, admin dashboard, Internfy admin"
        />
        <meta property="og:title" content="Create Certificate - Internfy Admin" />
        <meta
          property="og:description"
          content="Admin interface for generating official internship certificates on Internfy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.internfy.in/admin/certificate-create" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 via-white to-green-50 p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Create Certificate</h1>

          {message.text && (
            <div
              className={`mb-4 text-center font-medium ${
                message.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input name="studentName" label="Student Name" value={formData.studentName} onChange={handleChange} />
            <Input name="domain" label="Domain" value={formData.domain} onChange={handleChange} />
            <Input name="duration" label="Duration" value={formData.duration} onChange={handleChange} />
            <Input name="certificationNo" label="Certification No" value={formData.certificationNo} onChange={handleChange} />
            <Input name="startingDate" label="Starting Date" type="date" value={formData.startingDate} onChange={handleChange} />
            <Input name="awardDate" label="Award Date" type="date" value={formData.awardDate} onChange={handleChange} />
            <Input name="adminKey" label="Admin Key" type="text" value={formData.adminKey} onChange={handleChange} />

            <div className="col-span-full">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
              >
                {loading ? 'Creating...' : 'Create Certificate'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function Input({ name, label, type = 'text', value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
