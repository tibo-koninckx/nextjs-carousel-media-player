'use client'
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {CarouselRef} from "antd/es/carousel";
import {Carousel} from 'antd';
import {MediaPlayer} from "@/app/components/MediaPlayer";

export function Videocarousel() {
    const carouselRef = useRef<CarouselRef | null>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


    const nextItem = () => {
        setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    };

    useEffect(() => {
        console.log("Next video", currentVideoIndex)
        carouselRef.current?.goTo(currentVideoIndex);
    }, [currentVideoIndex]);


    const handleVideoReady = useCallback(() => {
        // setShouldStartVideo(true);
    }, []);

    const videos = [
        {id: 2, url: 'https://youtu.be/xuP4g7IDgDM'},
        {id: 1, url: 'https://www.youtube.com/watch?v=zU9y354XAgM'},
        {id: 3, url: 'https://youtu.be/J1qsrBl_CR0'}
    ];

    return (
        <Carousel style={{height: "100vh", overflow: "hidden"}} ref={carouselRef}>
            {
                videos.map((media, index) => {
                    return <MediaPlayer key={index} videoURL={media.url} onVideoReady={handleVideoReady} shouldStart={index === currentVideoIndex} onNext={nextItem}/>;
                })
            }
        </Carousel>
    );
}
