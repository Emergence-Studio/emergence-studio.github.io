import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  try {
    const response = await fetch('https://seekingemergence.substack.com/feed');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const xmlText = await response.text();
    const result = await parseStringPromise(xmlText, { explicitArray: false });

    if (!result.rss || !result.rss.channel || !result.rss.channel.item) {
      throw new Error('Invalid RSS feed structure');
    }

    const posts = Array.isArray(result.rss.channel.item) 
      ? result.rss.channel.item 
      : [result.rss.channel.item];

    const formattedPosts = posts.map((item: any) => ({
      title: item.title,
      description: item.description,
      url: item.link,
      date: item.pubDate,
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return NextResponse.json({ error: 'Failed to fetch Substack posts' }, { status: 500 });
  }
}

