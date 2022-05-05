import { useStore } from '../context/StoreProvider.js';

export default function Limit () {
    const { team } = useStore();

    if(team.length >= 6) {
        return true
    } else {
        return false
    }
}