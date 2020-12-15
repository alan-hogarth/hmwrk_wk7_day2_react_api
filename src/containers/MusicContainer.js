import {useState, useEffect} from "react";
import MusicDetails from "../components/MusicDetails";

const MusicContainer = () => {

    const [musicInfo, setMusicInfo] = useState(null);

    const getMusicInfo = () => {
    fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then((res) => {
            return res.json()
        })
        .then((data)=> {
            setMusicInfo(data);
        })
    };

    useEffect(() => {
        getMusicInfo();
    }, []);

    return (
        <>
            <h1>UK Top 20</h1>
            <MusicDetails musicInfo={musicInfo}/>
        </>

    )
}

export default MusicContainer;