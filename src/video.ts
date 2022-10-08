export interface searchVideo {
    id : idData;
    snippet : snippetData;
}


export interface Video {
    id : string;
    snippet : snippetData;
}

interface idData {
    videoId: string;
}

interface snippetData {
    metadata: string;
    title: string;
    channel: string;
    thumbnails: mediumData;
    channelTitle: string;
    description: string;
}

interface mediumData {
    medium: urlData;
}

interface urlData {
    url : string;
}

export interface Display {
    type: string;
}

