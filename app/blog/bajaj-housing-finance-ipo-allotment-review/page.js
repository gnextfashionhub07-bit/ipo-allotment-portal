import ArticlePageLayout from '../../../components/ArticlePageLayout';
import { ARTICLES } from '../../../content/articles';

const article = ARTICLES.find((a) => a.slug === 'bajaj-housing-finance-ipo-allotment-review');

export const metadata = {
  title: `${article.title} | Allotment Status of IPO`,
  description: article.excerpt,
  alternates: {
    canonical: 'https://www.allotmentstatusofipo.in/blog/bajaj-housing-finance-ipo-allotment-review',
  },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    type: 'article',
    publishedTime: article.date,
    authors: [article.author],
  }
};

export default function BajajHousingFinanceIpoAllotmentReviewPage() {
  return (
    <ArticlePageLayout article={article}>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </ArticlePageLayout>
  );
}
