import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>What is this?</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Creates a boilerplate which will help project teams in building applications with great quality,
        by giving them more time to focus on business problems rather than web development chores.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Has balanced focus to Static Code Quality,
        Performance, Processes, Security, Testability and Best Practices.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Community accepted and reliable Front End Dev Ecosystem based on React & Next.
      </>
    ),
  },
];

const team = [
  {
    title: <><a href='https://github.com/vinodloha'>Vinod Kumar</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/8122967?v=4',
  },
  {
    title: <><a href='https://github.com/sunnil24'>Sunil Srivastava</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/15208118?v=4',
  },
  {
    title: <><a href='https://github.com/sunjain1'>sunjain1</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/60086176?v=4',
  },
  {
    title: <><a href='https://github.com/pras9'>pras</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/2662487?v=4',
  },
  {
    title: <><a href='https://github.com/sowmihk'>Sowmya H</a></>,
    imageUrl: 'img/profile.jpg',
  },
  {
    title: <><a href='https://github.com/rishabhSapient'>Rishabh Agrawal</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/49898177?v=4',
  },
  {
    title: <><a href='https://github.com/vishalverma26'>vishalverma26</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/29516326?v=4',
  },
  {
    title: <><a href='https://github.com/Haeckerzz'>Sharad Rai</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/42551622?v=4',
  },
  {
    title: <><a href='https://github.com/suhas-gopinath'>suhas-gopinath</a></>,
    imageUrl: 'img/profile.jpg',
  },
  {
    title: <><a href='https://github.com/SahitiReddyKeesari'>Sahiti Reddy Keesari</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/34088582?v=4',
  },
  {
    title: <><a href='https://github.com/achaljain'>Achal Jain</a></>,
    imageUrl: 'https://avatars.githubusercontent.com/u/13012681?v=4',
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Team({ imageUrl, title}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
      <h3>{title}</h3>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/intro')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="text--center"><h1>Know our Team</h1></div>
        {team && team.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {team.map((props, idx) => (
                  <Team key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
