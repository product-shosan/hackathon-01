import Link from "next/link";
import Image from "next/image";

export type Event = {
  id: number;
  title: string;
  date: string;
  participants: number;
  status: string;
  tags: string[];
  image: string;
};

type Props = { event: Event };

const EventCard = ({ event }: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="relative h-44 w-full">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white">
          {event.status}
        </span>
      </div>

      <div className="p-4">
        <h2 className="line-clamp-2 text-lg font-extrabold text-gray-900">
          {event.title}
        </h2>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>🗓️</span>
            <span className="font-semibold text-gray-800">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👥</span>
            <span className="font-semibold text-gray-800">{event.participants}</span>
            <span>人</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Link href={`/events/${event.id}`} className="flex-1 rounded-xl border px-3 py-2 text-center text-sm font-bold">
            詳細を見る
          </Link>
          <Link href={`/app/${event.id}`} className="flex-1 rounded-xl bg-purple-600 px-3 py-2 text-center text-sm font-bold text-white">
            アプリに移る
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;