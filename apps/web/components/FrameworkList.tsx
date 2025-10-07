'use client';

import { useEffect, useState } from 'react';
import type { Framework } from '../types/framework';

interface FrameworkListProps {
  apiBaseUrl: string;
}

export function FrameworkList({ apiBaseUrl }: FrameworkListProps) {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFrameworks() {
      try {
        const response = await fetch(`${apiBaseUrl}/frameworks`);
        if (!response.ok) {
          throw new Error(`Unable to load frameworks (${response.status})`);
        }
        const data = (await response.json()) as Framework[];
        setFrameworks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    fetchFrameworks();
  }, [apiBaseUrl]);

  if (isLoading) {
    return <p className="text-sm text-slate-300">Loading frameworks...</p>;
  }

  if (error) {
    return (
      <div className="rounded border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
        {error}
      </div>
    );
  }

  if (frameworks.length === 0) {
    return <p className="text-sm text-slate-300">No frameworks are available yet. Create one using the API.</p>;
  }

  return (
    <div className="space-y-4">
      {frameworks.map((framework) => (
        <article key={framework.id} className="rounded-lg border border-slate-800 bg-slate-900/60 p-6">
          <header className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-primary">{framework.name}</h2>
              <p className="mt-1 text-sm text-slate-300">{framework.description}</p>
            </div>
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
              {framework.controls.length} controls
            </span>
          </header>
          <div className="mt-4 space-y-2">
            {framework.controls.map((control) => (
              <div
                key={control.id}
                className="flex items-center justify-between rounded border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm"
              >
                <span className="font-medium text-slate-200">{control.title}</span>
                <span className="text-xs uppercase tracking-wide text-slate-400">{control.status}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
