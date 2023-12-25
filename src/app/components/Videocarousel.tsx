'use client'
import { useCallback, useMemo, useRef, useState } from "react";
import { CarouselRef } from "antd/es/carousel";
import { Carousel } from 'antd';
import { MediaPlayer } from "@/app/components/MediaPlayer";

interface CarouselItem {
    content: React.ReactNode
}

export function Videocarousel() {
    const carouselRef = useRef<CarouselRef | null>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [shouldStartVideo, setShouldStartVideo] = useState(false);

    const startVideo = useCallback(() => {
        setShouldStartVideo(true);
    }, []);

    const nextItem = useCallback(() => {
        setShouldStartVideo(false);
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        carouselRef?.current?.next();
    }, []);

    const handleVideoReady = useCallback(() => {
        setShouldStartVideo(true);
    }, []);

    const videos = [
        { id: 1, url: 'https://drive.google.com/file/d/1trIj3AJBv28ZEmvkBNbrWbW16J5fy5Zi/view?usp=sharing' },
        { id: 2, url: 'https://drive.google.com/file/d/1fmd54F0dFEdf97Kx6YCWCSqHiENYKpW5/view?usp=sharing' },
        { id: 3, url: 'https://drive.google.com/file/d/1asHdejSg2uCnKvgqcOfc3Httzl51lT0G/view?usp=sharing' }
    ];

    const videoItem: CarouselItem[] = useMemo(() => {
        return [
            ...videos.map((media, index) => {
                return { content: <MediaPlayer key={shouldStartVideo ? 'playing' : 'paused'} videoURL={media.url} onVideoReady={handleVideoReady} shouldStart={currentVideoIndex === index} onNext={nextItem} /> };
            }),
        ];
    }, [videos, handleVideoReady, currentVideoIndex, shouldStartVideo]);

    return (
        <Carousel style={{ height: "100vh", overflow: "hidden" }} ref={carouselRef}>
            {videoItem.map((item, index) => (
                <div key={index} style={{ width: "100%", height: "100%", padding: "10px" }}>
                    {item.content}
                </div>
            ))}
        </Carousel>
    );
}
