"use client";
import { FC, useEffect, useState } from 'react';
import { formatDuration, intervalToDuration, Duration } from 'date-fns';

type Props = {
    startDate: Date; 
    format: string[];
    className?: HTMLParagraphElement["className"];
};

export const CountDown: FC<Props> = ({ startDate, format, className }) => {
    const [duration, setDuration] = useState<Duration>({});
    const [endDate, setEndDate] = useState<Date | null>(null);

    useEffect(() => {

        const storedEndDate = localStorage.getItem("endDate");
        if (storedEndDate) {
            setEndDate(new Date(storedEndDate)); 
        } else {
            const newEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000); 
            setEndDate(newEndDate);
            localStorage.setItem("endDate", newEndDate.toISOString()); 
        }
    }, [startDate]);

    useEffect(() => {
        if (endDate) {
            const timer = setInterval(() => {
                const now = new Date(); 

                const diffInMs = endDate.getTime() - now.getTime();

                if (diffInMs <= 0) {
                    clearInterval(timer);
                    setDuration({ hours: 0, minutes: 0, seconds: 0 }); 
                    localStorage.removeItem("endDate"); 
                } else {
 
                    const duration = intervalToDuration({
                        start: 0,
                        end: diffInMs,
                    });
                    setDuration(duration);
                }
            }, 1000); 

            return () => {
                clearInterval(timer); 
            };
        }
    }, [endDate]); 

    return (
        <p className={className}>
            {formatDuration(duration, {
                format,
                delimiter: ":",
                zero: true,
                locale: { formatDistance: (_token: string, count: number) => String(count).padStart(2, '0') }
            })}
        </p>
    );
};
