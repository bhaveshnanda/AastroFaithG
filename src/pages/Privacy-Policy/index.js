// pages/privacy-policy.js
import Layout from "@/components/Layout/Layout";
import styles from "./Privacy.module.css";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className={styles.policyContainer}>
        <h1 className={styles.policyTitle}>Privacy Policy</h1>

        <p className={styles.policyText}>
          At <strong>AastroFaithG</strong>, your privacy is of utmost importance to us. 
          We are committed to protecting the personal information you share with us and ensuring that your experience on our platform is secure, transparent, and trustworthy. 
          This Privacy Policy explains what information we collect, how we use it, how we share it, and your rights regarding your data.
        </p>

        <p className={styles.policyText}>
          <strong>1. Information We Collect:</strong> We may collect the following types of information:
        </p>
        <ul className={styles.policyList}>
          <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, gender, and payment details.</li>
          <li><strong>Service Information:</strong> Details related to your bookings, consultations, and preferences.</li>
          <li><strong>Technical Information:</strong> IP address, device information, browser type, operating system, and usage patterns.</li>
          <li><strong>Communications:</strong> Any messages, emails, or support queries you send us.</li>
        </ul>

        <p className={styles.policyText}>
          <strong>2. How We Use Your Information:</strong> The information we collect is used for the following purposes:
        </p>
        <ul className={styles.policyList}>
          <li>To provide, maintain, and improve our astrology services and platform functionality.</li>
          <li>To process payments securely via Razorpay and manage booking records.</li>
          <li>To respond to customer service inquiries and support requests.</li>
          <li>To send updates, offers, and promotional communications (with your consent where required).</li>
          <li>To analyze user behavior and preferences to improve our services and user experience.</li>
        </ul>

        <p className={styles.policyText}>
          <strong>3. Payment Information:</strong> All payments are securely processed through <strong>Razorpay</strong>. 
          We do not store sensitive payment information such as credit/debit card numbers or CVV codes on our servers. 
          Payment data is handled in accordance with Razorpay’s security policies and applicable regulations.
        </p>

        <p className={styles.policyText}>
          <strong>4. Sharing of Information:</strong> We do not sell, trade, or rent your personal information to third parties. 
          Information may be shared in the following cases:
        </p>
        <ul className={styles.policyList}>
          <li>With service providers like Razorpay, who help us process payments or deliver our services.</li>
          <li>As required by law or legal process, such as responding to a court order or government request.</li>
          <li>To protect the rights, property, or safety of AastroFaithG, our users, or others.</li>
        </ul>

        <p className={styles.policyText}>
          <strong>5. Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar technologies to:
        </p>
        <ul className={styles.policyList}>
          <li>Enhance website functionality and user experience.</li>
          <li>Analyze website traffic and usage patterns.</li>
          <li>Serve personalized content and offers.</li>
        </ul>
        <p className={styles.policyText}>
          You can disable cookies in your browser settings, but this may affect some features of our platform.
        </p>

        <p className={styles.policyText}>
          <strong>6. Data Security:</strong> We implement technical, administrative, and physical safeguards to protect your personal data from unauthorized access, alteration, disclosure, or destruction. 
          However, no online system can be 100% secure, and we cannot guarantee absolute security.
        </p>

        <p className={styles.policyText}>
          <strong>7. Third-Party Services:</strong> Our website may include links or services from third-party providers, such as social media platforms, analytics tools, or payment gateways. 
          These third parties have their own privacy policies, and we are not responsible for their practices.
        </p>

        <p className={styles.policyText}>
          <strong>8. Children’s Privacy:</strong> Our services are not directed towards children under the age of 18. 
          We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it.
        </p>

        <p className={styles.policyText}>
          <strong>9. Your Rights:</strong> You have the following rights regarding your personal data:
        </p>
        <ul className={styles.policyList}>
          <li>Access and obtain a copy of your personal data.</li>
          <li>Request corrections to inaccurate or incomplete data.</li>
          <li>Request deletion of your personal data, subject to legal obligations.</li>
          <li>Withdraw consent for marketing communications at any time.</li>
        </ul>
        <p className={styles.policyText}>
          To exercise your rights, please contact us at <a href="mailto:aastrofaithg@gmail.com">aastrofaithg@gmail.com</a>.
        </p>

        <p className={styles.policyText}>
          <strong>10. Policy Updates:</strong> We may update this Privacy Policy from time to time to reflect changes in practices, technology, or legal requirements. 
          We encourage you to review this policy periodically. Continued use of our platform indicates acceptance of any updated terms.
        </p>

        <p className={styles.policyText}>
          By using <strong>AastroFaithG</strong>, you consent to the collection, use, and processing of your personal information as described in this Privacy Policy.
        </p>
      </div>
    </Layout>
  );
}
