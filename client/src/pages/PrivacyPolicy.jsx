import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      {/* SEO & Structured Data */}
      <Helmet>
        <title>Privacy Policy | Internfy</title>
        <meta
          name="description"
          content="Read Internfy's Privacy Policy to learn how your personal data is collected, used, and protected."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Internfy, data protection, GDPR, personal information, user rights"
        />
        <meta property="og:title" content="Privacy Policy | Internfy" />
        <meta
          property="og:description"
          content="How Internfy collects and processes your personal data in accordance with privacy laws and best practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.internfy.in/privacy-policy" />
        <link rel="canonical" href="https://www.internfy.in/privacy-policy" />

        {/* Structured Data using JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | Internfy",
            "url": "https://www.internfy.in/privacy-policy",
            "description":
              "Learn about Internfy's Privacy Policy regarding data collection, security, and your rights under GDPR.",
            "publisher": {
              "@type": "Organization",
              "name": "Internfy",
              "url": "https://www.internfy.in"
            }
          })}
        </script>
      </Helmet>

      {/* Your original content */}
      <div className="max-w-5xl mt-5 mx-auto px-4 py-10 text-gray-800">
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

        {/* ... All other sections remain unchanged ... */}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact information</h2>
          <p>
            If you have questions about this policy or your personal data, please email us at{" "}
            <a href="mailto:contact@internfy.in" className="text-blue-600 underline">
              internfy.in@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
