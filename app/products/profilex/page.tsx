import React from 'react';

const ProfileXPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ProfileX</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive identity verification and risk assessment solutions for secure onboarding and fraud prevention.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Onboarding</h3>
            <p className="text-gray-600">
              Streamline your customer onboarding process with automated identity verification and document validation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Profiling</h3>
            <p className="text-gray-600">
              Build comprehensive customer profiles with advanced analytics and risk scoring capabilities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fraud Prevention</h3>
            <p className="text-gray-600">
              Protect your business with real-time fraud detection and prevention mechanisms.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Skip Tracing</h3>
            <p className="text-gray-600">
              Locate and verify customer information with advanced skip tracing capabilities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Nominee Tracing</h3>
            <p className="text-gray-600">
              Verify nominee details and relationships with comprehensive tracing solutions.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started with ProfileX
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileXPage;