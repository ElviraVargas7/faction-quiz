import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';

export default function Home({ params: { lng } }) {
  return (
    <main>
      <LanguageSwitcher lng={lng} />
    </main>
  );
}
