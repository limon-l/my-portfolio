export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {currentYear} John Doe. All rights reserved. | Built with React & Vite
      </p>
    </footer>
  );
}
