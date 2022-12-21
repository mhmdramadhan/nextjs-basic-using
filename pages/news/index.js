// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The Page News</h1>
      <ul>
        <li><Link href="/news/nextjs-is-a-great-artikel">Next js is great artikel</Link></li>
        <li>somthing else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
