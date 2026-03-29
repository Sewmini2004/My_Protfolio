import './globals.css';

export const metadata = {
  title: 'Sewmini Pramodya | Full Stack Software Developer',
  description: 'Portfolio of Sewmini Pramodya, an Associate Software Engineer specializing in PHP, Java, React, and Full Stack Development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
