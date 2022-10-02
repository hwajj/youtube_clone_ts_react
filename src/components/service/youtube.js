class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOption = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  async mostPopular() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=14&key=${this.key}`,
        this.getRequestOption
      );
      const result = await response.json();
      //console.log(result);
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=14&type=video&key=${this.key}`,
        this.getRequestOption
      );
      const result = await response.json();
      const items = result.items.map((item) => ({
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
