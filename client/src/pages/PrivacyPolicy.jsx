import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mt-15 mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>

      <section className="mb-8">
        <p>
          <strong>Internfy</strong> website is owned by <strong>INTERNFY</strong>, which is a data controller of your personal data.
        </p>
        <p className="mt-4">
          We have adopted this Privacy Policy, which determines how we are processing the information collected by Internfy, and why we must collect certain personal data about you. Please read this Privacy Policy before using the Internfy website.
        </p>
        <p className="mt-4">
          We take care of your personal data and undertake to guarantee its confidentiality and security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Personal information we collect</h2>
        <p>
          When you visit Internfy, we automatically collect certain information about your device such as browser, IP address, time zone, and cookies. As you browse, we gather data on pages viewed, referring sites, and user interaction — referred to as “Device Information.”
        </p>
        <p className="mt-4">
          We may also collect information you provide during registration (e.g., Name, Address, Payment Info) to fulfill our agreement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why do we process your data?</h2>
        <p>
          Our top priority is customer data security. We process minimal data necessary to maintain the website and prevent abuse. Automatically collected data is used only for analytics and is not used to identify individuals.
        </p>
        <p className="mt-4">
          You can visit our site anonymously. However, to use features like newsletters or contact forms, you may need to provide information such as name, email, or phone. For clarification, contact us at <a href="mailto:contact@internfy.in" className="text-blue-600 underline">internfy.in@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Your rights (EU Residents)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>The right to be informed</li>
          <li>The right of access</li>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to restrict processing</li>
          <li>The right to data portability</li>
          <li>The right to object</li>
          <li>Rights in relation to automated decision-making and profiling</li>
        </ul>
        <p className="mt-4">
          We process your data to fulfill contracts (e.g., orders) or pursue legitimate interests. Your data may be transferred outside of Europe, including to Canada or the U.S.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Links to other websites</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for their content or privacy practices. Always review their privacy policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Information security</h2>
        <p>
          We use secure servers and safeguard measures to protect your data from unauthorized access. However, no method over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Legal disclosure</h2>
        <p>
          We may disclose information if required by law or necessary to protect rights, ensure safety, investigate fraud, or respond to government requests.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact information</h2>
        <p>
          If you have questions about this policy or your personal data, please email us at <a href="mailto:contact@internfy.in" className="text-blue-600 underline">internfy.in@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;