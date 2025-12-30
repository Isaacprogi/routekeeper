import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

import {
  FiLock,
  FiUsers,
  FiZap,
  FiSettings,
  FiCheckCircle,
  FiArrowRight,
  FiAlertTriangle,
  FiGitMerge
} from "react-icons/fi";

function ScrollToSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={() => scrollToSection(id)} className={styles.navLink}>
      {children}
    </button>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className="gradient-border-box text-center">
          <Heading as="h1" className={clsx("hero__title", styles.gradientText)}>
            The Ultimate React Router
            <span className="gradient-text block mt-2">
              Authentication & Authorization Library
            </span>
          </Heading>
          <p className={clsx("hero__subtitle", styles.textXl)}>
            A powerful, flexible, and developer-friendly solution for managing
            authentication, role-based access control, and route protection in
            your React applications.
          </p>
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <div className={styles.windowDots}>
                <div
                  className={`${styles.windowDot} ${styles.windowDotRed}`}
                ></div>
                <div
                  className={`${styles.windowDot} ${styles.windowDotYellow}`}
                ></div>
                <div
                  className={`${styles.windowDot} ${styles.windowDotGreen}`}
                ></div>
              </div>
              <span className={styles.codeFilename}>route-config.tsx</span>
              {/* <button>
                <FiCode size={16} />
              </button> */}
            </div>
            <div className={styles.codeBody}>
              <pre className={styles.codeBlock}>
                {`const routes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    type: 'private',
    roles: ['admin'],
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'users',
        element: <UserManagement />,
        roles: ['super-admin'], // Override parent role
        excludeParentRole: true
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    type: 'public' // Redirects if already logged in
  }
];`}
              </pre>
            </div>
          </div>
          <div className={clsx("flex  justify-center", styles.buttonGroup)}>
            <Link
              className={clsx(
                "button button--lg btn-primary",
                styles.btnPrimary
              )}
              to="/docs"
            >
              Get Started <FiArrowRight className="ml-2" />
            </Link>
            <button
              onClick={() => {
                const element = document.getElementById("features");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className={clsx(
                "button button--lg btn-secondary",
                styles.btnSecondary
              )}
            >
              View Features
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Updated AboutSection - More specific to RouteKeeper capabilities
function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
         

          <h2 className={styles.heading}>
            Stop{" "}
            <span className={styles.gradientText}>
              Reinventing Authentication
            </span>{" "}
            Logic
          </h2>
          <p className={`${styles.textMuted} ${styles.maxWidth3XL}`}>
            Every React project needs authentication. RouteKeeper gives you
            production-ready route protection, role-based access control, and
            permission management in minutes, not days.
          </p>
        </div>

        {/* Stats/Highlights */}
        <div className={styles.aboutStats}>
          <div className={styles.textCenter}>
            <div className={`${styles.statNumber} ${styles.gradientText}`}>
              95%
            </div>
            <div className={styles.statLabel}>Less boilerplate code</div>
          </div>
          <div className={styles.textCenter}>
            <div className={`${styles.statNumber} ${styles.gradientText}`}>
              100%
            </div>
            <div className={styles.statLabel}>TypeScript coverage</div>
          </div>
          <div className={styles.textCenter}>
            <div className={`${styles.statNumber} ${styles.gradientText}`}>
              0kB
            </div>
            <div className={styles.statLabel}>Runtime overhead</div>
          </div>
          <div className={styles.textCenter}>
            <div className={`${styles.statNumber} ${styles.gradientText}`}>
              ∞
            </div>
            <div className={styles.statLabel}>Nested routes depth</div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          {/* Code Example */}
          

          {/* Benefits */}
          <div>
            <h3
              className={`${styles.gradientText}`}
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              Everything You Need for Secure Routing
            </h3>

            <div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <FiLock size={20} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>
                    Built-in Route Guard System
                  </h4>
                  <p className={styles.benefitDescription}>
                    Automatically handles authentication states, redirects, and
                    fallbacks without manual conditional logic.
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <FiUsers size={20} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>
                    Flexible Role Management
                  </h4>
                  <p className={styles.benefitDescription}>
                    Supports role inheritance, overrides, and complex permission
                    hierarchies with a clean, declarative API.
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <FiSettings size={20} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Fully Customizable</h4>
                  <p className={styles.benefitDescription}>
                    Custom loading screens, error boundaries, and redirect logic
                    to match your application's specific needs.
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <FiZap size={20} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Performance Optimized</h4>
                  <p className={styles.benefitDescription}>
                    Zero runtime overhead, tree-shakable, and optimized for both
                    small and enterprise-scale applications.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.useCaseBox}>
              <div className={styles.useCaseContent}>
                <FiCheckCircle className={styles.useCaseIcon} size={18} />
                <div>
                  <p className={styles.useCaseText}>
                    <strong>Perfect for:</strong> Admin dashboards, SaaS
                    
                  </p>
                  <p className={styles.useCaseText}>
                   applications, internal tools, e-learning platforms, and any
                    app needing granular access control.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function FeaturesSection() {
  const features = [
    {
      icon: <FiLock />,
      title: "Protected & Public Routes",
      description:
        "Easily define private, public, and neutral routes with automatic redirects based on authentication state.",
    },
    {
      icon: <FiUsers />,
      title: "Role-Based Access Control",
      description:
        "Restrict access using roles with inheritance, overrides, and fine-grained permission control.",
    },
    {
      icon: <FiGitMerge />,
      title: "Nested Route Inheritance",
      description:
        "Child routes intelligently inherit access rules and roles from parent routes by default.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Type-Safe Route Configuration",
      description:
        "Fully typed route definitions with strong TypeScript guarantees and compile-time safety.",
    },
    {
      icon: <FiAlertTriangle />,
      title: "Built-in Fallbacks & Guards",
      description:
        "Includes loading states, unauthorized screens, not-found handling, and error boundaries out of the box.",
    },
    {
      icon: <FiZap />,
      title: "React Router v6+ Ready",
      description:
        "Built on top of React Router v6+, supporting nested routes, index routes, and modern routing patterns.",
    },
  ];


  return (
    <section
      id="features"
      className={clsx("section section--light", styles.section)}
    >
      <div className="container">
        <div className="text-center mb-xxl">
          <h2
            className={clsx("text-display-md font-bold mb-sm ", styles.heading)}
          >
            Good Features
          </h2>
          <p className={clsx("text-lg max-w-3xl mx-auto", styles.textMuted)}>
            Everything you need to build secure, scalable React applications
            with confidence.
          </p>
        </div>

        <div className="grid-auto-fit">
          {features.map((feature, idx) => (
            <div key={idx} className="card">
              <div className="flex items-start gap-md">
                <div className="">{feature.icon}</div>
                <div>
                  <h3 className="">{feature.title}</h3>
                  <p className="">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className={clsx(
        "section section--dark",
        styles.section,
        styles.ctaSection
      )}
    >
      <div className="container text-center">
        <h2 className={clsx("text-3xl font-bold mb-md", styles.headingLight)}>
          Ready to Secure Your React App?
        </h2>
        <p
          className={clsx("text-lg mb-lg max-w-2xl mx-auto", styles.textLight)}
        >
          Join thousands of developers who trust our solution for their
          authentication needs. Get started in minutes, not hours.
        </p>
        <Link
          className={clsx("button button--lg btn-primary", styles.btnPrimary)}
          to="/docs"
        >
          Get Started <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 50) {
          navbarRef.current.classList.add("scrolled");
        } else {
          navbarRef.current.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} - Secure React Authentication`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
}
