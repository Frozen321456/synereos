import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Synereos — Independent AI Research Lab for New Intelligence Architectures',
  description: 'Synereos is an independent technology research lab investigating how intelligence could emerge from representation, memory, and experience — not just scale.',
  metadataBase: new URL('https://synereos.com'),
  alternates: {
    canonical: 'https://synereos.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synereos.com',
    siteName: 'Synereos',
    title: 'Synereos — Independent AI Research Lab for New Intelligence Architectures',
    description: 'Synereos is an independent technology research lab investigating how intelligence could emerge from representation, memory, and experience — not just scale.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Synereos — Independent AI Research Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synereos — Independent AI Research Lab for New Intelligence Architectures',
    description: 'Synereos is an independent technology research lab investigating how intelligence could emerge from representation, memory, and experience — not just scale.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="256x256" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Synereos',
              url: 'https://synereos.com',
              description:
                'Synereos is an independent technology research lab investigating how intelligence could emerge from representation, memory, and experience — not just scale.',
              sameAs: [
                'https://github.com/synereos',
                'https://x.com/synereos',
                'https://instagram.com/synereos',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-dvh bg-syn-bg text-syn-text">
        <a href="#main" className="skip-link mono text-xs">
          SKIP TO CONTENT
        </a>
        {children}
      </body>
    </html>
  );
}