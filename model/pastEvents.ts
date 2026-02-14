type pastEvent = {
    id: number;
    title: string;
    date: string;
    participants: number;
    status: "終了" | "募集中"
    tags: string[];
    image: string;
}

const pastEvents: pastEvent[] = [
  {
    id: 1,
    title: "Raspberry Pi + Next.jsでトイレ空き状況モニターを作成する",
    date: "2026-02-14",
    participants: 6,
    status: "終了",
    tags: ["Web開発", "API", "Raspberry Pi"],
    image: "/event/1.jpg",
  },
];

export default pastEvents;