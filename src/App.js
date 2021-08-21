import logo from './logo.svg';
import './styles.css';
import NavigationBar from "./components/NavigationBar";
import Title from "./components/Title"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';
import {Col, Container, Row} from "react-bootstrap";
import React, {useState, useEffect} from "react";
function App() {
    const [scrollTop, setScrollTop] = useState(0);


    useEffect(() => {
        function onScroll() {
            const navbarCollapsible = document.body.querySelector('#topNav');
            const link = document.body.querySelectorAll("#navbar-link");
            const name = document.body.querySelectorAll("#navbar-name")
            const pic = document.body.querySelector("#pic")
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (!currentPosition > 0) {
                navbarCollapsible.classList.add("py-4");
                link.forEach(x => {
                    x.classList.remove("smaller-font");
                })
                name.forEach(x => {
                    x.classList.remove("smallest-font");
                })
                pic.classList.remove('smaller-picture')
            } else {
                navbarCollapsible.classList.remove('py-4');
                link.forEach(x => {
                    x.classList.add("smaller-font");
                })
                name.forEach(x => {
                    x.classList.add("smallest-font");
                })
                pic.classList.add('smaller-picture')
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);


    return (
    <div>
        <Helmet>
            <style>{'body { background-color: #4abdac; }'}</style>
        </Helmet>
        <NavigationBar/>
        <Title />
        <Projects />
        <Skills />
        <Contact />


    </div>
  );
}

export default App;
