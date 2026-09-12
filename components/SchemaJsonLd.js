export default function SchemaJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.allotmentstatusofipo.in/#website',
        url: 'https://www.allotmentstatusofipo.in/',
        name: 'Allotment Status of IPO',
        description: 'Live IPO Allotment Status Tracker, Real-time GMP, Registrar Deep Links & Comprehensive Bidding Guides 2026',
        publisher: {
          '@type': 'Organization',
          name: 'Allotment Status of IPO',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.allotmentstatusofipo.in/favicon.ico'
          }
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.allotmentstatusofipo.in/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.allotmentstatusofipo.in/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I check my IPO allotment status online?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can check your IPO allotment status online by visiting your issue registrar portal (Link Intime, KFintech, or Bigshare) or official BSE/NSE websites using your PAN number, Application number, or DP Client ID.'
            }
          },
          {
            '@type': 'Question',
            name: 'When is IPO allotment finalized after subscription closes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the SEBI T+3 listing framework, IPO allotment is finalized within 1 to 2 working days after the issue closing date, followed by fund unblocking and demat credit.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should I do if my IPO application money is not unblocked?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If ASBA or UPI mandate amount remains blocked after the unblocking deadline, file an instant grievance ticket with the official registrar (Link Intime/KFintech) with your Application No. and UPI Reference ID, and escalate to your sponsor bank.'
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
