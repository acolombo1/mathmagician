import Header from './components/Header';

export default function Quote() {
  return (
    <>
      <Header />
      <div className="quote">
        <p>
          Mathematics is not about numbers, equations, computations,
          or algorithms: it is about understanding.
          - William Paul Thurston
        </p>
      </div>
    </>
  );
}
