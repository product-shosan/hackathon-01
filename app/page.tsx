import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">

        <div className="flex flex-col items-center gap-6 text-center">
          <div className="text-6xl">🚹</div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            トイレ状況共有
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            SHOSANが提供する清潔サービス
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row" style={{ margin: '0 auto' }}>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 text-white transition-colors hover:bg-green-600 md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            人なし
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full bg-red-500 px-5 text-white transition-colors hover:bg-red-600 md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            人あり
          </a>
        </div>
      </main>
    </div>
  );
}
