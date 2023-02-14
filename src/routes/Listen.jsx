import React from "react";
import AudioPlayer from "../components/AudioPlayer";


export default function Listen() {
    return (
        <div id="listen" className="scroll">
            <div className="scroll-inner">
                <AudioPlayer />
            </div>
        </div>
    )
}