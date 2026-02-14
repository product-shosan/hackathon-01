export type WorkDetail = {
  id: number;
  title: string;
  overview: string[];
  purpose: string[];
  themeTitle: string;
  themePoints: string[];
  targets: string[];
  schedule: string[];
  participants: string[];
  notes: string[];
  deadline: string;
  contact: string;
};

export const worksDetails: WorkDetail[] = [
  {
    id: 1,
    title: "Raspberry Piで「トイレ待ち難民」をテクニカルに救う",
    overview: [
      "開発ユニット主催で、スモールPJを一通り体験する実践型ハッカソンを行います。",
      "社員・インターン混成で、企画〜実装までを短期間で走り切ることを目的とします。",
    ],
    purpose: [
      "スモールPJを一通り経験し、開発の流れを実践的に身につける",
      "開発ユニットの社員と関わりながら、開発思考力・開発力を高める",
      "「エンジニア的に課題を解決する」体験をする",
    ],
    themeTitle: "テーマ：Raspberry Piで「トイレ待ち難民」をテクニカルに救う",
    themePoints: [
      "センサーで人の在・不在を検知",
      "無駄な移動・待ち時間を削減する仕組みを考える",
    ],
    targets: ["2F 男子トイレ", "3F 男子トイレ", "※ オフィス内の女子トイレは今回は保留とします"],
    schedule: ["2月14日（土） 出社して実施（9時〜18時予定）"],
    participants: ["社員", "インターン生", "※ 開発経験の有無は問いません。興味があればOKです。"],
    notes: [
      "興味のある方は、この投稿へのリアクション or 生越まで直接ご連絡ください。",
      "「小さく作って、動かして、学ぶ」そんな場にしたいと思っています。ご参加お待ちしています。",
    ],
    deadline: "参加締切：2月12日（木）いっぱい",
    contact: "連絡先：生越",
  },
];

export function getWorkDetail(id: number) {
  return worksDetails.find((w) => w.id === id) ?? null;
}