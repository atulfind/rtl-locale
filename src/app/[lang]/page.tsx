import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import Users from "./components/Users";
import Counter from "./components/couter";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang); 

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
      <Users />
    </div>
  );
}
