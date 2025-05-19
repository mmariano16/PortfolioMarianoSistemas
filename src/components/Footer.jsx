export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>
          &copy; {new Date().getFullYear()} Mariano Molina. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
}