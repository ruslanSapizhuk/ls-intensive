import Button from "@/components/Button";
import Link from "next/link";

export default function Buy() {
    return (
        <div className={"md:w-96 mx-auto p-5"}>
            <main>
                <header className={"mb-5"}>
                    <div className="text-2xl text-center">
                        <i>
                            <b>
                                by LANA B<small>&</small>M
                            </b>
                        </i>
                    </div>
                </header>
                <section className={"mb-10"}>
                    <div>
                        <Link href={"https://secure.wayforpay.com/button/bb123f60b127a"}>
                            <Button className={"w-full"} inverted>
                                Інтенсив + бонуси за $9
                            </Button>
                        </Link>
                        <h2 className="text-3xl text-center mt-5 uppercase font-bold mb-10 text-default">
                            Зачекай! Давай я збережу тобі 500$
                        </h2>
                        <p className="mb-5 dark:text-black md:pr-30 text-center">
                            Зараз не обовʼязково наймати команду, щоб зробити лендінг, налашутвати та підключити оплати та запрограмувати кабінет для видачі матеріалів - ТИ ЦЕ ВСЕ МОЖЕШ ЗРОБИТИ САМОСТІЙНО!
                        </p>
                        <div className="mb-5 bg-white rounded-3xl p-5 font-bold text-center">
                            Створюй курси, марафони,
                            практикуми і відразу монетизуй їх 👇
                        </div>
                        <div className="grow-1 bg-white rounded-3xl p-5">
                            <h3 className={"font-bold mb-5 text-center"}>
                                ЗАБИРАЙ ДЕТАЛЬНІ ВІДЕО УРОКИ ДЕ Я РОЗПОВІМ ТОБІ
                            </h3>
                            <ol className={"list-decimal list-inside"}>
                                <li className={"mb-5"}>
                                    Як зробили сайт через конструктор самостійно. Огляд популярних конструкторів
                                </li>
                                <li className={"mb-5"}>
                                    Як налаштувати платіжну систему Wayforpay та підключити оплати до лендінгу
                                </li>
                                <li className={"mb-5"}>
                                    Як налаштувати бот в TG для видачі матеріалів онлайн продукта
                                </li>
                            </ol>
                            <p className={"uppercase text-center text-xl mb-5"}>
                                Тобто все разом коштує <br/>
                                $60
                            </p>
                            <p className={"text-center text-2xl text-default uppercase font-bold"}>
                                Але зараз: <br/>
                                15 $
                            </p>
                            <p className={"text-xl font-bold text-center"}>
                                Якщо додати ці 3 продукти до інтенсиву з бонусами то вийде
                            </p>
                            <ul className={"mb-5"}>
                                <li>
                                    ✔️ 14-дений інтенсив + 2 бонуси
                                </li>
                                <li>
                                    ✔️ Розробка сайту
                                </li>
                                <li>
                                    ✔️ Підключеня оплат Wayforpay
                                </li>
                                <li>
                                    ✔️ Бот в TG
                                </li>
                            </ul>
                            <p className={"text-2xl text-default font-bold mb-5"}>
                                Все разом $9 + $15 = $24
                            </p>
                            <Link href={"https://secure.wayforpay.com/button/b7d462ef190ae"}>
                                <Button className={"w-full"}>
                                    Придбати все за $24
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
