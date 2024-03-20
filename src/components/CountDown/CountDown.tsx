"use client"
import { FC, useEffect, useState } from 'react';
import { formatDuration, intervalToDuration, Duration } from 'date-fns';

type Props  = {
    startDate: Date;
    format: string[];
    className?: HTMLParagraphElement["className"];
};
export const CountDown: FC<Props> = ({ startDate, format, className }) => {
    const [duration, setDuration] = useState<Duration>({});

    useEffect(() => {
        const timer = setInterval(() => {
            const duration = intervalToDuration({
                start: startDate,
                end: new Date(),
            });
            setDuration(duration);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [startDate]);

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
}