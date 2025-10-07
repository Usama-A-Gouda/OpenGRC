import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">OpenGRC Modernized</h1>
      <p className="text-lg text-slate-300">
        This Next.js interface works with the NestJS API to deliver an approachable governance, risk, and compliance experience.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-primary">Framework Explorer</h2>
          <p className="mt-2 text-sm text-slate-300">
            Browse and manage compliance frameworks, controls, and implementation status directly from the browser.
          </p>
          <Link
            className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
            href="/frameworks"
          >
            View Frameworks
          </Link>
        </section>
        <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-primary">Modern API</h2>
          <p className="mt-2 text-sm text-slate-300">
            The NestJS service offers a clean REST API that can be extended to integrate reporting, evidence collection, and more.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-primary"
            href="http://localhost:3001/frameworks"
          >
            API Explorer
          </a>
        </section>
      </div>
    </div>
  );
}
