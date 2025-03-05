"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./montagne.css";

export default function MontagnePage() {
  useEffect(() => {
    // Reset scroll when page loads
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Changes body data-page attribute
    document.body.setAttribute("data-page", "montagne");

    // Add Font Awesome
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css";
    document.head.appendChild(fontAwesome);

    // Component exit cleaning
    return () => {
      // Resets data-page attribute to “portfolio”.
      document.body.setAttribute("data-page", "portfolio");

      // Remove Font Awesome
      if (fontAwesome && document.head.contains(fontAwesome)) {
        document.head.removeChild(fontAwesome);
      }
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-text">
            <h1>La montagne ça vous gagne</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              id, sapiente consequuntur dolor magni praesentium?
            </p>
            <a href="#ancre-nav">
              <i className="fa-solid fa-arrow-down" />
            </a>
          </div>

          <nav id="ancre-nav">
            <div className="left-nav">
              <div className="nav-case">
                <p>This is massively</p>
              </div>

              <div className="nav-case">
                <p>Generic page</p>
              </div>

              <div className="nav-case">
                <p>Elements reference</p>
              </div>
            </div>

            <div className="right-nav">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section>
        <div className="section-container">
          <p>April 25, 2017</p>
          <h2>And this is a massive headline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, recusandae. Non laborum impedit, praesentium
            laboriosam dolore dolor dolores placeat est blanditiis itaque labore
            laudantium nobis.
          </p>
          <div className="img">
            <Image
              src="/img/sites-vitrines/montagne/pic01.jpg"
              alt="Photographie de montagne"
              width={1100}
              height={619}
              className="w-full h-auto"
            />
          </div>
          <button className="button story">Full story</button>
        </div>
      </section>

      <div className="article">
        <div className="article-container">
          <div className="article-side left">
            <p>April 24, 2017</p>
            <h3>Sed magna ipsum faucibus</h3>
            <div className="flex items-center justify-center">
              <Image
                src="/img/sites-vitrines/montagne/pic02.jpg"
                alt="Photographie de montagne"
                width={400}
                height={225}
              />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              sit odio pariatur, odit sequi voluptatum soluta facilis incidunt
              autem corrupti?
            </p>
            <button className="button story">Full story</button>
          </div>

          <div className="article-side right">
            <p>April 22, 2017</p>
            <h3>Primis eget imperdiet lorem</h3>
            <div className="flex items-center justify-center">
              <Image
                src="/img/sites-vitrines/montagne/pic03.jpg"
                alt="Photographie de montagne"
                width={400}
                height={225}
              />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              sit odio pariatur, odit sequi voluptatum soluta facilis incidunt
              autem corrupti?
            </p>
            <button className="button story">Full story</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <form action="#">
              <div className="form-grid">
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" className="name" id="name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" className="email" id="email" />
                </div>
                <div>
                  <label htmlFor="message" id="message">
                    Message
                  </label>
                  <textarea name="message"></textarea>
                </div>
                <input
                  type="submit"
                  className="button submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>

          <div className="footer-right">
            <div className="footer-right-container">
              <div className="footer-right-container-left">
                <p>Address</p>
              </div>
              <div className="footer-right-container-right">
                <p>
                  1234 Somewhere Road #87257 <br />
                  Nashville, TN 00000-0000
                </p>
              </div>
            </div>

            <div className="footer-right-container">
              <div className="footer-right-container-left">
                <p>Phone</p>
              </div>
              <div className="footer-right-container-right">
                <p>(000) 000-0000</p>
              </div>
            </div>

            <div className="footer-right-container">
              <div className="footer-right-container-left">
                <p>Email</p>
              </div>
              <div className="footer-right-container-right">
                <p>info@untitled.ltd</p>
              </div>
            </div>

            <div className="footer-right-container">
              <div className="footer-right-container-left">
                <p>Social</p>
              </div>
              <div className="footer-right-container-right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="portfolio-return-button">
        <Link href="/sites-vitrines">← Retour au portfolio</Link>
      </div>
    </>
  );
}
