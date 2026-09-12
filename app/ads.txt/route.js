export async function GET() {
  const adsTxt = `google.com, pub-7009095515039268, DIRECT, f08c47fec0942fa0`;
  return new Response(adsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
