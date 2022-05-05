import { useStore } from '../context/StoreProvider.js';

export default function IsRepeated (id) {
    const { team } = useStore();

    return team.find(character => character.id === id);
}