
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          At <strong>ThematicWeb</strong>, accessible from{' '}
          <a href="https://thematicwe.web.app" className="text-blue-500 underline">
            https://thematicwe.web.app
          </a>
          , your privacy is one of our top priorities. This Privacy Policy outlines the types of information we
          collect and how we use, store, and protect it.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
          <p className="text-gray-700">
            While using our Service, we may ask you to provide certain personally identifiable information that can
            be used to contact or identify you. This information may include but is not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage data (e.g., IP address, browser type, and pages visited)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
          <p className="text-gray-700">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3">
            <li>To provide, operate, and maintain our website and services</li>
            <li>To improve your experience and respond to your inquiries</li>
            <li>To send you updates, marketing communications, or promotional materials</li>
            <li>To detect and prevent fraudulent or malicious activities</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Security</h2>
          <p className="text-gray-700">
            We prioritize the protection of your personal information. Our website and systems implement security
            measures such as encryption and restricted access to safeguard your data. However, no method of
            transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cookies</h2>
          <p className="text-gray-700">
            We use cookies to enhance your browsing experience. Cookies are small files stored on your device to help
            us understand how you interact with our website. You can choose to disable cookies in your browser
            settings, but doing so may affect the functionality of our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Third-Party Services</h2>
          <p className="text-gray-700">
            We may use third-party services, such as payment gateways or analytics providers, that collect
            information to facilitate our services. These third parties have their own privacy policies, and we
            recommend reviewing them.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Rights</h2>
          <p className="text-gray-700">
            As a user, you have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3">
            <li>Access and request a copy of your personal data</li>
            <li>Request the correction or deletion of your data</li>
            <li>Withdraw consent for data collection and processing</li>
          </ul>
          <p className="text-gray-700 mt-3">
            To exercise these rights, please contact us using the details below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the
            updated date at the top. We encourage you to review this page periodically to stay informed.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <ul className="list-inside text-gray-700 mt-3">
            <li>Email: <a href="mailto:support@thematicweb.com" className="text-blue-500 underline">support@thematicweb.com</a></li>
            <li>Contact page: <a href="https://thematicwe.web.app/contact" className="text-blue-500 underline">https://thematicwe.web.app/contact</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;