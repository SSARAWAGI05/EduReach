import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

type FinanceNewsItem = {
  title: string;
  url: string;
  source: string;
};

const News: React.FC = () => {
  const [financeNews, setFinanceNews] = useState<FinanceNewsItem[]>([]);

  useEffect(() => {
    fetch('/api/financeNews')
      .then((res) => res.json())
      .then((data) => setFinanceNews(data))
      .catch(() => setFinanceNews([]));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Finance & Economics News</h1>
          <p className="text-xl text-gray-600">Headlines sourced live from trusted publications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financeNews.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.source}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
