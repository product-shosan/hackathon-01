import type { ReactNode } from "react";
import Link from "next/link";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-extrabold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-3 text-sm leading-7 text-gray-700">{children}</div>
    </section>
  );
}

export default function DetailPageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
            ← 一覧に戻る
          </Link>
        </div>

        <h1 className="text-2xl font-extrabold leading-snug tracking-tight text-gray-900">
          {title}
        </h1>

        <div className="mt-6 space-y-4">{children}</div>
      </div>
    </main>
  );
}

export { Section };