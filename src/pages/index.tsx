import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

// Import Decorsarus utilities instead of custom CSS
import './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero bg-primary-gradient text-center p-xl">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-md">
          <Heading 
            as="h1" 
            className="hero__title text-display-lg font-bold tracking-tight"
          >
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle text-xl text-neutral-600 max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
          <div className="flex gap-md justify-center">
            <Link
              className="button button--lg btn-primary rounded-lg px-lg py-sm font-semibold"
              to="/docs">
                View Documentation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      
      <HomepageHeader />
      
      <main className="py-xl">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="text-display-md font-bold mb-sm">Key Features</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Everything you need to build modern documentation sites
            </p>
          </div>
          <HomepageFeatures />
          
          {/* Additional Decorsarus-styled sections */}
          <div className="mt-xxl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="card p-lg rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold mb-sm">Fast & Efficient</h3>
                <p className="text-neutral-600">
                  Built with performance in mind. Lightning fast builds and instant hot reload.
                </p>
              </div>
              <div className="card p-lg rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold mb-sm">Easy to Use</h3>
                <p className="text-neutral-600">
                  Simple API and intuitive design. Get started in minutes, not hours.
                </p>
              </div>
              <div className="card p-lg rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold mb-sm">Fully Customizable</h3>
                <p className="text-neutral-600">
                  Complete control over styling and functionality. Extend it your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}