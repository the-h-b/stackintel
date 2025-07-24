import React from 'react';
import Layout from '../../components/layouts/Layout';
import Link from 'next/link';

const DevelopersPage = () => {
  const quickStartGuides = [
    {
      title: "UPI Payments Integration",
      description: "Get started with UPI payments in 5 minutes",
      time: "5 min",
      difficulty: "Beginner",
      href: "/developers/guides/upi-integration",
      icon: "🚀"
    },
    {
      title: "Webhook Setup",
      description: "Configure webhooks for real-time notifications",
      time: "10 min",
      difficulty: "Intermediate",
      href: "/developers/guides/webhooks",
      icon: "🔔"
    },
    {
      title: "Authentication",
      description: "Secure your API calls with proper authentication",
      time: "15 min",
      difficulty: "Beginner",
      href: "/developers/guides/authentication",
      icon: "🔐"
    },
    {
      title: "Testing & Sandbox",
      description: "Test your integration in our sandbox environment",
      time: "20 min",
      difficulty: "Beginner",
      href: "/developers/guides/testing",
      icon: "🧪"
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/v1/payments/create",
      description: "Create a new UPI payment request",
      category: "Payments"
    },
    {
      method: "GET",
      endpoint: "/v1/payments/{id}",
      description: "Get payment status and details",
      category: "Payments"
    },
    {
      method: "POST",
      endpoint: "/v1/webhooks/register",
      description: "Register webhook endpoints",
      category: "Webhooks"
    },
    {
      method: "GET",
      endpoint: "/v1/transactions",
      description: "List all transactions with filters",
      category: "Transactions"
    }
  ];

  const sdks = [
    {
      language: "Node.js",
      description: "Official Node.js SDK with TypeScript support",
      version: "v2.1.0",
      downloads: "50K+",
      icon: "📗",
      installCommand: "npm install stackrails-node"
    },
    {
      language: "Python",
      description: "Python SDK with async/await support",
      version: "v1.8.0",
      downloads: "35K+",
      icon: "🐍",
      installCommand: "pip install stackrails-python"
    },
    {
      language: "PHP",
      description: "PHP SDK compatible with Laravel and Symfony",
      version: "v1.5.0",
      downloads: "25K+",
      icon: "🐘",
      installCommand: "composer require stackrails/php-sdk"
    },
    {
      language: "Java",
      description: "Java SDK for Spring Boot and enterprise applications",
      version: "v1.3.0",
      downloads: "20K+",
      icon: "☕",
      installCommand: "maven: com.stackrails:java-sdk:1.3.0"
    },
    {
      language: "React Native",
      description: "Mobile SDK for React Native applications",
      version: "v1.2.0",
      downloads: "15K+",
      icon: "📱",
      installCommand: "npm install stackrails-react-native"
    },
    {
      language: "Flutter",
      description: "Cross-platform SDK for Flutter applications",
      version: "v1.1.0",
      downloads: "12K+",
      icon: "🦋",
      installCommand: "flutter pub add stackrails_flutter"
    }
  ];

  const codeExample = `// Initialize StackRails client
const StackRails = require('stackrails-node');

const client = new StackRails({
  apiKey: 'your_api_key',
  environment: 'sandbox' // or 'production'
});

// Create a UPI payment
const payment = await client.payments.create({
  amount: 100.00,
  currency: 'INR',
  description: 'Test payment',
  customer: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+919876543210'
  },
  upi: {
    vpa: 'customer@paytm'
  }
});

console.log('Payment ID:', payment.id);
console.log('Payment URL:', payment.payment_url);`;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                StackRails Developer Hub
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Build powerful UPI payment solutions with our comprehensive APIs, SDKs, and developer tools. 
                Book a demo in minutes with our easy-to-use documentation and code examples.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/developers/quickstart"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span>🚀</span>
                  Quick Start Guide
                </Link>
                <Link
                  href="/developers/api-reference"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span>📚</span>
                  API Reference
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Guides */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-600">
                Get up and running quickly with our step-by-step guides
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartGuides.map((guide, index) => (
                <Link
                  key={index}
                  href={guide.href}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4">{guide.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {guide.time}
                    </span>
                    <span className="text-gray-500">{guide.difficulty}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Code Example Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Simple Integration
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Get started with just a few lines of code. Our SDKs handle the complexity 
                  so you can focus on building great products.
                </p>
                <div className="space-y-4">
                  {[
                    "🔐 Secure authentication built-in",
                    "⚡ Real-time payment status updates",
                    "🛡️ Automatic retry and error handling",
                    "📊 Comprehensive logging and monitoring"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-lg">{feature.split(' ')[0]}</span>
                      <span className="text-gray-700">{feature.substring(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">payment.js</span>
                </div>
                <pre className="text-sm text-green-400 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* SDKs Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Official SDKs & Libraries
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our official SDKs for your preferred programming language
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{sdk.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{sdk.language}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{sdk.version}</span>
                        <span>•</span>
                        <span>{sdk.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{sdk.description}</p>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <code className="text-green-400 text-sm">{sdk.installCommand}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* API Reference Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                API Reference
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive API documentation with examples and responses
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-gray-700">{endpoint.endpoint}</code>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-900">{endpoint.description}</div>
                      <div className="text-xs text-gray-500">{endpoint.category}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/developers/api-reference"
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span>📖</span>
                  View Full API Reference
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Developer Support
              </h2>
              <p className="text-xl text-gray-600">
                Get help when you need it with our comprehensive support resources
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Community Forum",
                  description: "Connect with other developers and get answers to your questions",
                  icon: "💬",
                  href: "/developers/community"
                },
                {
                  title: "24/7 Support",
                  description: "Get technical support from our expert developer team",
                  icon: "🛟",
                  href: "/support"
                },
                {
                  title: "Status Page",
                  description: "Monitor API status and get real-time updates on incidents",
                  icon: "📊",
                  href: "/status"
                }
              ].map((support, index) => (
                <Link
                  key={index}
                  href={support.href}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="text-4xl mb-4">{support.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {support.title}
                  </h3>
                  <p className="text-gray-600">{support.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building the future of payments with StackRails
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developers/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>🚀</span>
                Get API Keys
              </Link>
              <Link
                href="/developers/sandbox"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>🧪</span>
                Try Sandbox
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DevelopersPage;