import "./App.css";
import Tags from "./Tags";

function App() {
    const tags = ["boomdev", "task", "tags", "react"];

    return (
        <div className="App">
            <section className="hero">
                <div className="hero-body">
                    <p className="title">A React Task</p>
                    <p className="subtitle">by Boom.dev</p>
                </div>
            </section>
            <div className="container is-fullhd">
                <div className="notification">
                    Edit the <code>./src</code> folder to add components.
                </div>
            </div>
            <div className="tags">
                <Tags tags={tags} />
            </div>
        </div>
    );
}

export default App;
