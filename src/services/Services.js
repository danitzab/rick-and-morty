import Axios from 'axios';

export const getImages = () => {
    return Axios.get(`https://rickandmortyapi.com/api/character/`)
}