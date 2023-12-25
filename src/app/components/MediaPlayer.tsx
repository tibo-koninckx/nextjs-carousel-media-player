import ReactPlayer from "react-player";
import {useEffect, useState} from "react";

interface MediaPlayerProps {
    onNext: () => void;
    onVideoReady: () => void;
    videoURL: string;
    shouldStart: boolean;
}

export function MediaPlayer(props: MediaPlayerProps) {
    const { videoURL, onNext, onVideoReady, shouldStart } = props;
    const [playing, setPlaying] = useState(false);

    const videoEnd = () => {
        setPlaying(false);
        onNext();
    };

    useEffect(() => {
        if (shouldStart) {
            setPlaying(true);
        }
    }, [shouldStart]);

    return (
        <ReactPlayer
            url={videoURL}
            playing={playing}
            muted={true}
            height={'100vh'}
            width={'100vw'}
            onEnded={videoEnd}
        />
    );
}
