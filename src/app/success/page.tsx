"use client"

import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import FacebookPixel from "@/components/FacebookPixel";
import { useSearchParams } from "next/navigation"
import * as pixel from "../../lib/fpixel";
import pmLanaImage from "@/assets/PM-Lana.png";
import instagram from "@/assets/instagram.svg";

export default function Success() {
    const searchParams = useSearchParams();

    return (
        <>
            <FacebookPixel event={() => pixel.event('Purchase', {
                value: `${searchParams.get('price')}.00`,
                currency: 'USD'
            })} />
            <div className={"md:w-96 mx-auto p-2 bg-gradientfill"}>
                <main className="bg-gradientfill">
                    <header className={"mb-5"}>
                        <div className="text-2xl text-center pt-10">
                            <b>
                                by LANA SAPIZHUK
                            </b>
                        </div>
                    </header>
                    <section className={"mb-10"}>
                        <div>
                            <h2 className="text-3xl text-center mt-5 uppercase font-bold mb-10 text-default">
                                Оплата пройшла успішно
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

                            <div className="grow-1 bg-white rounded-3xl p-5">
                                <h3 className={"font-bold mb-5 text-center text-[22px]"}>
                                    Увага!
                                    <br />
                                    Зачекай поки тобі згенерується доступ та прочитай правила нижче👇
                                </h3>
                                <p className="text-[18px] mb-5">
                                    *Доступи до чату з навчанням тобі прийдуть на почту через декілька хвилин після оплати
                                </p>
                                <p className="text-[18px]">
                                    **Якщо доступи не прийшли скоріш за все почта була введена з помилкою, напиши мені в інстаграм @lana.sapizhuk і ми знайдемо твою оплату та відкриємо доступ.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={"mb-10"}>
                        <p className={"mb-5 font-bold text-center text-xl px-5"}>
                            Я знаю як потрібна підтримка на старті! Інколи самому вкрай важко з усім розібратися
                        </p>
                        <p className={"mb-5 text-center text-xl"}>
                            Тому я пропоную тобі свою підтримку протягом <br /><b>наступних 3 місяці 🔥</b>
                        </p>
                        <p className={"mb-5 text-center text-l font-bold"}>
                            *сумарна к-ть хв підтримки = 120хв
                        </p>
                        <p className={"mb-5 text-center text-xl"}>
                            Тобто протягом наступних 3-х місяців ти можеш мені писати в TG, ставити запитання, або ж зізвонюватися по Google Meet.
                        </p>
                        <p className={"mb-5 text-center text-[24px] font-bold"}>
                            Лише зараз ти можеш придбати мою підтримку зі
                            <span className={"text-default text-2xl uppercase mt-1 block"}>ЗНИЖКОЮ 75%</span>
                            всього за 100$ замісь 300$
                        </p>
                        <Link href={"https://secure.wayforpay.com/button/bd1a1cfbae3f5"}>
                            <Button className={"w-full bg-dark"} inverted>
                                Придбати підтримку за $100
                            </Button>
                        </Link>
                    </section>
                </main>
            </div>
        </>
    );
}
