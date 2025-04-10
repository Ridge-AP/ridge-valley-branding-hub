
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Last updated: April 10, 2025"
      />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              At Ridge Valley Co, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our business.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul>
              <li>Personal data: Name, email address, telephone number, and other information you voluntarily provide.</li>
              <li>Usage data: Information about how you use our website, products, and services.</li>
              <li>Technical data: IP address, browser type, device information, and cookies.</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>
              We may use the information we collect about you to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, including for customer service, marketing, and promotional purposes</li>
              <li>Send you emails and newsletters</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul>
              <li>By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
              <li>Business Transfers: If we or our subsidiaries are involved in a merger, acquisition, or sale of all or a portion of assets.</li>
              <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf.</li>
            </ul>
            
            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or other type of misuse.
            </p>
            
            <h2>Your Choices</h2>
            <p>
              You may at any time review or change the information in your account or terminate your account by:
            </p>
            <ul>
              <li>Logging into your account settings and updating your information</li>
              <li>Contacting us using the contact information provided below</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              Ridge Valley Co<br />
              Email: privacy@ridgevalley.co<br />
              Phone: (800) 123-4567
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
