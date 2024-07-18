export const Banner = () => {
  return (
    <section id="banner">
      <div className="inner">
        <header>
          <h1>Welcome to Projection</h1>
        </header>

        <div className="flex ">
          <div>
            <span className="icon fa-car"></span>
            <h3>Aliquam</h3>
            <p>Suspendisse amet ullamco</p>
          </div>

          <div>
            <span className="icon fa-camera"></span>
            <h3>Elementum</h3>
            <p>Class aptent taciti ad litora</p>
          </div>

          <div>
            <span className="icon fa-bug"></span>
            <h3>Ultrices</h3>
            <p>Nulla vitae mauris non felis</p>
          </div>
        </div>

        <footer>
          <a href="#" className="button">
            Get Started
          </a>
        </footer>
      </div>
    </section>
  );
};
