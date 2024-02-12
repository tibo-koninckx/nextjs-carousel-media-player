import ReactPlayer from "react-player";
import {Key, useEffect, useRef, useState} from "react";

interface MediaPlayerProps {
    onNext: () => void;
    onVideoReady: () => void;
    videoURL: string;
    shouldStart: boolean;
    key?: Key | null | undefined;
}

export function MediaPlayer(props: MediaPlayerProps) {
    const { videoURL, onNext, onVideoReady, shouldStart, key } = props;
    const playerRef = useRef<ReactPlayer>(null);

    useEffect(() => {
        if (shouldStart) {
            playerRef.current?.seekTo(0);
        }
    }, [shouldStart]);

    const onDone = () => {
        console.log(playerRef.current?.getCurrentTime())
        playerRef.current?.seekTo(0);
        onNext();
    }

    return (
        <ReactPlayer
            key={key}
            ref={playerRef}
            url={videoURL}
            playing={shouldStart}
            muted={true}
            height={'100vh'}
            width={'100vw'}
            onEnded={onDone}
        />
    );
}
