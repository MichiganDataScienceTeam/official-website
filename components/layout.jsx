import Footer from './footer';
import NavBar from './navBar';
export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
