import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

//Scrapp App
import img_Scrapp0 from "../img/Scrapp/Scrapp0.png";
import img_Scrapp1 from "../img/Scrapp/Scrapp1.png";
import img_Scrapp2 from "../img/Scrapp/Scrapp2.png";
import img_Scrapp3 from "../img/Scrapp/Scrapp3.png";
import img_Scrapp4 from "../img/Scrapp/Scrapp4.png";

//Resto App
import img_Resto0 from "../img/Resto/Resto0.png";
import img_Resto1 from "../img/Resto/Resto1.png";
import img_Resto2 from "../img/Resto/Resto2.png";
import img_Resto3 from "../img/Resto/Resto3.png";
import img_Resto4 from "../img/Resto/Resto4.png";

//Movie App
import img_Movie0 from "../img/Movie/Movie0.png";
import img_Movie1 from "../img/Movie/Movie1.png";

//Scrapp App
import img_Ws0 from "../img/Ws/Ws0.png";
import img_Ws1 from "../img/Ws/Ws1.png";

//Logo 
import img_Netflix from "../img/FrontEnd/NetflixLogo.png";
import img_Tiktok from "../img/FrontEnd/TiktokLogo.png";
import img_IG from "../img/FrontEnd/IGLogo.png";



class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below you will find some of the projects that I have developed 
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={img_Scrapp0} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={img_Scrapp0} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Scrap-App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS Bootstrap AWS Docker
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={img_Scrapp1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_Scrapp2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_Scrapp3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_Scrapp4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={img_Ws0} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={img_Ws0} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Webscrapper</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python 
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={img_Ws1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={img_Resto0} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={img_Resto0} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Restaurants.com</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap ReactJS API
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={img_Resto1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_Resto2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_Resto3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_Resto4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={img_Movie0} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={img_Movie0}
                     alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Movie Finder</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS API
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              
                <a
                  href={img_Movie1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Adobe XD Plug-in</h2>
                        <div className="w-more">
                          <span className="w-ctegory">React+ Adobe Console</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">DevOps</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            AWS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Netflix */}
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cama0047/LogoNetflix-Css">
                  <div className="work-img">
                    <img src={img_Netflix} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Logo Netflix</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML and CSS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Tiktok */}
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cama0047/LogoTiktok-CSS">
                  <div className="work-img">
                    <img src={img_Tiktok} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Logo Tiktok</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML and CSS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* IG */}
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/cama0047/LogoInstagram-CSS">
                  <div className="work-img">
                    <img src={img_IG} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Logo Instagram</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML and CSS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>


          </div>


          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">GIT REPO</h3>
                <p className="subtitle-a">
                  You can find this proyects and more in my  
                  <a href="https://github.com/cama0047" target="">
                      <button> <i className="ion-social-github"></i> GitHub </button>
                  </a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
