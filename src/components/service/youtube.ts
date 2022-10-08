import { searchVideo, Video } from "../../video";
export class Youtube {
  key: string;
 // getRequestOption: { method: string; redirect: string; };



  constructor(apiKey:string) {
    this.key = apiKey;
 
  }
  async mostPopular() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=14&key=${this.key}`,

      );
      const result = await response.json();
      //console.log(result);
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(query:string) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=14&type=video&key=${this.key}`,
       
      );
      const result = await response.json();
      const items = result.items.map((item:searchVideo) => ({
        ...item,
        id: item.id.videoId,
      }));
      return items;
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;
