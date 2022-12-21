// our-domain.com/news/[ID]

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  // call id from route
  const newsId = router.query.newsId;

  return <h1>This Detail Page { newsId }</h1>;
}

export default DetailPage;
