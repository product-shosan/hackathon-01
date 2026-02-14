
import EventGrid from "@/component/event/EventGrid";
import pastEvents from "@/model/pastEvents";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-extrabold text-gray-900">
          ハッカソンのイベント一覧
        </h1>

        <EventGrid events={pastEvents} />
      </div>
    </main>
  );
}

export default Home;