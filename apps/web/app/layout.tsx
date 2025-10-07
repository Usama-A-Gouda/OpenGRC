import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'OpenGRC Next',
  description: 'Next.js front-end for the OpenGRC NestJS API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <div className="min-h-screen">
          <header className="border-b border-slate-800 bg-slate-900/80 px-6 py-4 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
              <a href="/" className="text-lg font-semibold text-primary">
                OpenGRC
              </a>
              <nav className="space-x-4 text-sm">
                <a className="hover:text-primary" href="/frameworks">
                  Frameworks
                </a>
                <a className="hover:text-primary" href="https://docs.opengrc.com">
                  Documentation
                </a>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
          <footer className="border-t border-slate-800 bg-slate-900/80 px-6 py-6 text-sm text-slate-400">
            <div className="mx-auto max-w-5xl">
              Built with Next.js and Tailwind CSS as part of the OpenGRC modernization initiative.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
