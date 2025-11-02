import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import BackToTop from '@/components/BackToTop';

export default function ServicePage() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <section className="section-padding">
          <div className="container">
            <h1>Services</h1>
            <p>Services page content will be added here...</p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

