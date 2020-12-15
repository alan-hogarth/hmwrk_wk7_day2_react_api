
const MusicDetails = ({musicInfo}) => {
    if (!musicInfo) return null;

    return (
        <>
            <h2>{musicInfo.feed.entry["im:artist"]}</h2>
        </>
    )
}

export default MusicDetails;