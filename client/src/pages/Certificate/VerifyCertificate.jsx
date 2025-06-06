import React, { useState } from 'react';
import axios from "../../axios/AxiosInstance"

export default function VerifyCertificatePage() {
  const [certNo, setCertNo] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!certNo.trim()) {
      setError('Please enter a certificate number.');
      setCertificate(null);
      return;
    }

    try {
      setLoading(true);
      setError('');
      setCertificate(null);

      const res = await axios.get(`/certificate/verify/${certNo}`);
      setCertificate(res.data);
    } catch (err) {
      setError('No certificate found with this number.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">Verify Certificate</h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter certificate number"
            value={certNo}
            onChange={(e) => setCertNo(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && (
          <div className="text-red-600 text-center font-medium mb-4">
            {error}
          </div>
        )}

        {certificate && (
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Certificate Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <Detail label="Student Name" value={certificate.studentName} />
              <Detail label="Domain" value={certificate.domain} />
              <Detail label="Duration" value={certificate.duration} />
              <Detail label="Certification No" value={certificate.certificationNo} />
              <Detail label="Starting Date" value={new Date(certificate.startingDate).toLocaleDateString()} />
              <Detail label="Award Date" value={new Date(certificate.awardDate).toLocaleDateString()} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Reusable detail component
function Detail({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-base font-medium">{value}</p>
    </div>
  );
}
