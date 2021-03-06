import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import API from 'service/api';
import Image from 'next/image';
import Map from 'components/Map';

export default function Home({ data }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const { results } = data;
    console.log(results);
    setMovies(results || []);
  }, []);

  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          {movies.map((item: any) => (
            <>
              <article className="mb-3" key={item.id}>
                <Image src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="영화이미지" width={500} height={500} />
                <div>{item.title}</div>
              </article>
            </>
          ))}
          <Map data={data} />
        </section>
      </main>
      <style jsx>
        {`
          main {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          main section {
            max-width: 1200px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}

// 매 페이지 요청마다 데이터를 서버로부터 받아온다.
/**
  getServerSideProps가 기본 props로 받는 context 객체의 구성은 다음과 같습니다

  params: 다이나믹 라우트 페이지라면, params를 라우트 파라미터 정보를 가지고 있다.
  req: HTTP request object
  res: HTTP response object
  query: 쿼리스트링
  preview: preview 모드 여부 >공식문서
  previewData: setPreviewData로 설정된 데이터
 */
export async function getServerSideProps() {
  const res: any = await API.news.getNaverNews();
  console.log(res.data.items);
  return {
    props: {
      data: res.data.items,
      // name: process.env.name,
    },
  };
}
