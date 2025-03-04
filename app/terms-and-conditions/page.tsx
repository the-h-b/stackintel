import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">TERMS AND CONDITIONS</h1>
      <p className="text-gray-500 mb-8">Effective Date: 06/09/2024</p>

      {/* Introduction */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">INTRODUCTION</h2>
        <p className="text-gray-700">
          StackIntel Private Limited (hereinafter referred to as "StackIntel",
          "we", "us" or "our") provides financial technology services through
          its platforms Card91 and Xoltt. These Terms and Conditions ("Terms")
          govern your use of our services.
        </p>
      </section>

      {/* Definitions */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">DEFINITIONS</h2>
        <p className="text-gray-700 mb-4">
          Unless the context otherwise requires:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Affiliate:</strong> Any entity controlled by StackIntel
          </li>
          <li>
            <strong>Client:</strong> Any business entity using our services
          </li>
          <li>
            <strong>Services:</strong> Financial technology solutions provided
            via Card91/Xoltt platforms
          </li>
          <li>
            <strong>End Customer:</strong> Users of Client's services who
            interact with our platform
          </li>
        </ul>
      </section>

      {/* Scope of Services */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">SCOPE OF SERVICES</h2>
        <p className="text-gray-700 mb-4">
          StackIntel agrees to provide the following services:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Prepaid card/wallet issuance and management</li>
          <li>Transaction processing and settlement</li>
          <li>API integration for business control</li>
          <li>AI-powered transaction monitoring</li>
          <li>Customer support services</li>
        </ul>
      </section>

      {/* Client Obligations */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">CLIENT OBLIGATIONS</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Ensure timely payment of service fees</li>
          <li>Maintain data accuracy and regulatory compliance</li>
          <li>Provide necessary documentation for KYC verification</li>
          <li>Implement proper security measures for API access</li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">INTELLECTUAL PROPERTY</h2>
        <p className="text-gray-700">
          All intellectual property rights in the platforms remain with
          StackIntel. Clients receive a limited, non-exclusive license to use
          the platform during the term of this agreement.
        </p>
      </section>

      {/* Termination */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">TERMINATION</h2>
        <p className="text-gray-700 mb-4">
          Either party may terminate this agreement with 90 days written notice.
          Immediate termination may occur if:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>There's a material breach of terms</li>
          <li>Fraudulent activity is detected</li>
          <li>Regulatory requirements mandate termination</li>
        </ul>
      </section>

      {/* Governing Law */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">GOVERNING LAW</h2>
        <p className="text-gray-700">
          This agreement shall be governed by and construed in accordance with
          the laws of India. Any disputes shall be subject to the exclusive
          jurisdiction of courts in Bangalore.
        </p>
      </section>

      {/* Contact Information */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">CONTACT INFORMATION</h2>
        <p className="text-gray-700">
          For any inquiries, contact our support team:
          <br />
          <a
            href="mailto:support@stackIntel.in"
            className="text-blue-600 hover:underline"
          >
            support@stackIntel.in
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
