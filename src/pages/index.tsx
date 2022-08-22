import React from "react";
import type { HeadFC } from "gatsby";
import "normalize.css/normalize.css";

import { GlobalStyles } from "../globalStyles";
import { Header } from "../components/Header";
import { WorkList } from "../components/WorkList";
import { QuestionForm } from "../components/QuestionForm";
import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <WorkList />
        <Clients />
        <QuestionForm />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>DEPT Frontend Assesment</title>
    <meta name="description" content="Hello DEPT" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0c2228" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
  </>
);
