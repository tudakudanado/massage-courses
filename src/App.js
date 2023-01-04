

function App() {
    return (
        <div>
            <header>
                <div>Logo</div>
                <div>Navigation
                    <ul>
                        <li><a href="#">menu item 1</a></li>
                    </ul>
                </div>
                <div>Burger menu</div>
            </header>
            <main>
                <article>
                    <h1>The Benefits of Massages</h1>
                    <p>Some basic info</p>
                </article>
                <h2>Major types of massage and their benefits</h2>
                <section>
                    <h2>Medical massage</h2>
                    <p>Explanation</p>
                    <img alt="Massage type picture"></img>
                </section>
                <aside>
                    <h4>Section name</h4>
                    Dropdown menu of all massage types presented on the page you can click on.
                    Show the current section you are in.
                    <ul>
                        <li><a>1. Massage type</a></li>
                    </ul>
                </aside>
            </main>
            <footer>
                <div>Footer name or something</div>
                <div>
                    <h3>Social and contacts</h3>
                    <ul>
                        <li><a href="#">social icon 1</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default App;
