const Shuffle = (arrayList) => {
    let currentIndex = arrayList.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arrayList[currentIndex], arrayList[randomIndex]] = [
        arrayList[randomIndex], arrayList[currentIndex]];
    }

    return arrayList;
};

export default Shuffle;