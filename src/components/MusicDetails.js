
const MusicDetails = ({musicInfo}) => {
    if (!musicInfo) return null;


    
    return (
        <>
            <h2>1: {musicInfo.feed["entry"][0]["title"]["label"]}</h2>
            <h2>2: {musicInfo.feed["entry"][1]["title"]["label"]}</h2>
            <h2>3: {musicInfo.feed["entry"][2]["title"]["label"]}</h2>
            <h2>4: {musicInfo.feed["entry"][3]["title"]["label"]}</h2>
            <h2>5: {musicInfo.feed["entry"][4]["title"]["label"]}</h2>
            <h2>6: {musicInfo.feed["entry"][5]["title"]["label"]}</h2>
            <h2>7: {musicInfo.feed["entry"][6]["title"]["label"]}</h2>
            <h2>8: {musicInfo.feed["entry"][7]["title"]["label"]}</h2>
            <h2>9: {musicInfo.feed["entry"][8]["title"]["label"]}</h2>
            <h2>10: {musicInfo.feed["entry"][9]["title"]["label"]}</h2>
            <h2>11: {musicInfo.feed["entry"][10]["title"]["label"]}</h2>
            <h2>12: {musicInfo.feed["entry"][11]["title"]["label"]}</h2>
            <h2>13: {musicInfo.feed["entry"][12]["title"]["label"]}</h2>
            <h2>14: {musicInfo.feed["entry"][13]["title"]["label"]}</h2>
            <h2>15: {musicInfo.feed["entry"][14]["title"]["label"]}</h2>
            <h2>16: {musicInfo.feed["entry"][15]["title"]["label"]}</h2>
            <h2>17: {musicInfo.feed["entry"][16]["title"]["label"]}</h2>
            <h2>18: {musicInfo.feed["entry"][17]["title"]["label"]}</h2>
            <h2>19: {musicInfo.feed["entry"][18]["title"]["label"]}</h2>
            <h2>20: {musicInfo.feed["entry"][19]["title"]["label"]}</h2>
        </>
    )
}

export default MusicDetails;