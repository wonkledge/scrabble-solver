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
    },
    points: number
};

const letterValues: any = {
    a: 1, b: 3, c:3, d:2, e:1, f:4, g:2, h:4, i:1, j:8, k:10, l:1, m:2, n:1, o:1, p:3, q:8, r:1, s:1, t:1, u:1, v:4, w:10, x:10, y:10, z:10
}

const countValue = (word: string): number => word.split('').reduce( (value: number, letter: string): number => {
    return value + letterValues[letter];
}, 0)

export const wordDataFactory = (value: string): WordData => {
    let word: WordData = {value, composition: {}, points: countValue(value)};

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

export const findWord = (dico: string[], scrabbleHand: string): Object[] => {
    const sh = wordDataFactory(scrabbleHand);

    return dico.reduce( (wordsData: WordData[], word: string): WordData[] => {
        const w = wordDataFactory(word);
        if (compare(sh, w)) {
            return [...wordsData, w];
        }

        return wordsData;
    }, []).map(word => ({value: word.value, points: word.points}));
};
