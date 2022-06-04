class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOption = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        return result.items;
      })
      .catch(error => console.log('error', error));
  }

  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=25&type=video&key=${this.key}`,
      this.requestOptions,
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => items)
      .catch(error => console.log('error', error));
  }
}

export default Youtube;
