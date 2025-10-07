import { Suspense } from 'react';
import { FrameworkList } from '../../components/FrameworkList';

function FrameworkListFallback() {
  return (
    <div className="space-y-2">
      {[...Array(3).keys()].map((index) => (
        <div key={index} className="h-32 animate-pulse rounded-lg bg-slate-800/40" />
      ))}
    </div>
  );
}

export default function FrameworksPage() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Compliance Frameworks</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Frameworks describe the control sets that govern your organization&apos;s risk and compliance posture. Use the NestJS API
          to add, update, or remove frameworks and track their implementation progress here.
        </p>
      </header>
      <Suspense fallback={<FrameworkListFallback />}>
        <FrameworkList apiBaseUrl={apiBaseUrl} />
      </Suspense>
      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-primary">Interact with the API</h2>
        <p className="mt-2">
          Create frameworks by sending a <code className="rounded bg-slate-800 px-1">POST</code> request to{' '}
          <code className="rounded bg-slate-800 px-1">{`${apiBaseUrl}/frameworks`}</code>. The API supports full CRUD operations, and the
          front-end updates automatically when new data is available.
        </p>
      </section>
    </div>
  );
}
