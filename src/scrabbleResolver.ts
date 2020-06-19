export type WordData = {
    value: string,
    composition: {
        a?: number,
        b?: number,
        c?: number,
        d?: number,
        e?: number,
        f?: number,
        g?: number,
        h?: number,
        i?: number,
        j?: number,
        k?: number,
        l?: number,
        m?: number,
        n?: number,
        o?: number,
        p?: number,
        q?: number,
        r?: number,
        s?: number,
        t?: number,
        u?: number,
        v?: number,
        w?: number,
        x?: number,
        y?: number,
        z?: number
    }
};

export const wordDataFactory = (value: string): WordData => {
    let word: WordData = {value, composition: {}};

    return value.split('').reduce((wordData: WordData , letter: string): WordData => {
        if (wordData.composition[letter])
            return {...wordData, composition: { ...wordData.composition, [letter]: wordData.composition[letter] + 1}};

        return {...wordData, composition: {...wordData.composition, [letter]: 1}};
    }, word)
};

export const compare = (scrabbleHand: WordData, wordTest: WordData) : boolean => {
    return Object.keys(wordTest.composition).reduce((isIncluded: boolean, letter: string): boolean => {
        return isIncluded && scrabbleHand.composition.hasOwnProperty(letter) && scrabbleHand.composition[letter] >= wordTest.composition[letter];
    }, true);
}

export const findWord = (dico: string[], scrabbleHand: string): string[] => {
    const sh = wordDataFactory(scrabbleHand);

    return dico.reduce( (wordsData: WordData[], word: string): WordData[] => {
        const w = wordDataFactory(word);
        if (compare(sh, w)) {
            return [...wordsData, w];
        }

        return wordsData;
    }, []).map(word => word.value);
};
