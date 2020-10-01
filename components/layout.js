import Head from 'next/head'
import { css } from 'linaria'
import { utils } from '../styles'
import Link from 'next/link'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={`${styles.globals} ${styles.container}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utils.borderCircle}`}
              alt={name}
            />
            <h1 className={utils.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utils.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utils.headingLg}>
              <Link href="/">
                <a className={utils.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: css`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
  `,
  header: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  headerImage: css`
    width: 6rem;
    height: 6rem;
  `,
  headerHomeImage: css`
    width: 8rem;
    height: 8rem;
  `,
  backToHome: css`
    margin: 3rem 0 0;
  `
}