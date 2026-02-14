import DetailPageShell, { Section } from "@/component/detail/DetailPageShell";
import { getWorkDetail } from "@/model/worksDetails";
import { notFound } from "next/navigation";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  );
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;          
  const numId = Number(id);

  const detail = getWorkDetail(numId);
  if (!detail) return notFound();

  return (
    <DetailPageShell title={detail.title}>
      <Section title="■ 概要">
        <Paragraphs items={detail.overview} />
      </Section>

      <Section title="■ 目的">
        <BulletList items={detail.purpose} />
      </Section>

      <Section title={detail.themeTitle}>
        <BulletList items={detail.themePoints} />
        <div className="mt-3">
          <div className="text-sm font-bold text-gray-900">対象</div>
          <div className="mt-2">
            <BulletList items={detail.targets} />
          </div>
        </div>
      </Section>

      <Section title="■ 実施日程">
        <BulletList items={detail.schedule} />
      </Section>

      <Section title="■ 参加対象">
        <BulletList items={detail.participants} />
      </Section>

      <Section title="■ 参加について">
        <div className="space-y-2">
          <p className="font-bold text-gray-900">{detail.deadline}</p>
          <p className="font-bold text-gray-900">{detail.contact}</p>
          <Paragraphs items={detail.notes} />
        </div>
      </Section>
    </DetailPageShell>
  );
}