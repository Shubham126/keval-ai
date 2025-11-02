import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';

export default function AboutPage() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <section className="section-padding">
          <div className="container">
            <h1>About Us</h1>
            <p>About page content will be added here...</p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

