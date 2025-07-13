import React from 'react';

const CollectBotPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CollectBot</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate frictionless payment solutions in your product with comprehensive payin, payout, and virtual account features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payin</h3>
            <p className="text-gray-600">
              Accept payments seamlessly with multiple payment methods including UPI, cards, net banking, and wallets.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payout</h3>
            <p className="text-gray-600">
              Disburse payments quickly and securely to your customers, vendors, and partners with real-time processing.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Virtual Account Number</h3>
            <p className="text-gray-600">
              Generate unique virtual account numbers for each customer to automate payment reconciliation and tracking.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Real-time payment processing
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Multi-currency support
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Advanced fraud detection
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Comprehensive reporting
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              API-first architecture
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              24/7 customer support
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started with CollectBot
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectBotPage;