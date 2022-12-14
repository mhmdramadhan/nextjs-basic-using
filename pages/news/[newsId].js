// our-domain.com/news/[ID]

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>This Detail Page</h1>;
}

export default DetailPage;
