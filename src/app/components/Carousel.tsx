import {useCallback, useRef} from "react";
import {CarouselRef} from "antd/es/carousel";

export function Carousel() {
    const carouselRef = useRef<CarouselRef | null>(null);
    const timeoutDuration = useRef<NodeJS.Timeout | null>(null);

    const nextItem = useCallback(() =>  {
        if(timeoutDuration.current) clearTimeout(timeoutDuration.current);
        carouselRef?.current?.next();
    }, []);

}