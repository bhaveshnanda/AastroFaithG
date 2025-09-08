// pages/terms-conditions.js
import Layout from "@/components/Layout/Layout";
import styles from "./Terms.module.css";

export default function TermsAndConditions() {
  return (
    <Layout>
      <div className={styles.policyContainer}>
        <h1 className={styles.policyTitle}>Terms & Conditions</h1>

        <p className={styles.policyText}>
          Welcome to <strong>AastroFaithG</strong>. By accessing or using our
          services, you agree to comply with and be bound by the following Terms
          and Conditions. Please read them carefully before making a booking or
          using any of our services.
        </p>

        <p className={styles.policyText}>
          <strong>1. Service Disclaimer:</strong> Our astrology services, 
          consultations, and predictions are based on traditional astrological 
          principles and interpretations. All services are provided for 
          informational and entertainment purposes only. You acknowledge that 
          astrology is not a substitute for professional advice in medical, 
          legal, financial, or other specialized fields. Decisions made based 
          on astrology are your own responsibility.
        </p>

        <p className={styles.policyText}>
          <strong>2. User Eligibility:</strong> By using our services, you confirm 
          that you are at least 18 years old and have the legal capacity to enter 
          into binding agreements. You agree to provide accurate and complete 
          information during registration and booking.
        </p>

        <p className={styles.policyText}>
          <strong>3. Payment Terms:</strong> All payments for services must be 
          completed through our authorized payment gateway, Razorpay. You agree 
          to provide valid payment information and authorize AastroFaithG to 
          process the transaction. All payments are subject to Razorpay&apos;s terms 
          and conditions. Charges once made are final and non-refundable, 
          unless otherwise specified in our Refund & Cancellation Policy.
        </p>

        <p className={styles.policyText}>
          <strong>4. Intellectual Property:</strong> All content on the 
          AastroFaithG platform, including but not limited to text, graphics, 
          logos, images, videos, and software, is the property of AastroFaithG 
          or its licensors. You are prohibited from copying, distributing, 
          modifying, or creating derivative works without explicit written 
          permission from AastroFaithG.
        </p>

        <p className={styles.policyText}>
          <strong>5. User Conduct:</strong> You agree not to misuse the platform, 
          post offensive content, attempt unauthorized access, or interfere 
          with the functionality of our services. Any violation may result in 
          suspension or termination of your access without prior notice.
        </p>

        <p className={styles.policyText}>
          <strong>6. Privacy:</strong> Your personal information is collected 
          and handled in accordance with our Privacy Policy. By using our 
          services, you consent to the collection, use, and storage of your 
          information for service delivery and legal compliance purposes.
        </p>

        <p className={styles.policyText}>
          <strong>7. Limitation of Liability:</strong> AastroFaithG shall not 
          be liable for any direct, indirect, incidental, or consequential 
          damages arising from the use or inability to use our services, 
          including but not limited to financial losses, emotional distress, 
          or missed opportunities.
        </p>

        <p className={styles.policyText}>
          <strong>8. Termination:</strong> AastroFaithG reserves the right to 
          suspend or terminate your access to services at any time, without 
          notice, for violation of these Terms & Conditions or for any reason 
          deemed necessary by the company.
        </p>

        <p className={styles.policyText}>
          <strong>9. Governing Law:</strong> These Terms & Conditions are 
          governed by and construed in accordance with the laws of India. 
          Any disputes arising under or in connection with these terms shall 
          be subject to the exclusive jurisdiction of the courts in India.
        </p>

        <p className={styles.policyText}>
          <strong>10. Updates:</strong> AastroFaithG may update these Terms & 
          Conditions from time to time. Continued use of the platform after 
          any modifications constitutes your acceptance of the updated terms. 
          We encourage you to review these terms periodically.
        </p>

        <p className={styles.policyText}>
          By using AastroFaithG services, you confirm that you have read, 
          understood, and agreed to these Terms & Conditions. For any 
          questions or clarifications, please contact our support team at{" "}
          <a href="mailto:aastrofaithg@gmail.com">aastrofaithg@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}
