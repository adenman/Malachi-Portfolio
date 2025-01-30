import { useEffect } from 'react';
import '../css/Home.css';

function Home() {
  useEffect(() => {
    const wrapper = document.querySelector(".words");
    const words = wrapper.querySelectorAll("span");
    const currentWord = wrapper.querySelector("span.current");
    const wordsWidths = Array.from(words).map((word) => word.offsetWidth);
    const maxWordsWidth = Math.max(...wordsWidths);
    const CURRENT_CLASS = "current";
    const NEXT_CLASS = "next";

    wrapper.style.setProperty("--width", `${currentWord.offsetWidth}px`);
    wrapper.style.setProperty("--width-mobile", `${maxWordsWidth}px`);

    const interval = setInterval(() => {
      const currentWord = wrapper.querySelector("span.current");
      const nextWord = wrapper.querySelector("span.next");
      const nextNextWord = nextWord.nextElementSibling
        ? nextWord.nextElementSibling
        : wrapper.firstElementChild;

      currentWord.classList.remove(CURRENT_CLASS);
      nextWord.classList.remove(NEXT_CLASS);
      nextWord.classList.add(CURRENT_CLASS);
      nextNextWord.classList.add(NEXT_CLASS);

      wrapper.style.setProperty("--color", nextWord.dataset.color);
      wrapper.style.setProperty("--color-bg", nextWord.dataset.bgColor);
      wrapper.style.setProperty("--width", `${nextWord.offsetWidth}px`);
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <>
       <div className="hero-container">
      <img src="./positive-person.avif" alt="" className="Hero-img" />
      <h1 className="words-wrapper">
        I am <span className="css">Malachi</span> I am a 
        <span className="words">
            <span className="current" data-bg-color="#ffc703" data-color="#000">Fashionista</span>
            <span className="next" data-bg-color="#8cb369" data-color="#a01010">Photographer</span>
            <span data-bg-color="#104911" data-color="#a01010">Engineer</span>
            
          </span>
        </h1>
        <h3 className="words-wrapper-2">
          <ul>
            <li>
              {/* <a href="/findMe"></a> */}
              Where to find me
            </li>
            <li>
              My work
            </li>
            {/* <li>
              dog
            </li> */}
          </ul>
          
        </h3>
      </div>
    </>
  );
}

export default Home;