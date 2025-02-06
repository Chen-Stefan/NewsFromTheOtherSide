// config/media.ts
export type MediaSource = {
    id: string;
    name: string;
    rssUrl: string;
    bias: 'progressive' | 'conservative' | 'moderate';
};

export const mediaSources: MediaSource[] = [
    {
        id: 'nyt',
        name: 'New York Times',
        rssUrl: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
        bias: 'progressive'
    },
    {
        id: 'fox',
        name: 'Fox News',
        rssUrl: 'http://feeds.foxnews.com/foxnews/latest',
        bias: 'conservative'
    },
    {
        id: 'reuters',
        name: 'Reuters',
        rssUrl: 'http://feeds.reuters.com/reuters/topNews',
        bias: 'moderate'
    }
];