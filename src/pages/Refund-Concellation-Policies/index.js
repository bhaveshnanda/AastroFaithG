// pages/refund-cancellation-policy.js
import Layout from "@/components/Layout/Layout";
import styles from "./Policy.module.css";

export default function RefundCancellationPolicy() {
  return (
    <Layout>
      <div className={styles.policyContainer}>
        <h1 className={styles.policyTitle}>Refund & Cancellation Policy</h1>

        <p className={styles.policyText}>
          At <strong>Your Aastro Faith G</strong>, we believe in delivering a
          transparent and fair service experience to all our customers. This
          Refund & Cancellation Policy clearly outlines our stance on
          cancellations, refunds, and rescheduling to ensure that all clients
          are aware of our terms before making a booking. By proceeding with a
          booking and completing a payment through our platform, you acknowledge
          and agree to the terms stated below.
        </p>

        <p className={styles.policyText}>
          <strong>Cancellation Policy:</strong> Once a booking has been
          confirmed and payment has been made, cancellations are strictly not
          permitted. We request customers to carefully review all details before
          confirming an appointment or service. This ensures that our resources
          are effectively utilized and that the time slots allocated for you are
          honored without disruption.
        </p>

        <p className={styles.policyText}>
          <strong>Refund Policy:</strong> Payments made for bookings,
          consultations, or services are non-refundable under any
          circumstances. Once the transaction is completed through our platform
          and processed via Razorpay, the amount cannot be reversed, withdrawn,
          or refunded. Customers are advised to proceed with bookings only after
          they are certain of their availability and intent to use the service.
        </p>

        <p className={styles.policyText}>
          <strong>Rescheduling of Appointments:</strong> While cancellations and
          refunds are not allowed, we understand that unforeseen situations may
          arise. In such cases, customers are permitted to reschedule their
          appointments subject to availability. Rescheduling requests must be
          made at least <strong>24 hours in advance</strong> of the scheduled
          appointment time. Any request made after this period may not be
          accommodated. Rescheduled slots are offered based on mutual
          convenience and available time slots.
        </p>

        <p className={styles.policyText}>
          <strong>Contact & Support:</strong> For rescheduling requests or any
          queries related to your booking, please contact our customer care team
          at{" "}
          <a href="mailto:support@yourcompany.com">
            support@yourcompany.com
          </a>
          . Please include your booking ID, transaction details, and preferred
          rescheduling date and time. Our team will work with you to provide the
          nearest possible alternative slot.
        </p>

        <p className={styles.policyText}>
          By making a booking on our platform, you confirm that you have read,
          understood, and agreed to this Refund & Cancellation Policy. Please
          note that this policy is designed to ensure clarity, fairness, and
          efficient allocation of our services. We encourage you to review this
          policy periodically, as it may be updated from time to time in
          accordance with regulatory changes or company requirements.
        </p>
      </div>
    </Layout>
  );
}
