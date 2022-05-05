import { useStore } from '../context/StoreProvider.js';

export default function IsRepeated (alignment) {
    const { team } = useStore();
    let alignmentCharacters = 0;

    team.forEach(character => {
        if(character.biography.alignment === alignment) alignmentCharacters++
    })

    if(alignmentCharacters >=3) {
        return true
    } else {
        return false
    }
}