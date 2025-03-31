"use client";

import Link from "next/link";

import ZeroKonkretow from "./ZeroKonkretow";
import SocialMedia from "./SocialMedia";
import Button from "./Button";
import { useModal } from "@/providers/ModalContext";

const privacyPolicyContent = (
  <>
    <h3>I. Informacje ogólne</h3>
    <p>
      1. Niniejsza polityka cookies (dalej jako: „Polityka”) określa zasady
      gromadzenia i wykorzystywania plików cookies w ramach serwisu
      internetowego działającego pod adresem: https://stanowski2025.de/ (dalej
      jako: „Serwis”), w związku z korzystaniem z tego serwisu przez jego
      użytkowników (dalej jako: „Użytkownicy”), przez administratora Serwisu,
      tj.: Komitet Wyborczy Kandydata na Prezydenta RP Krzysztofa Jakuba
      Stanowskiego, z siedzibą przy ul. Oleńki 12/84, 05-090 Dawidy Bankowe
      (dalej jako: „Administrator”).
    </p>
    <h3>II. Pliki cookies i logi systemowe</h3>
    <p>
      1. Z momentem połączenia się przez Użytkownika z Serwisem w logach
      systemowych Serwisu pojawia się informacja o numerze (w tym IP) i rodzaju
      urządzenia końcowego Użytkownika, z którego Użytkownik łączy się z
      Serwisem. Administrator będzie przetwarzał, zgodnie z przepisami
      obowiązującego prawa, również dane dotyczące numeru (w tym IP) i rodzaju
      urządzenia końcowego Użytkownika, a także czasu połączenia Użytkownika z
      Serwisem oraz inne dane eksploatacyjne dotyczące aktywności Użytkownika.
      Dane te przetwarzane są, w szczególności, w celach technicznych oraz do
      zbierania ogólnych informacji statystycznych.
    </p>
    <p>
      2. Serwis może używać plików typu cookies (tj. małe pliki tekstowe
      wysyłane do urządzenia Użytkownika, identyfikujące go w sposób potrzebny
      do uproszczenia lub umorzenia danej operacji) w celu gromadzenia
      informacji związanych z korzystaniem z Serwisu przez Użytkownika. Pliki
      typu cookies umożliwiają, w szczególności, utrzymanie sesji Użytkownika,
      dostosowanie działania stron Serwisu do preferencji oraz potrzeb
      Użytkownika, tworzenie statystyk oglądalności podstron Serwisu.
    </p>
    <p>
      3. Użytkownik może w każdym czasie dokonać zmiany ustawień dotyczących
      plików cookies. W tym celu należy dokonać zmiany ustawień przeglądarki
      internetowej dotyczących plików cookies. Ustawienia te mogą zostać
      zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę
      plików cookies w ustawieniach przeglądarki internetowej bądź informować o
      ich każdorazowym zamieszczeniu w urządzeniu Użytkownika. Szczegółowe
      informacje o możliwości i sposobach dokonania zmiany w ustawieniach
      dotyczących plików cookies w najpopularniejszych przeglądarkach
      internetowych można uzyskać pod adresami:
    </p>
    <br />
    <p>
      1) Google Chrome -&nbsp;
      <a
        target="_blank"
        href="https://support.google.com/chrome/answer/95647?hl=pl;"
      >
        https://support.google.com/chrome/answer/95647?hl=pl;
      </a>
      <br />
    </p>
    <p>
      2) Firefox -&nbsp;
      <a
        target="_blank"
        href="https://support.mozilla.org/pl/kb/ciasteczka?esab=a&s=ciasteczka&r=0&as=s;"
      >
        https://support.mozilla.org/pl/kb/ciasteczka?esab=a&s=ciasteczka&r=0&as=s;
      </a>
      <br />
    </p>
    <p>
      3) Internet Explorer -&nbsp;
      <a
        target="_blank"
        href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies;"
      >
        https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies;
      </a>
      <br />
    </p>
    <p>
      4) Microsoft Edge -&nbsp;
      <a
        target="_blank"
        href="https://support.microsoft.com/pl-pl/help/4027947/microsoft-edge-delete-cookies"
      >
        https://support.microsoft.com/pl-pl/help/4027947/microsoft-edge-delete-cookies
      </a>
      <br />
    </p>
    <p>
      5) Opera -&nbsp;
      <a
        target="_blank"
        href="http://help.opera.com/Windows/12.10/pl/cookies.html"
      >
        http://help.opera.com/Windows/12.10/pl/cookies.html
      </a>
      <br />
    </p>
    <p>
      6) Safari -&nbsp;
      <a
        target="_blank"
        href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
      >
        https://support.apple.com/pl-pl/guide/safari/sfri11471/mac
      </a>
    </p>
    <h3>Postanowienie końcowe</h3>
    <p>
      1. Administrator dołoży starań, aby zapewnić Użytkownikom wysoki poziom
      bezpieczeństwa w zakresie korzystania z Serwisu.
    </p>
    <p>
      2. Administrator zastrzega sobie prawo do zmiany Polityki, o czym
      Użytkownicy zostaną poinformowani poprzez informację zamieszczoną na
      stronie internetowej https://stanowski2025.de/, w terminie co najmniej 3
      dni przed wejściem zmiany w życie.
    </p>
  </>
);

const infoContent = (
  <>
    <h3>Administrator danych osobowych</h3>
    <p>
      Administratorem Pana/Pani danych osobowych jest{" "}
      <strong>
        Komitet Wyborczy Kandydata na Prezydenta RP Krzysztofa Jakuba
        Stanowskiego
      </strong>
      , z siedzibą przy ul. Oleńki 12/84, 05-090 Dawidy Bankowe, (dalej jako:
      „Administrator”).
    </p>
    <h3>
      Osoba do kontaktu w sprawach związanych z przetwarzaniem danych osobowych
    </h3>
    <p>
      W sprawach związanych z przetwarzaniem danych osobowych można się
      skontaktować w formie pisemnej pod adresem: ul. Oleńki 12/84, 05-090
      Dawidy Bankowe lub drogą elektroniczną na adres:
      <a href="mailto:dane@stanowski2025.de">dane@stanowski2025.de</a>
    </p>
    <h3>Cel przetwarzania danych</h3>
    <p>Pana/Pani dane osobowe będą przetwarzane:</p>
    <ol>
      <li>
        dla potrzeb niezbędnych do realizacji celów administracyjnych oraz w
        celu kontaktu w związku z wypełnieniem formularza kontaktowego.
      </li>
      <li>
        dla potrzeb niezbędnych do celów wynikających z prawnie uzasadnionych
        interesów realizowanych przez Administratora.
      </li>
    </ol>
    <h3>Podstawa prawna przetwarzania danych</h3>
    <ol>
      <li>
        art. 6 ust. 1 lit. a) rozporządzenia Parlamentu Europejskiego i Rady
        (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
        fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
        swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
        (ogólne rozporządzenie o ochronie danych), dalej jako: „RODO”;
      </li>
      <li>art. 6 ust. 1 lit. f) RODO</li>
    </ol>
    <h3>Komu będą przekazywane dane osobowe?</h3>
    <p>
      Odbiorcami Pani/Pana danych osobowych mogą być – tylko w przypadkach, gdy
      jest to konieczne oraz w niezbędnym zakresie – podmioty współpracujące z
      Administratorem w zakresie świadczonych na rzecz Administratora usług (np.
      podwykonawcy) oraz wspierania bieżących procesów działalności
      Administratora, w szczególności usługi IT, prawne i kurierskie.
    </p>
    <h3>Przekazywanie danych do państwa trzeciego</h3>
    <p>
      Pana/Pani dane osobowe nie będą przekazywane do państwa trzeciego (poza
      EOG).
    </p>
    <h3>Jak długo będą przechowywane dane osobowe?</h3>
    <p>Pani/Pana dane osobowe będą przechowywane:</p>
    <ol>
      <li>
        w przypadku przetwarzania danych na podstawie zgody – do czasu wycofania
        zgody;
      </li>
      <li>
        w przypadku przetwarzania danych dla potrzeb niezbędnych do celów
        wynikających z prawnie uzasadnionych interesów realizowanych przez
        Administratora – przez okres niezbędny do realizacji tych celów.
      </li>
    </ol>
    <h3>
      Jakie uprawnienia przysługują Pani/Panu w związku z przetwarzaniem danych
      osobowych?
    </h3>
    <p>Ma Pan/Pani prawo do:</p>
    <ol>
      <li>dostępu do swoich danych osobowych,</li>
      <li>sprostowania danych osobowych,</li>
      <li>usunięcia danych osobowych,</li>
      <li>ograniczenia przetwarzania danych osobowych,</li>
      <li>
        przenoszenia danych, obejmujące uprawnienie do otrzymania danych i
        przesłania ich innemu administratorowi lub do żądania, w razie
        możliwości technicznych, przesłania tych danych bezpośrednio innemu
        administratorowi – w zakresie przetwarzania danych na podstawie
        Pana/Pani zgody,
      </li>
      <li>
        wniesienia sprzeciwu wobec przetwarzania danych osobowych – w zakresie
        przetwarzania danych do celów wynikających z prawnie uzasadnionych
        interesów realizowanych przez Spółkę,
      </li>
      <li>
        wniesienia skargi do organu nadzorczego w zakresie ochrony danych
        osobowych, którym jest Prezes Urzędu Ochrony Danych Osobowych (ul.
        Stawki 2, 00-193 Warszawa).
      </li>
    </ol>
    <h3>Czy podanie danych osobowych jest obowiązkowe?</h3>
    <p>
      Podanie danych osobowych jest dobrowolne, jednakże niezbędne do
      zapewnienia Administratorowi możliwości zapewnienia obsługi
      administracyjnej zgłoszenia oraz kontaktu z Panią / Panem.
    </p>
    <h3>Cofnięcie zgody na przetwarzanie danych osobowych</h3>
    <p>
      Ma Pan/Pani prawo do cofnięcia udzielonej zgody na przetwarzanie danych
      osobowych w dowolnym momencie, bez wpływu na zgodność z prawem
      przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.
      Cofnięcia zgody dokonuje się poprzez kontakt w formie pisemnej pod
      adresem: ul. Oleńki 12/84, 05-090 Dawidy Bankowe lub drogą elektroniczną
      na adres: dane@stanowski2025.de
    </p>
  </>
);

export function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="grid grid-cols-1 xl:grid-cols-3 text-white gap-10 py-10 px-10 xl:mx-32 md:mx-10 mx-0">
      <div id="footer-info" className="flex flex-col gap-3">
        <ZeroKonkretow variant="white" />
        <Link href="/">
          <p className="text-white uppercase font-mono 2xl:text-5xl text-4xl font-bold tracking-tighter">
            stanowski<span className="text-accent">2025</span>
          </p>
        </Link>
      </div>
      <div
        id="footer-contact"
        className="border-0 xl:border-l-1 xl:pl-10 pl-0 flex flex-col gap-5"
      >
        <div>
          <p>kontakt@stanowski2025.de</p>
          <p>pelnomocnik@stanowski2025.de</p>
        </div>
        <SocialMedia />
      </div>
      <div
        id="footer-links"
        className="border-0 xl:border-l-1 xl:pl-10 pl-0 flex flex-col"
      >
        <div>
          <Button
            variant="link"
            onClick={() =>
              openModal(privacyPolicyContent, "Polityka Prywatności")
            }
          >
            polityka prywatności
          </Button>
          <Button
            variant="link"
            onClick={() => openModal(infoContent, "Klauzula Informacyjna")}
          >
            klauzula informacyjna
          </Button>
        </div>
      </div>
    </footer>
  );
}
