import pic from "../images/pic01.jpg";
import pic2 from "../images/pic02.jpg";
export const Three = () => {
  return (
    <section id="three" className="wrapper align-center">
      <div className="inner">
        <div className="flex flex-2">
          <article>
            <div className="image round">
              <img src={pic} alt="Pic 01" />
            </div>
            <header>
              <h3>
                Lorem ipsum
                <br /> dolor amet nullam
              </h3>
            </header>
            <p>
              Morbi in sem quis dui placerat ornare. Pellentesquenisi
              <br />
              euismod in, pharetra a, ultricies in diam sed arcu. Cras
              <br />
              consequat egestas augue vulputate.
            </p>
            <footer>
              <a href="#" className="button">
                Learn More
              </a>
            </footer>
          </article>
          <article>
            <div className="image round">
              <img src={pic2} alt="Pic 02" />
            </div>
            <header>
              <h3>
                Sed feugiat
                <br /> tempus adipicsing
              </h3>
            </header>
            <p>
              Pellentesque fermentum dolor. Aliquam quam lectus
              <br />
              facilisis auctor, ultrices ut, elementum vulputate, nunc
              <br /> blandit ellenste egestagus commodo.
            </p>
            <footer>
              <a href="#" className="button">
                Learn More
              </a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};
