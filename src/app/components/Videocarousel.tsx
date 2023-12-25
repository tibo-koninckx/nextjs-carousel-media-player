'use client'
import {useCallback, useRef} from "react";
import {CarouselRef} from "antd/es/carousel";
import {Carousel} from 'antd';

export function Videocarousel() {
    const carouselRef = useRef<CarouselRef | null>(null);
    const timeoutDuration = useRef<NodeJS.Timeout | null>(null);

    const nextItem = useCallback(() =>  {
        if(timeoutDuration.current) clearTimeout(timeoutDuration.current);
        carouselRef?.current?.next();
    }, []);

    const videos = [
        "https://drive.google.com/file/d/1trIj3AJBv28ZEmvkBNbrWbW16J5fy5Zi/view?usp=sharing",
        "https://drive.google.com/file/d/1fmd54F0dFEdf97Kx6YCWCSqHiENYKpW5/view?usp=sharing",
        "https://drive.google.com/file/d/1asHdejSg2uCnKvgqcOfc3Httzl51lT0G/view?usp=sharing"
    ]

        return<>
        <Carousel style={{height: "100vh", overflow: "hidden"}}>
        </Carousel>
    </>

}