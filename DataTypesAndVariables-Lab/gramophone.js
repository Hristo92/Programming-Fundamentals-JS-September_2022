function gramophone(bandName, albumName, songName){

    let songDuration = (albumName.length * bandName.length) * songName.length / 2;

    let rotationTimes = Math.ceil(songDuration/2.5);

    console.log(`The plate was rotated ${rotationTimes} times.`);

 
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');