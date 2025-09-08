// pages/disclaimer.js
import Layout from "@/components/Layout/Layout";
import styles from "./Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <Layout>
      <div className={styles.policyContainer}>
        <h1 className={styles.policyTitle}>Disclaimer</h1>

        <p className={styles.policyText}>
          The content, services, and information provided on <strong>AastroFaithG</strong> website, mobile application, or through any of our platforms are intended for general informational and entertainment purposes only. 
          By accessing or using our services, you acknowledge and agree to the terms outlined in this Disclaimer.
        </p>

        <p className={styles.policyText}>
          <strong>1. No Professional Advice:</strong> All astrology readings, predictions, horoscopes, consultations, and related services offered on AastroFaithG are based on traditional astrological interpretations. 
          They are not intended as a substitute for professional advice in legal, medical, financial, psychological, or other specialized fields. 
          Users should consult qualified professionals for any matters requiring expert guidance.
        </p>

        <p className={styles.policyText}>
          <strong>2. Accuracy of Information:</strong> Astrology is interpretive and inherently subjective. 
          While we strive to provide accurate information based on astrological principles, AastroFaithG does not warrant, guarantee, or make representations regarding the accuracy, completeness, reliability, or currency of any predictions, readings, or advice provided.
        </p>

        <p className={styles.policyText}>
          <strong>3. Personal Responsibility:</strong> Users are solely responsible for any decisions, actions, or outcomes resulting from the use of our services. 
          By using our platform, you agree that you are using the information at your own risk and discretion. 
          AastroFaithG shall not be held liable for any losses, damages, or consequences that arise from reliance on our services.
        </p>

        <p className={styles.policyText}>
          <strong>4. Health and Medical Disclaimer:</strong> Our services are not intended to diagnose, treat, or cure any medical conditions. 
          You should not ignore professional medical advice or delay seeking it because of any content, prediction, or consultation provided by AastroFaithG.
        </p>

        <p className={styles.policyText}>
          <strong>5. Financial and Legal Disclaimer:</strong> Any financial, investment, legal, or career-related suggestions provided by our astrologers are for informational purposes only. 
          They are not a substitute for professional financial, legal, or career advice. Users are responsible for consulting qualified professionals before making any financial or legal decisions.
        </p>

        <p className={styles.policyText}>
          <strong>6. Third-Party Services and Links:</strong> AastroFaithG may contain links to external websites, apps, or services. We are not responsible for the content, privacy practices, or accuracy of information provided by these third-party services. 
          Users access third-party services at their own risk.
        </p>

        <p className={styles.policyText}>
          <strong>7. Intellectual Property:</strong> All content on AastroFaithG, including text, images, videos, graphics, software, and logos, is the property of AastroFaithG or its licensors. 
          You may not copy, reproduce, distribute, or modify any part of our content without explicit written permission.
        </p>

        <p className={styles.policyText}>
          <strong>8. Payment Disclaimer:</strong> All payments for our services are securely processed via Razorpay. 
          Refunds are governed by our <a href="/refund-cancellation-policy">Refund & Cancellation Policy</a>. 
          Users are responsible for reviewing bookings, prices, and service details before completing payment.
        </p>

        <p className={styles.policyText}>
          <strong>9. Limitation of Liability:</strong> To the maximum extent permitted by law, AastroFaithG, its affiliates, employees, or service providers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services or reliance on any information provided. 
          This includes, but is not limited to, financial loss, emotional distress, or health-related consequences.
        </p>

        <p className={styles.policyText}>
          <strong>10. User Conduct:</strong> Users agree not to misuse the platform, post offensive content, attempt unauthorized access, or interfere with platform functionality. 
          Violation of this disclaimer may result in suspension or termination of access without prior notice.
        </p>

        <p className={styles.policyText}>
          <strong>11. Children's Disclaimer:</strong> Our services are intended for users aged 18 years or older. 
          We do not knowingly collect personal information from children under 18. If we become aware of such data, it will be deleted immediately.
        </p>

        <p className={styles.policyText}>
          <strong>12. Updates and Changes:</strong> AastroFaithG reserves the right to modify or update this Disclaimer at any time without prior notice. 
          Continued use of our services constitutes acceptance of the updated Disclaimer.
        </p>

        <p className={styles.policyText}>
          By using <strong>AastroFaithG</strong>, you acknowledge that you have read, understood, and agreed to this Disclaimer. 
          For questions or clarifications, please contact our support team at <a href="mailto:aastrofaithg@gmail.com">aastrofaithg@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}
