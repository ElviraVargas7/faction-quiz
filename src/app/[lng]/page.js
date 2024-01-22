import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import StartButton from '../components/StartButton/StartButton';

export default function Home({ params: { lng } }) {
  return (
    <main>
      <LanguageSwitcher lng={lng} />
      <StartButton lng={lng}/>
    </main>
  );
}
