import ReactPlayer from "react-player";
import {useState} from "react";

interface CarrouselProps {
    onNext: () => void;
    videoURL: string;
}

export function MediaPlayer(props: CarrouselProps) {
    const {videoURL, onNext} = props;
    const [playing, setPlaying] = useState(false);

    const videoEnd = () => {
        setPlaying(false);
        onNext();
    };

    return <>
        <ReactPlayer url={videoURL} playing={playing} muted={true} height={'100vh'} width={'100vw'}
                     onReady={() => setPlaying(true)}
                     stopOnUnmount={true} onEnded={videoEnd}/>
    </>
}