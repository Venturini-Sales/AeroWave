import React, { useState, useEffect, useRef } from "react";
import "./Audio.css";
import playIcon from "../../assets/icons/Play.png";
import pauseIcon from "../../assets/icons/Pause.png";

const AudioPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
        };

        const updateDuration = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const seekTime = e.target.value;
        setCurrentTime(seekTime);
        audioRef.current.currentTime = seekTime;
    };

    return (
        <div className="audioPlayer">
            <audio ref={audioRef} src={audioSrc} />
            <button className="controlButton" onClick={togglePlay}>
                {isPlaying ? (<img src={pauseIcon} alt="Pause" />) : (<img src={playIcon} alt="Play" />)}
            </button>
            <input
                type="range"
                id="seekbar"
                value={currentTime}
                max={duration || 0}
                onChange={handleSeek}
                className="seekbar"
            />
            <div className="timeDisplay">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
        </div>
    );
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default AudioPlayer;