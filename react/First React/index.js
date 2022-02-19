import React from "react";
import ReactDOM from "react";

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
        </div>
    )
}

function Header() {
    return (
        <header>
            <nav>
                TEST
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <div>
            <h1>Good Night</h1>
            <ol>
                <li>One Night</li>
                <li>Two Night</li>
                <li>Three Night</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));