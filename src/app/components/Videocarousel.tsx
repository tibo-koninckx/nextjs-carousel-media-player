'use client'
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
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
    const [nextVideoIndex, setNextVideoIndex] = useState(0);

    useEffect(() => {
        if (shouldStartVideo) {
            carouselRef?.current?.next();
            setCurrentVideoIndex(nextVideoIndex);
            setShouldStartVideo(false);
            if(nextVideoIndex === videos.length) {
                setNextVideoIndex(0);
            }
        }
    }, [shouldStartVideo, nextVideoIndex]);

    const nextItem = useCallback(() => {
        setNextVideoIndex((currentIndex) => (currentIndex + 1) % videos.length);
        setShouldStartVideo(true);
    }, []);



    const handleVideoReady = useCallback(() => {
        setShouldStartVideo(true);
    }, []);

    const videos = [
        { id: 1, url: 'https://www.youtube.com/watch?v=zU9y354XAgM' },
        { id: 2, url: 'https://youtu.be/xuP4g7IDgDM' },
        { id: 3, url: 'https://youtu.be/J1qsrBl_CR0' }
    ];

    const videoItem: CarouselItem[] = useMemo(() => {
        return [
            ...videos.map((media, index) => {
                return { content: <MediaPlayer key={shouldStartVideo ? 'playing' : 'paused'} videoURL={media.url} onVideoReady={handleVideoReady} shouldStart={currentVideoIndex ===index} onNext={nextItem} /> };
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
