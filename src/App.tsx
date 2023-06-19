import Editor from "./components/Editor";
import Markdown from "./components/Markdown";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <header className="border-b-2">
        <TopBar />
      </header>

      <div className="flex grow">
        <section className="basis-1/2 border-r-2">
          <Editor />
        </section>

        <section className="basis-1/2">
          <Markdown />
        </section>
      </div>

      <footer className="border-t-2 bg-slate-700 text-white">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default App;
