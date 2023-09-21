/*

  Main:
    ...

*/
import React, {useEffect, useCallback, useRef, useState} from "react";
import "./Main.scss";

/* --------------------------------------------------------------------------------*/
/* Component */
/* --------------------------------------------------------------------------------*/
function Main() {
  // --------------------------------------------------------------------------------
  /*  Initialization */
  // --------------------------------------------------------------------------------
  useEffect(() => {
    document.title = 'Fylo';
  }, []);

  // --------------------------------------------------------------------------------
  /*  Rendering */
  // --------------------------------------------------------------------------------
  return (
    <>
      <main>
        <header>
          <img src="/svg/logo.svg" alt="arrow to left button"></img>
          <nav>
            <a href="#about">Features</a>
            <a href="#projects">Team</a>
            <a href="#contact">Sign In</a>
          </nav>
        </header>

        <section class="hero">
          <div class="description">
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores your most important files in one secure location.  Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
          </div>

          <form class="contact" id="contact">
            <input type="email" id="email" name="email" placeholder="email@example.com" required></input>
            <input type="submit" value="Get Started"></input>
          </form>

          <img alt="" src="/svg/illustration-1.svg"></img>
        </section>

        <img alt="" width="100%" src="/svg/bg-curve-desktop.svg" />
        <section class="introduction">
          <div class="description">
            <h1>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you  covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for  live collaboration. No email attachments required!</p>
          </div>

          <div class="link">
            <a href="/">See how Fylo works</a>
            <img alt="" src="/svg/icon-arrow.svg"></img>
          </div>

          <div class="quote-box">
            <img alt="" src="/svg/icon-quotes.svg"></img>
            <p>Fylo has improved our team productivity by an order of magnitude. Since  making the switch our team has become a well-oiled collaboration machine.</p>
            <div class="presentation">
              <img alt="" src="/img/avatar-testimonial.jpg"></img>
              <div>
                <span class="name">Kyle Burton</span>
                <span class="description">Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>

          <img alt="" src="/svg/illustration-2.svg"></img>
        </section>

        <section class="contact">
          <div class="description">
            <h1>Get early access today.</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous.  If you have any questions, our support team would be happy to help you.</p>
          </div>

          <form class="contact" id="contact">
            <input type="email" id="email" name="email" placeholder="email@example.com" required></input>
            <input type="submit" value="Get Started For free"></input>
          </form>
        </section>
      </main>
    </>
  );
}

export default Main;