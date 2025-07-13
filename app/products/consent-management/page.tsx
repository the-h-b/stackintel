import React from 'react';

const ConsentManagementPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Consent Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build user trust with respectful data processing and retention practices. Ensure DPDP compliance and manage customer consent effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">DPDP Consent Manager</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive consent management solution to ensure compliance with Digital Personal Data Protection regulations.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                DPDP Act 2023 compliance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Consent collection & management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Data breach notifications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Right to erasure
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Blutic B2C</h3>
            <p className="text-gray-600 mb-4">
              Business-to-consumer consent management platform for building trust and transparency with your customers.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Customer consent dashboard
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Granular consent controls
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Consent withdrawal options
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Data transparency portal
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Consent Management Matters</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <p className="text-gray-600">Customer trust improvement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">DPDP compliance</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
              <p className="text-gray-600">Reduced legal risks</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started with Consent Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentManagementPage;