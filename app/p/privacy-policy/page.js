export const metadata = {
  title: 'Privacy Policy | Allotment Status of IPO',
  description: 'Our privacy policy explains how Allotment Status of IPO handles user data, cookies, and Google AdSense compliance.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
          Privacy Policy
        </h1>

        <div className="card" style={{ padding: '2.5rem', lineHeight: '1.8', fontSize: '0.98rem', color: '#334155' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            At <strong>Allotment Status of IPO</strong> (accessible from <code>https://www.allotmentstatusofipo.in</code>), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
          </p>

          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem' }}>
            Log Files &amp; Web Analytics
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Allotment Status of IPO follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, and referring/exit pages. These are not linked to any personally identifiable information.
          </p>

          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem' }}>
            Google AdSense &amp; DoubleClick DART Cookies
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. Users may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at: <code>https://policies.google.com/technologies/ads</code>
          </p>

          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem' }}>
            No Financial or Sensitive Data Collection
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            We do NOT store or collect your PAN card details, Demat account numbers, or bank account credentials on our servers. When you click on external registrar links, you interact directly with the respective registrar’s secure infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
