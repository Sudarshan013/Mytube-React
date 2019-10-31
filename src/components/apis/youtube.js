
import axios from 'axios'
const KEY = 'AIzaSyDS0x9sRqqGRXmGRX9ExZS2yA0sTX0rT5M';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})