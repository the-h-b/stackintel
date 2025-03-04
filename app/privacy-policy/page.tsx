import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">PRIVACY POLICY</h1>
      <p className="text-gray-500 mb-8">Effective Date: 06/09/2024</p>

      {/* Scope & Application */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">SCOPE AND APPLICATION</h2>
        <p className="text-gray-700">
          This Privacy Policy covers the practices for handling and securing
          your Personal Information by StackIntel, its products, platforms,
          brands , and its affiliates. This Privacy Policy is applicable to
          persons who procure any products or services provided by or
          facilitated by StackIntel through our mobile applications
          (Android/iOS), websites, mobile sites, and other online channels.
        </p>
      </section>

      {/* Commitment */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">COMMITMENT</h2>
        <p className="text-gray-700">
          StackIntel is committed to protecting user privacy and maintaining the
          security of personal data. We ensure lawful, legitimate, and
          responsible processing of information while respecting your right to
          privacy. We encourage you to read this policy to understand our data
          practices.
        </p>
      </section>

      {/* Collection of Information */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          COLLECTION OF INFORMATION
        </h2>
        <p className="text-gray-700">
          StackIntel collects information through various channels including
          voluntary submissions, service requests, and third-party
          communications to provide our Services.
        </p>
      </section>

      {/* Minor Users */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">MINOR USERS</h2>
        <p className="text-gray-700">
          Minimum age for registration is 18 or contractual consent age. Minor
          Users may access limited services with parental/guardian consent. We
          collect minimal necessary information for account creation and
          restrict data collection where possible.
        </p>
      </section>

      {/* Consent */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">CONSENT</h2>
        <p className="text-gray-700">
          By using our Services, you consent to our data practices.
          Parents/guardians must provide consent for Minor Users. Continued use
          constitutes acceptance of this policy.
        </p>
      </section>

      {/* Personal Information Collected */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          PERSONAL INFORMATION COLLECTED
        </h2>
        <p className="text-gray-700 mb-4">We collect:</p>
        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li>Contact details (name, email, phone, address)</li>
          <li>Demographic information</li>
          <li>Financial information (bank details, transaction records)</li>
          <li>KYC documents</li>
          <li>Profile information</li>
          <li>Communication records</li>
        </ul>
        <p className="text-gray-700">
          We do not trade or sell your personal information.
        </p>
      </section>

      {/* Non-Personal Information */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          NON-PERSONAL INFORMATION
        </h2>
        <p className="text-gray-700">
          Includes IP addresses, browser details, device information, and
          aggregated data. Used for analytics, personalization, and service
          improvement.
        </p>
      </section>

      {/* Android/iOS Permissions */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">ANDROID/IOS PERMISSIONS</h2>
        <p className="text-gray-700 mb-4">Required permissions include:</p>
        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li>Device information (OS version, hardware model)</li>
          <li>Contacts access</li>
          <li>Location services</li>
          <li>SMS access for OTP verification</li>
          <li>Camera and file access</li>
          <li>Phone call capabilities</li>
        </ul>
      </section>

      {/* Information Sharing */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">INFORMATION SHARING</h2>
        <p className="text-gray-700">
          Information may be shared with:
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Authorized service partners</li>
            <li>Financial utilities for verification</li>
            <li>Legal authorities when required</li>
            <li>Third-party payment processors</li>
          </ul>
        </p>
      </section>

      {/* Data Security */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">DATA SECURITY</h2>
        <p className="text-gray-700">
          We implement industry-standard security measures including encryption,
          access controls, and regular audits. However, no system can guarantee
          absolute security.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">THIRD-PARTY SERVICES</h2>
        <p className="text-gray-700">
          Payment gateways and other third-party services have their own privacy
          policies. We are not responsible for their practices.
        </p>
      </section>

      {/* Your Rights */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">YOUR RIGHTS</h2>
        <p className="text-gray-700 mb-4">You have the right to:</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Access your personal data</li>
          <li>Update or correct information</li>
          <li>Request data deletion</li>
        </ul>
      </section>

      {/* Changes to Policy */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">CHANGES TO POLICY</h2>
        <p className="text-gray-700">
          We may update this policy periodically. Material changes will be
          communicated through our channels.
        </p>
      </section>

      {/* Contact Information */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">CONTACT INFORMATION</h2>
        <p className="text-gray-700">
          For inquiries or complaints, contact our Grievance Officer:
          <br />
          <br />
          <a
            href="mailto: support@stackIntel.in"
            className="text-blue-600 hover:underline ml-1"
          >
            support@stackIntel.in
          </a>
          <br />
          Available Monday-Friday, 10:30 AM - 6:00 PM IST
        </p>
      </section>
    </div>
  );
};

export default page;
