export const metadata = {
  title: "Real Estate Investment & Finance",
  description: "Land Finance and Investment Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial', margin: 0 }}>
        <div style={{ padding: 20, background: '#0f172a', color: 'white' }}>
          <h2>Premium Real Estate Consultancy</h2>
        </div>
        <div style={{ padding: 30 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
