"use client"

import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import FacebookPixel from "@/components/FacebookPixel";
import {useSearchParams} from "next/navigation"
import * as pixel from "../../lib/fpixel";
import pmLanaImage from "@/assets/PM-Lana.png";

export default function Success() {
    const searchParams = useSearchParams();

    return (
        <>
            <FacebookPixel event={() => pixel.event('Purchase', {
                value: `${searchParams.get('price')}.00`,
                currency: 'USD'
            })}/>
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
                            <h2 className="text-3xl text-center mt-5 uppercase font-bold mb-10 text-default">
                                Оплата пройшла успішно
                            </h2>
                            <div className={"mb-5"}>
                                <Image src={pmLanaImage} alt="Lana Sapizhuk" />
                            </div>
                            <div className="grow-1 bg-white rounded-3xl p-5">
                                <h3 className={"font-bold mb-5 text-center"}>
                                    Увага!
                                    <br/>
                                    Зачекай поки тобі згенерується доступ та прочитай правила нижче👇
                                </h3>
                                <p>
                                    *Доступи до чату з навчанням тобі прийдуть на почту через декілька хвилин після оплати
                                </p>
                                <p>
                                    **Якщо доступи не прийшли скоріш за все почта була введена з помилкою, напиши мені в інстаграм і ми знайдемо твою оплату та відкриємо доступ.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={"mb-10"}>
                        <p className={"mb-5 font-bold text-center text-xl"}>
                            Я знаю як потрібна підтримка на старті! Інколи самому вкрай важко з усім розібратися
                        </p>
                        <p className={"mb-5 text-center text-xl"}>
                            Тому я пропоную тобі свою підтримку - <b>зідзвон на 90 хв зі мною</b>
                        </p>
                        <p className={"mb-5 text-center text-xl"}>
                            Де ми розберемо абсолютно всі моменти та нюанси, які потрібні для запуску саме в твоїй ніші.
                        </p>
                        <p className={"mb-5 text-center text-xl font-bold"}>
                            Лише зараз ти можеш придбати мою підтримку зі
                            <span className={"text-default text-2xl uppercase mt-1 block"}>ЗНИЖКОЮ 75%</span>
                            всього за 50$ замісь 200$
                        </p>
                        <Link href={"https://secure.wayforpay.com/button/bd1a1cfbae3f5"}>
                            <Button className={"w-full"} inverted>
                                Придбати підтримку за $50
                            </Button>
                        </Link>
                    </section>
                </main>
            </div>
        </>
    );
}
