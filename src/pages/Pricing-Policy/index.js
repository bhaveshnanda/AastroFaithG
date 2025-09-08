// pages/pricing-policy.js
import Layout from "@/components/Layout/Layout";
import styles from "./Pricing.module.css";

export default function PricingPolicy() {
  return (
    <Layout>
      <div className={styles.policyContainer}>
        <h1 className={styles.policyTitle}>Pricing Policy</h1>

        <p className={styles.policyText}>
          At <strong>AastroFaithG</strong>, we strive to maintain transparency and fairness in all our pricing practices. 
          This Pricing Policy outlines how service fees are determined, displayed, and applied to your bookings. 
          By using our platform, you agree to the terms outlined below regarding pricing and payment.
        </p>

        <p className={styles.policyText}>
          <strong>1. Price Determination:</strong> Prices for astrology services, consultations, horoscopes, or any related services are set individually by the astrologers providing the service. 
          These prices are determined based on the nature, duration, and complexity of the service. 
          AastroFaithG acts as a platform to facilitate booking and payment, but does not alter or influence the pricing set by the astrologers.
        </p>

        <p className={styles.policyText}>
          <strong>2. Price Updates:</strong> Prices may change from time to time without prior notice. 
          Factors that may affect price changes include increased demand, additional services, or modifications in the astrologer’s offerings. 
          Users are advised to check the latest prices at the time of booking to avoid confusion.
        </p>

        <p className={styles.policyText}>
          <strong>3. Price Locking Upon Booking:</strong> Once a user successfully books an appointment and completes the payment process, the price for that specific appointment is locked. 
          This means that the amount paid will not increase, regardless of any subsequent price changes for the same service by the astrologer. 
          Users can rely on the locked price for the duration of their scheduled appointment.
        </p>

        <p className={styles.policyText}>
          <strong>4. Display of Prices:</strong> All service prices are clearly displayed on the booking page of our platform. 
          Prices are shown in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. 
          AastroFaithG makes every effort to ensure that displayed prices are accurate at the time of booking.
        </p>

        <p className={styles.policyText}>
          <strong>5. Payment Processing:</strong> All payments for services are securely processed via Razorpay. 
          AastroFaithG does not store sensitive payment information such as credit or debit card numbers. 
          Payment confirmation finalizes the booking and locks the price for that appointment.
        </p>

        <p className={styles.policyText}>
          <strong>6. Price Changes After Booking:</strong> Users acknowledge that price changes may occur for services not yet booked. 
          However, once a booking is confirmed and payment is processed, the price for that appointment is guaranteed and will not increase. 
          Refunds or adjustments are governed by our Refund & Cancellation Policy.
        </p>

        <p className={styles.policyText}>
          <strong>7. Discounts, Offers, and Promotions:</strong> Any discounts, promotional pricing, or special offers will be clearly indicated on our platform. 
          These offers are subject to availability, specific terms, and the discretion of the astrologer. 
          AastroFaithG reserves the right to modify or withdraw offers without prior notice.
        </p>

        <p className={styles.policyText}>
          <strong>8. Taxes and Charges:</strong> Applicable taxes, service fees, or additional charges, if any, will be included in the total displayed price at the time of booking. 
          Users are responsible for reviewing the final payable amount before confirming the booking.
        </p>

        <p className={styles.policyText}>
          <strong>9. User Responsibility:</strong> Users are responsible for reviewing the service price, duration, and details before making a booking. 
          By proceeding with payment, users confirm acceptance of the price for the selected service.
        </p>

        <p className={styles.policyText}>
          <strong>10. Updates to Pricing Policy:</strong> AastroFaithG reserves the right to update this Pricing Policy from time to time to reflect changes in service offerings, pricing practices, or regulatory requirements. 
          Continued use of our platform indicates acceptance of the updated policy.
        </p>

        <p className={styles.policyText}>
          By using <strong>AastroFaithG</strong> and completing a booking, you acknowledge that you have read, understood, and agreed to this Pricing Policy. 
          For questions or clarifications, please contact our support team at <a href="mailto:aastrofaithg@gmail.com">aastrofaithg@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}
