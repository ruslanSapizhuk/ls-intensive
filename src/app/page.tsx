import Button from "@/components/Button";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import Link from "next/link";
import FacebookPixel from "@/components/FacebookPixel"
import pmLanaImage from "@/assets/PM-Lana.png";
import IrynkaKhalus from "@/assets/IrynkaKhalus.png";
import AnastasiyaMelnik from "@/assets/AnastasiyaMelnik.png";
import Mariya from "@/assets/Mariya.png";
import MariyaPolonskaya from "@/assets/MariyaPolonskaya.png";
import OlgaLazebnikova from "@/assets/OlgaLazebnikova.png";
import OlhovskayaDarya from "@/assets/OlhovskayaDarya.png";
import LinaKondratiuk from "@/assets/LinaKondratiuk.png";
import Pavel from "@/assets/P.png";
import Sergij from "@/assets/Sergij.png";
import YraGlebov from "@/assets/YraGlebov.png";
import Yuliya from "@/assets/Yuliya.png";
import YuliyaLisenko from "@/assets/YuliyaLisenko.png";
import hart from "@/assets/hart.png";
import bonus from "@/assets/bonus.jpeg";
import star from "@/assets/star.png";
import lock from "@/assets/lockimg.png";
import instagram from "@/assets/instagram.svg";
import flag from "@/assets/UKflag.png";


export default function Home() {
  return (
    <>
      <FacebookPixel />
      <div className={"md:w-96 mx-auto bg-fill pt-4"}>
        <main>
          <header className={"mb-5"}>
            <div className="text-3xl dark:text-black text-center">
              <b>
                by LANA SAPIZHUK
              </b>
            </div>
          </header>
          <section className={"mb-10 p-2"}>
            <div className="text-center">
              <div className="text-m px-5 py-2 text-center normal-case font-light rounded bg-label ">
                Лише сьогоні зі знижкою 75%
              </div>
              <h2 className="uppercase font-bold mt-6 text-xl">
                Курс від Лани сапіжук
              </h2>
              <h2 className="text-3xl mt-1 uppercase font-bold mb-10 text-dark">
                Запусти свій інфо продукт та перетвори його в ІТ Edtech стартап < br />за 14 днів
              </h2>
              <p className="mb-2 text-2xl">
                Підходить для <b>експертів</b> з будь якої ніші (ІТ, AI, Фітнес, Б&#39;юті, Наука і т.д.), спеціалістів,
                продюсерів, маркетологів
              </p>
              <div className={"bg-white rounded-3xl p-5 mb-5"}>
                <p className="mb-5 text-center font-bold text-[23px]">
                  Зрозумій біль, зроби продукт, налаштуй робочі воронки, залучи трафік та продавай від < br />10,000 $ на міжнародний ринок уже через 14 днів👇
                </p>
                <ul className="mb-5 text-left">
                  <li className="mb-2">
                    🔹 без підписників
                  </li>
                  <li className="mb-2">
                    🔹 без постійного ведення блогу
                  </li>
                  <li className="mb-2">
                    🔹 без вебінарів
                  </li>
                  <li className="mb-2">
                    🔹 без залучення команди на постійній основі
                  </li>
                  <li className="mb-2">
                    🔹 без привʼязки до дати запуску, відразу продажі та видача матеріалу
                  </li>
                  <li className="mb-2">
                    ✅ навіть коли ти спиш
                  </li>
                  <li className="mb-2">
                    ✅ на високі чеки, за рахунок доп. продажів інших продуктів по воронці
                  </li>
                  <li className="mb-2">
                    ✅ на міжнародні ринки завдяки АІ локалізації, No-code підходу та секретних інструментів!
                  </li>
                </ul>
                <p className="text-xl text-default font-bold uppercase mb-5 max-w-lg text-center">
                  Встигни взяти участь зі знижкою 75%
                </p>
                <Link href="#pay">
                  <Button className="w-full bg-dark">
                    Взяти участь
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div className="md:basis-7/12 flex-initial grow-0 align-bottom dark:text-black">
              <h2 className="text-3xl mb-10 font-bold uppercase text-center">
                Авторка курсу
                <br />
                <b className="font-bold text-default">
                  Product ManageR
                </b>
              </h2>
              <div className={"mb-5"}>
                <Link href={'https://www.instagram.com/lana_sapizhuk?igsh=bDN4NGZiMGVmMXp3'}>
                  <Image src={pmLanaImage} alt="Lana Sapizhuk" />
                  <div className="flex justify-center bg-default-40 mx-4 rounded-[6px] m-5">
                    <Image src={instagram} alt={"instagram"} width={24} height={24} className="object-contain mr-2"></Image>
                    <p className="text-center font-bold text-default text-[24px]">
                      LANA SAPIZHUK
                    </p>
                  </div>
                </Link>
              </div>

              <ul className="mb-5 list-none list-inside mt-5 text-xl leading-7 mx-4">
                <li className={"mb-3 flex items-center text-lg"}><Image src={star} alt={"star"} width={10} className="object-cover mr-5 flex-shrink-0"></Image><b>Запустила Lifestyle та Edtech продуктів на 1🍋💸</b></li>
                <li className={"mb-3 flex items-center text-lg"}><Image src={star} alt={"star"} width={10} className="object-cover mr-5 flex-shrink-0"></Image><p><b>8 р. в ІТ,</b> створювала ІТ продукти для бізнесу, відомих брендів та блогерів мільйонників</p>
                </li>
                <li className={"mb-3 flex items-center text-lg"}><Image src={star} alt={"star"} width={10} className="object-contain mr-5 flex-shrink-0"></Image><p><span className="font-bold">Навчила</span>  більше <b>200 людей</b> запускам онлайн продуктів</p></li>
                <li className={"mb-3 flex items-center text-lg"}><Image src={star} alt={"star"} width={10} className="object-contain mr-5 flex-shrink-0"></Image><p><b>Блогер:</b> експертний блог в IG 7к+ аудиторії</p></li>
                <li className={"mb-3 flex items-center text-lg"}><Image src={star} alt={"star"} width={10} className="object-contain mr-5 flex-shrink-0"></Image><p>Запустила фітнес платформу (сайт та додаток) з <b>0 до 250к реєстрацій</b></p></li>
              </ul>
            </div>
          </section>
          <h3 className="text-center font-bold text-2xl mb-4">НА КУРСІ ТИ ЗРОЗУМІЄШ👇🏻 </h3>
          <section className="mb-10 bg-default px-4 py-2">

            <div className="flex bg-white p-2 rounded-md mb-3 mt-5">
              <p className="text-sm mr-2 font-bold">1.</p>
              <p className="text-[13px] font-bold pr-2">Як проаналізувати ринок та конкурентів, знайти біль та свою ЦА </p>
              <Image src={lock} alt={"lock"} width={130} height={10} className="object-contain rounded-[5px]"></Image>
            </div>

            <div className="flex bg-white p-2 rounded-md mb-3">
              <p className="text-sm mr-2 font-bold">2.</p>
              <p className="text-[13px] font-bold pr-2">Як  створити правильне позиціонування, а також свою унікальну торгову пропозицію (УТП)</p>
              <Image src={lock} alt={"lock"} width={130} height={10} className="object-contain rounded-[5px]"></Image>
            </div>

            <div className="flex bg-white p-2 rounded-md mb-3">
              <p className="text-sm mr-2 font-bold">3.</p>
              <p className="text-[13px] font-bold pr-2">Як створити продуктову лінійку, а саме лід магніт, тріпваєр, основний продукт, даунсейл продукт. Розбір 3-х самих популярних інструментів для упаковки інфо продуктів.</p>
              <Image src={lock} alt={"lock"} width={130} height={10} className="object-contain rounded-[5px]"></Image>
            </div>

            <div className="flex bg-white p-2 rounded-md mb-3">
              <p className="text-sm mr-2 font-bold">4.</p>
              <p className="text-[13px] font-bold pr-2">Як швидко зробити локалізацію свого продукту на всі мови світу за допомогою АІ</p>
              <Image src={lock} alt={"lock"} width={130} height={10} className="object-contain rounded-[5px]"></Image>
            </div>

            <div className="flex bg-white p-2 rounded-md mb-3">
              <p className="text-sm mr-2 font-bold">5.</p>
              <p className="text-[13px] font-bold pr-2">Який тип монетизації вибрати. Розбір топ 3-х найпопулярниших типів монетизації для міжнародних ринків.</p>
              <Image src={lock} alt={"lock"} width={130} height={10} className="object-contain rounded-[5px]"></Image>
            </div>

            <div className="flex bg-white p-2 rounded-md mb-3">
              <p className="text-sm mr-2 font-bold">6.</p>
              <p className="text-[13px] font-bold pr-2">Які воронки вибрати для старту. Розбір топ 5-ти самих дієвих воронок, для продажів інфо продуктів в 2024 р.</p>
              <Image src={lock} alt={"lock"} width={130} height={10} className="object-contain rounded-[5px]"></Image>
            </div>

            <div className="flex bg-white p-2 rounded-md mb-3">
              <p className="text-sm mr-2 font-bold">7.</p>
              <p className="text-[13px] font-bold pr-2">Як перетворити свій Інфо продукт на EdTech стартап за допомогою No-code підходу та вийти на міжнародний ринок!🌍</p>
              <Image src={lock} alt={"lock"} width={130} height={10} className="object-contain rounded-[5px]"></Image>
            </div>

          </section>
          <section className="mb-10">
          </section>
          <section className="mb-10" id="pay">
            <h2 className={"text-2xl text-center font-bold mb-5"}>
              Приєднуйтесь до курсу вже зараз за спеціальною, обмеженою у часі пропозицією
            </h2>
            <div className="text-center rounded-2xl bg-default p-5 flex flex-col items-center mb-5 mx-8">
              <p className={"text-xl mb-3 w-60"}>До старту навчання залишилось</p>
              <CountDown
                className={"text-5xl font-extrabold mb-5"}
                startDate={new Date("03-20-2024")} format={["hours", "minutes", "seconds"]}
              />
              <p className={"text-white text-xl mb-5"}><s>116 $</s> <b className={"text-4xl ml-2"}>29 $</b></p>
              <Link href={"/buy"} className={"w-full"}>
                <Button className={"w-full"}>
                  Придбати
                </Button>
              </Link>
            </div>
            <div className={"bg-white rounded-3xl p-5 text-center mx-2"}>
              <p className={"mb-5 text-xl font-bold"}>
                При покупці практикуму ти отримаєш 2 крутезних бонуса від моєї команди в подарунок 🎁
              </p>
              <ol className={"text-left list-decimal list-inside text-xl font-default"}>
                <li className={"mb-5"}>
                  Детальну інструкцію по налаштуванню таргету з нашими авторськими рекомендаціями.
                </li>
                <li className={"mb-5"}>
                  Детальну інструкцію по створенню креативів, які привертають увагу та продають!
                </li>
              </ol>
              <p className={"mb-5 text-xl uppercase"}>
                Все разом коштує <br />
                <p>159 $</p>
              </p>
              <p className={"mb-1 text-[24px] uppercase font-bold text-default"}>
                Але зараз:
              </p>
              <p className={"mb-5 text-[40px] uppercase font-bold text-default"}>
                29 $
              </p>
              <Link href={"/buy"}>
                <Button className={"w-full"}>
                  Придбати
                </Button>
              </Link>
            </div>
          </section>

          <div className="relative overflow-hidden h-12">
            <div className="absolute w-full flex animate-marquee">
              <div className="flex-shrink-0">
                <div className="flex">
                  <Image src={flag} alt="flag"></Image>
                  <p className="text-[24px] font-bold italic uppercase ml-4">Освічені <span className="text-[grey]">значить</span> вільні </p>
                </div>
              </div>
            </div>
          </div>

          <section className="p-8">
            <div className="bg-dark rounded-[20px] p-4">
              <h2 className="text-white text-[25px] font-bold text-center leading-7">Залишились сумніви?</h2>
              <p className="text-white text-center mt-4">👩🏻‍💻 Я розумію, що дуже складно купити хороший якісний продукт, який дасть результат!</p>
              <p className="text-white text-center mt-4 mb-4">Тому пропоную тобі подивитися демо мого продукту, де ти точно переконаєшся в його цінності і в легкості подачі, а також отримаєш круті інсайти!</p>
              <Link href={'https://secure.wayforpay.com/button/b438a91399378'}>
                <Button className={"w-full"}>
                  Відкрити
                </Button>
              </Link>

            </div>
          </section>
          <section className="pb-10">
            <h2 className="text-[30px] mb-10 font-extrabold uppercase text-center">
              Відгуки та кейси<br />
              студентів{" "}
              <span style={{ color: "#A699FF" }} className="pr-3">
                Лани
              </span>
            </h2>
            <div className="grid gap-4 grid-flow-row auto-rows-max mx-2">
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={YraGlebov} alt={""} />
                  <h3 className="text-lg font-bold">Yra Glebov</h3>
                </div>
                <p>Лана, сьогодні ми завершили навчання з написання UserStory.</p>
                <p>
                  Як на мене. то це були одні з найкращих майстер-класів які ми
                  проходили за вже проведений час навчання (але я впевнений, що
                  попереду буде ще багато справді корисних вправ).
                </p>
                <p>
                  В будь-якому навчанні я ціную: професійність викладача,
                  можливість практичного застосування отриманих знань, можливість
                  отримати відповіді на питання в режимі «тут і зараз».
                </p>
                <p>
                  І кожну з цих властивостей я відчув продовж проведення лекції: я
                  насправді відчував твоє експертне знання, кожен зі студентів мав
                  нагоду відпрацювати на практиці прийоми формування UserStory, а
                  якщо у когось виникало будь-яке питання - то ти надавала
                  вичерпну відповідь на нього.
                </p>
                <p>Як результат - ми спільними зусиллями склали</p>
                <p>
                  UserStory, яке завтра відправиться до розробників додатка
                  Wispence, і через короткий проміжок часу нова фіча &quot;здобуде
                  життя&quot; в фітнес додатку. Чекаю нових тем! Чекаю нових
                  практичних задач!
                </p>
                <p>Чекаю змістовних зустрічей!</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={YuliyaLisenko} alt={"Юлія Лисенко"} />
                  <h3 className="text-lg font-bold">Юлія Лисенко</h3>
                </div>
                <p>Практична Лекція по UserStory з тобою, Лана - це щось!!</p>
                <p>
                  Покроково, у реальному часі, на реальному завданні. Враховуючи
                  яке значення має для продукта вміння писати UserStory, саме
                  такий підхід допоможе розібратися, навчитися і почати
                  практикувати!
                </p>
                <p>Дякую за знання та натхнення</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={IrynkaKhalus} alt={"Irynka Khalus"} />
                  <h3 className="text-lg font-bold">Irynka Khalus</h3>
                </div>
                <p>
                  Лана, хочу сказати велике дякую за мега цікаву консультацію, де
                  Ви надали більш ніж вичерпні відповіді на кожне запитання.
                </p>
                <p>
                  Особлива вдячність за Вашу чесність і обʼєктивність, що Ви
                  розповідаєте реалії роботи в ІТ та того скільки потрібно
                  докласти зусиль, щоб туди ввійти.
                </p>
                <p>
                  Також, спасибі за мотивуючі історії Ваших колег, які і справді
                  надихають і показують, що все можливо, якщо докласти трохи
                  більше зусиль.
                </p>
                <p>
                  Також, хочу побажати Вам ще більшого розвитку, цікавих проєктів
                  та багато студентів, з якими Ви зможете ділитись своїми
                  навичками.
                </p>
                <p>
                  Слідкую за Вашим блогом і часто вражена, як мама двох маленьких
                  дітей знаходить час на те, щоб працювати і навчати інших.
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={AnastasiyaMelnik} alt={"Анастасія Мельник"} />
                  <h3 className="text-lg font-bold">Анастасія Мельник</h3>
                </div>
                <p>
                  Хочу дуже подякувати за такий крутий курс, фішка якого
                  досвідчений продукт менеджер з реальним проектом! Матеріал, який
                  був представлений на курсі, був добре структурований і чіткий.
                  Він дозволяв зрозуміти ключові концепції та методики,
                  пов&lsquo;язані з проджект та продукт менеджментом. Кожен урок
                  мав чітку мету і побудований логічно, що допомагало легше
                  засвоювати інформацію. Практичні завдання та проект, які ми
                  виконували під час курсу, були дуже цінними і корисними. Вони
                  давали нам можливість застосовувати отримані знання на практиці.
                  І мені настільки сподобалося аналізувати різні проекти та
                  придумувати гіпотези, що придумала маленький start-up)
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Mariya} alt={"Анастасія Мельник"} />
                  <h3 className="text-lg font-bold">Марія</h3>
                </div>
                <p>
                  Навчання сподобалось тим що було достатньо часу на виконання
                  завдань, була можливість особисто задати питання, також у нашій
                  групі чудові колеги в яких можна було також запитати усе що було
                  незрозуміло. Закріпила усі необхідні знання одразу на практиці
                  це дуже великий плюс. Єдине чого не вистачало це як я написала
                  вище це фідбеку по виконаних завданнях та дуже шкода що мій
                  проект ще не реалізовано. Усім іншим задоволена: навчання було
                  цікавим, доступним та зрозумілим, дуже дякую Лані за такий курс
                  надіюсь зможу отримати свій перший офер в цій сфері☺️
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2 ">
                  <Image
                    src={Pavel}
                    alt={"Pavel"}
                    style={{ width: 60, height: 60 }}
                  />
                  <h3 className="text-lg font-bold">Pavel</h3>
                </div>
                <p>
                  Фічі фічами, а без івентів буде складно створити справді
                  функціональний продукт, який задовільнить вибагливих
                  користувачів.
                </p>
                <p>
                  Тож сьогодні, ми пройшли одну з , важливіших тем для справжнього
                  product manager. Після майстер-класу кожен студент розуміє як
                  підготувати завдання для розробника на створення івентів, як
                  структуровано скласти список існуючих авентів і яким чином
                  відслідковувати зміни кожного з івентів!
                </p>
                <p>
                  Найближчим часом, при виконанні домашнього завдання студенти
                  закріплять ці знання на практиці.
                </p>
                <p>
                  А коли почнуть використовувати ці навички в роботі РМ, то
                  збережуть час і затрати на розробку, підвисять вдоволенність
                  користувачів та зроблять кожний свій проект максимально
                  ефективним!
                </p>
                <p>Дякую за черговий урок! Як завжди:</p>
                <ul>
                  <li> доступно доводиш інформацію</li>
                  <li>розказуєш тільки про головне</li>
                  <li>
                    аргументуєш необхідність цих знань з точки зору практичного
                    досвіду використання!
                  </li>
                </ul>
                <p>Ще одна сходинка до знань, яку ми подолали разом!</p>
                <Image src={hart} alt={""} className="mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Yuliya} alt={"Юлія"} />
                  <h3 className="text-lg font-bold">Юлія</h3>
                </div>
                <p>
                  Хочу тебе привітати із всіма класними змінами в твоєму житті!
                  Повернення додому, студія, а ще - з суперовим залученням
                  зацікавлених людей до твого завтрашнього вебінару!! Я теж хочу
                  приєднатись) розумію, що для мене,як вже для твоєї учениці буде
                  багато чого відомого, але твоя менторська програма мене так
                  надихає!! Від всього серця кажу!
                </p>
                <p>
                  Я вже по-іншому дивлюсь на всі додатки, стала стабільно
                  передивлятись все нові й нові, щоб бачити як хто придумав, якісь
                  цікаві рішення вже просто бачу!
                </p>
                <p>Тож, вітаю тебе і дякую)</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image
                    src={LinaKondratiuk}
                    alt={"Lina Kondratiuk"}
                    style={{ width: 60, height: 60 }}
                  />
                  <h3 className="text-lg font-bold">Lina Kondratiuk</h3>
                </div>
                <p>
                  Я дуже радію, що вирішила долучитися до цього курсу та стати
                  студенткою Лани! Багато факторів співпало: я достатньо часу
                  замислювалась стати світчером та почати шукати роботу у ІТ, і
                  тут побачила сторінку Лани, де мене &ldquo;запросили&ldquo;
                  спробувати і я вирішила спробувати! Для мене важливим було те,
                  що викладач - практикуючий РМ та обіцяний досвід роботи на
                  реальних реалізаціях діючого проекту, як стажування. Все вийшло
                  якнайкраще! Лекції невеликі, але розкривають теми повністю.
                  Немає води та зайвої інформації: все по суті. Q&A сесії, на яких
                  Лана ще більше розкривала теми та показувала багато реальних
                  прикладів з реальної роботи РМ менеджера. Записи лекцій та сесій
                  завжди під рукою і ти можеш повернутися до них, щоб щось згадати
                  чи розкрити для себе. Це допомагає, як у виконанні ДЗ, так і в
                  роботі над проєктом. Практичні майстер класи - це взагалі,
                  круть! Покроково, у реальному часі, на реальному завданні. А вже
                  зовсім згодом, я бачу цю фічу у додатку!) Лана завжди на
                  зв&lsquo;язку, готова допомогти та відповісти на питання,
                  надихає своїм прикладом, ставленням до роботи та до студентів!
                  Дякую за цей досвід! Далі буде..
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={OlgaLazebnikova} alt={"Ольга Лазебникова"} />
                  <h3 className="text-lg font-bold">Ольга Лазебникова</h3>
                </div>
                <p>
                  После курса у меня остались только положительные впечатления и
                  эмоции. Я очень рада что решилась пойти к Лане на курс. Ведь за
                  4 месяца я не только освоила 2 профессии, а ещё и имела
                  возможность отработать свои знания на практике. В том числе на
                  проект по реализации нового функционала в приложении. Эта задача
                  для меня была самой увлекательной из всех и я очень рада что
                  наши с Ланой представления о реализации нового функционала
                  совпали. Я очень благодарна за возможность поработать в таком
                  проекте и за то, что теперь этот проект я могу использовать в
                  своём портфолио. Я желаю Лане успехов, как на работе, так и в
                  дальнейшем обучении студентов новых потоков &ldquo;Продукт и
                  Проджект менеджер&ldquo;
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Sergij} alt={"Сергій"} />
                  <h3 className="text-lg font-bold">Сергій</h3>
                </div>
                <p>
                  Привіт, дякую тобі за можливість пройти стажування в вашій
                  компанії та практичні навички, які я придбав! Ти подаєш дуже
                  цікаво і живо інформацію. Успіхів тобі і твоїй компанії, щастя
                  та безпеки близьким та рідним!)
                </p>
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={OlhovskayaDarya} alt={"Ольховская Дарья"} />
                  <h3 className="text-lg font-bold">Ольховская Дарья</h3>
                </div>
                <p>
                  Я в восторге от знаний которые я приобрела и такого человека как
                  Лана! Она успевает все! и я брала с нее пример)) мы с ней
                  немного схожи) Спасибо ей за немного отодвинутую ширму IT!
                  Теперь я знаю чего хочу и что мне нужно) а самое главное - как
                  нужно делать и как ненужно)))Я полностью довольна курсом и буду
                  продолжать следить за твоей страничкой в инстаграмме)))
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col mb-4">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={MariyaPolonskaya} alt={"Mariya Polonskaya"} />
                  <h3 className="text-lg font-bold">Mariya Polonskaya</h3>
                </div>
                <p>
                  Ось наприклад, один із нас отримав офер, тому що гарно навчався
                </p>
                <p>
                  О! Вітаю!!! Це дійсно круто! І дякую Лані особисто за навчання і
                  менторство!
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}