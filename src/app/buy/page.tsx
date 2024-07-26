import Button from "@/components/Button";
import Link from "next/link";
import FacebookPixel from "@/components/FacebookPixel";

export default function Buy() {
    return (
        <>
            <FacebookPixel />
            <div className={"md:w-96 mx-auto p-2 bg-fill"}>
                <main>
                    <header className={"mb-5"}>
                        <div className="text-2xl text-center mt-5">
                            <b>
                                by LANA SAPIZHUK
                            </b>
                        </div>
                    </header>
                    <section className={"mb-10 bg-fill"}>
                        <div>
                            <Link href={"https://secure.wayforpay.com/button/bfac208013485"}>
                                <Button className={"w-full bg-dark"}>
                                    Курс + 2 бонуси за 10 $
                                </Button>
                            </Link>
                            <h2 className="text-[28px] text-center mt-5 uppercase font-bold mb-4 text-dark p-4">
                                Зачекай! <br />
                                Давай я збережу тобі 2000$💸
                            </h2>
                            <p className="mb-5 dark:text-black md:pr-30 text-center text-[24px] px-4">
                                Зараз не обовʼязково наймати команду, щоб налашутвати та підключити оплачи, зробити розтермінування платежу чи створити бота в IG та TG.
                            </p>
                            <p className="font-bold text-[24px] text-center px-4 mb-6">ТИ ЦЕ ВСЕ МОЖЕШ ЗРОБИТИ САМОСТІЙНО!</p>
                            <div className="grow-1 bg-white rounded-3xl p-5">
                                <h3 className={"font-bold mb-5 text-center text-[24px]"}>
                                    ЗАБИРАЙ 4 ДЕТАЛЬНІ МАЙСТЕР КЛАСИ ДЕ Я НАВЧУ ТЕБЕ 👇
                                </h3>
                                <ol className={"list-decimal list-inside text-[18px]"}>
                                    <li className={"mb-5"}>
                                        Як налаштувати платіжну систему Wayforpay, підключити оплати до сайту через карту та Apple чи Google pay, А також як налаштувати розтермінування від MONO та PRIVAT.
                                    </li>
                                    <li className={"mb-5"}>
                                        Як підключити міжнародну платіжну систему Stripe, для продажів закордоном.
                                    </li>
                                    <li className={"mb-5"}>
                                        Як створити бота в Інстаграмі для комунікації та продажів через сервіс ManyChat. < br /><b>Ти отримаєш 3 готових шаблона налаштувань під різні сценарії - для видачі лід магніту,  для продажів, а також інтерактивний тест.</b>
                                    </li>
                                    <li className={"mb-5"}>
                                        Як створити бота в Telegram для українського ринку та в Whatsapp для міжнародних ринків за допомогою сервісу SendPulse. <span className="font-bold">Ти отримаєш 3 готових шаблона для бота в ТG</span>
                                    </li>
                                </ol>
                                <p className={"uppercase text-center text-xl mb-5"}>
                                    Тобто <br />все разом коштує <br />
                                    $124
                                </p>
                                <p className={"text-center text-[24px] font-bold text-default uppercase mb-5 leading-9"}>
                                    Але зараз: <br />
                                    <span className={"font-bold text-[40px]"}>$29</span>
                                </p>
                                <p className={"text-xl font-bold text-center mb-6"}>
                                    Якщо додати ці 4 продукти до курсу з бонусом то вийде
                                </p>
                                <ul className={"mb-5"}>
                                    <li>
                                        ✔️ Курс по запуску + 2 рекомендації по таргету та креативам
                                    </li>
                                    <li>
                                        ✔️4 додаткових майстер класи
                                    </li>
                                </ul>
                                <p className={"text-2xl text-default text-center font-bold mb-5"}>
                                    Все разом < br/>$49 + $29 = $78
                                </p>
                                <Link href={"https://secure.wayforpay.com/button/b23382fa2f335"}>
                                    <Button className={"w-full"}>
                                        Придбати все за $78
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-center text-xl font-bold my-5">Але якщо ти хочеш лише курс та бонус, тоді ось кнопка </p>
                            <Link href={"https://secure.wayforpay.com/button/bfac208013485"}>
                                <Button className={"w-full bg-dark"}>
                                    Курс + 2 бонуси за 49 $
                                </Button>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
