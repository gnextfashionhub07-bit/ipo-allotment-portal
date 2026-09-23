import ArticlePageLayout from '../../../components/ArticlePageLayout';
import { ARTICLES } from '../../../content/articles';

const article = ARTICLES.find((a) => a.slug === 'reliance-power-share-value-today-price');

export const metadata = {
  title: `${article.title} | Allotment Status of IPO`,
  description: article.excerpt,
  alternates: {
    canonical: 'https://www.allotmentstatusofipo.in/blog/reliance-power-share-value-today-price',
  },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    type: 'article',
    publishedTime: article.date,
    authors: [article.author],
  }
};

export default function ReliancePowerShareValueTodayPricePage() {
  return (
    <ArticlePageLayout article={article}>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </ArticlePageLayout>
  );
}
