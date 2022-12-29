import Head from "next/head";

export default function PageHead({title}: {title: string}) {
  return(
    <Head>
      <title>{title}</title>
      <meta name="title" content="Just Do List" />
      <meta name="description" content="Just Do List is a to do list app to help you become more productive!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo-app.png" />
      <meta charSet="UTF-8" />
      <meta name="keywords" content="just do list, to do list, to do, arc" />

      {/* Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="Just Do List" />
      <meta property="og:description" content="Just Do List is a to do list app to help you become more productive!" />
      <meta property="og:image" content="" />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  )
}