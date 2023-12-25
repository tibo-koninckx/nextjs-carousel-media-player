'use client'
import {useCallback, useMemo, useRef} from "react";
import {CarouselRef} from "antd/es/carousel";
import {Carousel} from 'antd';
import {MediaPlayer} from "@/app/components/MediaPlayer";

interface CarouselItem {
    content: React.ReactNode
}

export function Videocarousel() {
    const carouselRef = useRef<CarouselRef | null>(null);
    const timeoutDuration = useRef<NodeJS.Timeout | null>(null);

    const nextItem = useCallback(() => {
        if (timeoutDuration.current) clearTimeout(timeoutDuration.current);
        carouselRef?.current?.next();
    }, []);

    const videos = [
        {id: 1, url: "https://drive.google.com/file/d/1trIj3AJBv28ZEmvkBNbrWbW16J5fy5Zi/view?usp=sharing"},
        {id: 2, url: "https://drive.google.com/file/d/1fmd54F0dFEdf97Kx6YCWCSqHiENYKpW5/view?usp=sharing"},
        {id: 3, url: "https://drive.google.com/file/d/1asHdejSg2uCnKvgqcOfc3Httzl51lT0G/view?usp=sharing"}
    ]

    const carouselItem: CarouselItem[] = useMemo(() => {
        return [
            ...videos.map((media, index) => {
                return {content: <MediaPlayer key={media.id} videoURL={media.url} onNext={nextItem}/>};
            }),
        ];
    }, [videos, nextItem]);


    return <>
        <Carousel style={{height: "100vh", overflow: "hidden"}}>
        </Carousel>
    </>

}