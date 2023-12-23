import ReactPlayer from "react-player";

interface CarrouselProps {
    onNext: () => void;
    videoURL: string;
}

export function MediaPlayer(props: CarrouselProps) {
    const {videoURL, onNext} = props;
    return<>
        <ReactPlayer/>
    </>
}