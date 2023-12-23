import ReactPlayer from "react-player";
import {useState} from "react";

interface CarrouselProps {
    onNext: () => void;
    videoURL: string;
}

export function MediaPlayer(props: CarrouselProps) {
    const {videoURL, onNext} = props;
    const [playing, setPlaying] = useState(false);

    return<>
        <ReactPlayer url={videoURL} />
    </>
}