import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Use optional chaining and fallback for SEO improvements
  const post = blogdata.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Post Not Found" />
            <Title title="The post you are looking for does not exist." className="title-bg" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.content[0]} />
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title={`${post.catgeory.toUpperCase()} / ${post.date}`} /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img src={post.cover} alt={post.title} width="100%" height="100%" className="round" />
            </div>
            <div className="desc">
              {post.content.map((paragraph, index) => (
                <p className="desc-p" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  );
};

export default SinglePost;
