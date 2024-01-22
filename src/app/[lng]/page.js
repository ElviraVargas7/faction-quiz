import Home from "./home/Home";

export default function Page({ params: { lng } }) {
  return (
    <main>
      <Home lng={lng} />
    </main>
  );
}
