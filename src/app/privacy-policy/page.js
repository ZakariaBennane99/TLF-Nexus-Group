import Header from "../../../components/Header";
import Footer from "../../../components/Footer";


export default function PrivacyPolicy() {
  return (
    <>
      <Header isPrivacyPage={true} />
      <div className="privacyPolicy">
      <h1>Privacy Policy</h1>
      <p>Last updated: September 21, 2024</p>

      <section>
        <h2>1. Introduction</h2>
        <p>TLF Nexus Group LLC ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.</p>
      </section>

      <section>
        <h2>2. The Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
        <ul>
          <li>Identity Data: includes first name, last name, username or similar identifier.</li>
          <li>Contact Data: includes email address and name.</li>
          <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our services</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
      </section>

      <section>
        <h2>5. Your Legal Rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <p><b>Email:</b> info@tlfnexusgroup.com</p>
        <p><b>Address:</b> 1301 York Road, Suite 800 #1089, Lutherville, MD 21093</p>
      </section>
    </div>
      <Footer />
    </>
  );
}