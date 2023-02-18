import Counter from './components/Counter';

function App() {
  return (
    <main className="mx-auto max-w-lg">
      <header className="py-2 my-16">
        <h1 className="text-3xl text-primary-content text-center">
          Vite + React + Tailwind + Redux Toolkit
        </h1>
      </header>

      <Counter />
    </main>
  );
}

export default App;
