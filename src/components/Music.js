function Music() {
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:100}}>
            <img width="400" src={require('../assets/Music.gif')}/>
            <audio controls>
            <source src={require('../assets/loveLike.mp3')} type="audio/mpeg" />
            </audio>
        </div>


    );
}

export default Music;