import Footer from './footer';
import NavBar from './navBar';
export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className={`pt-48 pb-4`}>{children}</main>
      <Footer />
    </div>
  );
}
