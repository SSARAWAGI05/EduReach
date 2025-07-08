// pages/api/financeNews.ts (Next.js API Route)
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

const MINT_URL = 'https://www.livemint.com/money';
const ET_URL = 'https://economictimes.indiatimes.com/news/economy';
const TOI_URL = 'https://timesofindia.indiatimes.com/business/india-business';

async function fetchMint() {
  const res = await axios.get(MINT_URL);
  const $ = cheerio.load(res.data);
  const articles: { title: string; url: string; source: string }[] = [];

  $('a').each((_, el) => {
    const title = $(el).text().trim();
    const href = $(el).attr('href');
    if (title && href && href.startsWith('/money/')) {
      articles.push({
        title,
        url: `https://www.livemint.com${href}`,
        source: 'LiveMint'
      });
    }
  });
  return articles.slice(0, 5);
}

async function fetchET() {
  const res = await axios.get(ET_URL);
  const $ = cheerio.load(res.data);
  const articles: { title: string; url: string; source: string }[] = [];

  $('a').each((_, el) => {
    const title = $(el).text().trim();
    const href = $(el).attr('href');
    if (title && href && href.includes('/news/economy/')) {
      articles.push({
        title,
        url: href.startsWith('http') ? href : `https://economictimes.indiatimes.com${href}`,
        source: 'Economic Times'
      });
    }
  });
  return articles.slice(0, 5);
}

async function fetchTOI() {
  const res = await axios.get(TOI_URL);
  const $ = cheerio.load(res.data);
  const articles: { title: string; url: string; source: string }[] = [];

  $('a').each((_, el) => {
    const title = $(el).text().trim();
    const href = $(el).attr('href');
    if (title && href && href.includes('/business/india-business/')) {
      articles.push({
        title,
        url: href.startsWith('http') ? href : `https://timesofindia.indiatimes.com${href}`,
        source: 'TOI Business'
      });
    }
  });
  return articles.slice(0, 5);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [mint, et, toi] = await Promise.all([fetchMint(), fetchET(), fetchTOI()]);
    res.status(200).json([...mint, ...et, ...toi]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch finance news' });
  }
}
