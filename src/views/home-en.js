import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Check from '../components/check'
import './home-en.css'

const HomeEn = (props) => {
  return (
    <div className="home-en-container">
      <Helmet>
        <title>WK Training - Martial Arts Coaching & PT in Fuengirola</title>
        <meta
          property="og:title"
          content="WK Training - Martial Arts Coaching &amp; PT in Fuengirola"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/eea6a35f-439d-4bb5-9212-69ef86903565/7d3a9595-2129-4ab9-beb6-74cbf4d883b3?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="home-en-container01">
        <span className="home-en-text">
          <span className="home-en-text001">
            NOTICE:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            I have limited availability to take on new clients while recovering
            from a knee surgery. Contact me for more information!
          </span>
        </span>
      </div>
      <section className="home-en-hero">
        <video
          src="/training.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="home-en-video"
        ></video>
        <header data-thq="thq-navbar" className="home-en-navbar">
          <img
            alt="image"
            src="/wk-training-logo-1500h.png"
            className="home-en-branding"
          />
          <div data-thq="thq-burger-menu" className="home-en-burger-menu">
            <div className="home-en-hamburger">
              <img alt="image" src="/hamburger.svg" className="home-en-icon" />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-en-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-en-nav"
            >
              <div className="home-en-container02">
                <img
                  alt="image"
                  src="/wk-training-logo-1500h.png"
                  className="home-en-image"
                />
                <div data-thq="thq-close-menu" className="home-en-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-en-nav1"
              >
                <a href="#quien-soy" className="home-en-link">
                  About me
                </a>
                <a href="#info-clases" className="home-en-link01">
                  Class information
                </a>
                <a href="#faq" className="home-en-link02">
                  FAQ
                </a>
                <a href="#faq" className="home-en-link03">
                  Testimonials
                </a>
                <Link to="/" className="home-en-link04">
                  IN SPANISH
                </Link>
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-6z36-1500h.png"
                />
              </nav>
              <div className="home-en-container03">
                <a
                  href="https://calendly.com/wktraining"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-button button"
                >
                  <span>
                    <span>Book classes</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
            <div className="home-en-icon-group"></div>
          </div>
        </header>
        <div className="home-en-hero-content">
          <div className="home-en-container04">
            <div className="home-en-header-container">
              <div className="home-en-header">
                <h1 className="home-en-heading">
                  <span className="home-en-text006">
                    Unleash your inner fighter
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
          <p className="home-en-caption">
            <span>
              Transform your body and mind with private boxing and kickboxing
              classes at WK Training!
            </span>
            <br></br>
          </p>
          <a
            href="https://calendly.com/wktraining"
            target="_blank"
            rel="noreferrer noopener"
            className="home-en-link05 button"
          >
            <span className="home-en-text010">
              <span>Go to booking</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <section className="home-en-note">
        <h2 className="home-en-caption01">
          <span>
            With a focus on technique, endurance and strength, my classes are
            designed to challenge and motivate you to reach your full potential.
          </span>
          <br></br>
        </h2>
      </section>
      <section className="home-en-statistics">
        <div className="home-en-content">
          <div className="home-en-stat">
            <h3 className="home-en-header01">10+ years</h3>
            <span className="home-en-caption02">Teaching experience</span>
          </div>
          <div className="home-en-stat1">
            <h3 className="home-en-header02">50+</h3>
            <span className="home-en-caption03">
              Fights in boxing and martial arts
            </span>
          </div>
          <div className="home-en-stat2">
            <h3 className="home-en-header03">300+</h3>
            <span className="home-en-caption04">Students over the years</span>
          </div>
        </div>
      </section>
      <section className="home-en-slider">
        <h2 className="home-en-heading01">
          <span>A sport for mental and physical health</span>
          <br></br>
        </h2>
        <div className="home-en-header04"></div>
        <div className="home-en-selector">
          <p className="home-en-caption05">
            <span>
              Welcome to Wadii (El Vikingo) Kadiri&apos;s private boxing and
              kickboxing classes in Fuengirola, Málaga. Come try a no-obligation
              class and discover the benefits of private boxing and kickboxing
              classes!
            </span>
            <br></br>
            <br></br>
          </p>
        </div>
      </section>
      <section className="home-en-slides">
        <div className="home-en-slider1 slider blaze-slider">
          <div className="home-en-slider-container blaze-container">
            <div className="home-en-slider-track-container blaze-track-container">
              <div className="home-en-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-muay-thai-400h1.webp"
                    className="home-en-image01"
                  />
                  <div className="home-en-content01">
                    <div className="home-en-header05">
                      <h3 className="home-en-heading02">Muay Thai</h3>
                      <p className="home-en-caption06">
                        <span>
                          Muay Thai is a combat sport originating from Thailand
                          that involves the use of punching, kicking, kneeling,
                          and elbow techniques.
                        </span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-boxeo-2-400h.webp"
                    className="home-en-image02"
                  />
                  <div className="home-en-content02">
                    <div className="home-en-header06">
                      <h3 className="home-en-heading03">Boxing</h3>
                      <p className="home-en-caption07">
                        <span>
                          The famous boxing, a sport that requires great skill,
                          agility and physical condition combined with strength.
                        </span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-kickboxing-400h.webp"
                    className="home-en-image03"
                  />
                  <div className="home-en-content03">
                    <div className="home-en-header07">
                      <h3 className="home-en-heading04">Kickboxing</h3>
                      <p className="home-en-caption08">
                        <span>
                          Kickboxing is a combat sport that combines boxing and
                          kicking techniques.
                        </span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-k1-400h.webp"
                    className="home-en-image04"
                  />
                  <div className="home-en-content04">
                    <div className="home-en-header08">
                      <h3 className="home-en-heading05">K-1</h3>
                      <p className="home-en-caption09">
                        <span>
                          K-1 is a martial art that combines techniques from 
                          boxing, kickboxing and Muay Thai.
                        </span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-en-controls">
              <button
                data-role="previous-banner-button"
                className="home-en-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-en-icon03">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-en-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-en-icon05">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-en-container06">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')
new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-en-objectives">
        <div className="home-en-content05">
          <span className="home-en-text028">objectives</span>
          <div className="home-en-objectives-list">
            <div className="objective">
              <h3 className="home-en-text029">Growth</h3>
              <p className="home-en-text030">
                <span>
                  By improving your boxing technique and skills, you will
                  increase your self-confidence and grow as a person.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="objective home-en-objective1">
              <h3 className="home-en-text035">Fitness</h3>
              <p className="home-en-text036">
                <span>
                  The workouts will help you improve your physical condition,
                  strength, flexibility and your cardiovascular endurance.
                </span>
                <br></br>
              </p>
            </div>
            <div className="objective home-en-objective2">
              <h3 className="home-en-text039">Personal approach</h3>
              <p className="home-en-text040">
                In my private classes, the focus is on you and your specific
                goals. I personalize each session to help you improve in areas
                of your choice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="quien-soy" className="home-en-experience">
        <div className="home-en-content06">
          <div className="home-en-header09">
            <div className="home-en-header-container1">
              <div className="home-en-header10">
                <h2 className="home-en-heading06">About me</h2>
              </div>
              <p className="home-en-caption10">
                <span>
                  Hi, I am Wadii! I was champion of Andalusia in 2014 and of NSW
                  (Australia) in 2018 in the world of martial arts. I have
                  traveled all over the world and have gained a wealth of
                  experience and new techniques.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Now, I have decided to dedicate my time to my passion:
                  competing at a professional level and teaching martial arts. I
                  would love to share my knowledge with you and help you achieve
                  your goals in this sport that I love so much. Join my classes
                  and together we will take your skills to the next level!
                </span>
              </p>
            </div>
          </div>
          <div className="home-en-testimonial">
            <div className="home-en-content07">
              <span className="home-en-text044">Testimonial</span>
              <p className="home-en-text045">
                <span>
                  “Wadi, a great coach and fighter, capable of teaching
                  different fighting styles and adapting to the student&apos;s
                  pace”
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-information">
              <div className="home-en-author">
                <img
                  alt="image"
                  src="/david-200h.png"
                  className="home-en-icon07"
                />
                <span className="home-en-name">David Lozano</span>
              </div>
              <span className="home-en-name1">Fuengirola</span>
            </div>
          </div>
        </div>
        <div className="home-en-images">
          <div className="home-en-square"></div>
          <img
            alt="image"
            src="/wadii_minimized-1400w.webp"
            className="home-en-image05"
          />
        </div>
      </section>
      <section id="beneficios" className="home-en-experience1">
        <div className="home-en-images1">
          <div className="home-en-square1"></div>
          <img
            alt="image"
            src="/clases-boxeo-1400w.webp"
            className="home-en-image06"
          />
        </div>
        <div className="home-en-content08">
          <div className="home-en-header11">
            <div className="home-en-header-container2">
              <div className="home-en-header12">
                <h2 className="home-en-heading07">
                  <span>Train and have fun!</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-en-caption11">
                Working out doesn&apos;t have to be boring!
              </p>
            </div>
            <div className="home-en-checkmarks">
              <div className="home-en-check">
                <div className="home-en-mark">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon08">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text050">
                  <span>
                    Boxing techniques: learn attack and defense techniques
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-en-check1">
                <div className="home-en-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon10">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text054">
                  <span>
                    Physical training: specific exercises to improve strength,
                    endurance, speed and agility
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-en-check2">
                <div className="home-en-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon12">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text057">
                  <span>
                    Strategies and tactics: advanced techniques to apply during
                    boxing fights
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-en-check3">
                <div className="home-en-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon14">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text060">
                  <span>
                    Mental coaching: mental preparation for both day to day and
                    combat, including visualization, concentration and
                    self-confidence
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-en-testimonial1">
            <div className="home-en-content09">
              <span className="home-en-text063">Testimonial</span>
              <p className="home-en-text064">
                “Wadii has managed to free me from prejudices, even though I
                already have gray hair, and has adapted the training to my
                physical level. Every day he tests me and makes me surpass
                myself. I already have boxing running through my veins. An
                amazing coach and person.”
              </p>
            </div>
            <div className="home-en-information1">
              <div className="home-en-author1">
                <img
                  alt="image"
                  src="/javier-200h.png"
                  className="home-en-icon16"
                />
                <span className="home-en-name2">Javier Jover Palacios</span>
              </div>
              <span className="home-en-name3">Fuengirola</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-en-create">
        <div className="home-en-content10">
          <div className="home-en-header13">
            <h2 className="home-en-heading08">
              <span>Book a trial class at </span>
              <span className="home-en-text066">-70%</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <a
            href="https://calendly.com/wktraining"
            target="_blank"
            rel="noreferrer noopener"
            className="home-en-link06 button"
          >
            <span>
              <span>Book a private class</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <section id="info-clases" className="home-en-comparision">
        <div id="precios" className="home-en-header-container3">
          <div className="home-en-header14">
            <h2 className="home-en-heading09">
              <span>Private class information</span>
              <br></br>
            </h2>
          </div>
          <p className="home-en-caption12">
            <span>
              Welcome to my private personalized boxing classes, where all the
              attention is focused on you.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </p>
          <p className="home-en-caption13">
            <span>
              You will learn effectively and enjoy it to the fullest. The
              advantage of my classes is that they are designed specifically for
              you, adapting to your personal goals and objectives, whether it is
              losing weight, gaining strength, learning basic and advanced
              techniques, or preparing for future fights. All this while you
              have fun and enjoy a unique experience in each session.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </p>
          <p className="home-en-caption14">
            <span>
              Additionally, my schedules are flexible, including availability
              from Monday to Saturday, both in the morning and afternoon. Do not
              hesitate to contact me to agree on the days and times that best
              suit your schedule. Book your personalized private boxing class
              and start achieving your goals today.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </p>
        </div>
        <div className="home-en-table">
          <div className="home-en-row">
            <div className="home-en-plans">
              <div className="home-en-row01">
                <span className="home-en-text083">Placeholder</span>
                <span className="home-en-text084">
                  <span>prices</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-en-row02">
            <div className="home-en-plans01">
              <div className="home-en-row03">
                <span className="home-en-text087">Personalized attention</span>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row04">
            <div className="home-en-plans02">
              <div className="home-en-row05">
                <span className="home-en-text088">Video analysis</span>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row06">
            <div className="home-en-plans03">
              <div className="home-en-row07">
                <span className="home-en-text089">Trial class</span>
                <div className="value">
                  <span className="home-en-text090">
                    <span className="home-en-text091">-70% (=10€)</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row08">
            <div className="home-en-plans04">
              <div className="home-en-row09">
                <span className="home-en-text093">Price for single class</span>
                <div className="value">
                  <span className="home-en-text094">35€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row10">
            <div className="home-en-plans05">
              <div className="home-en-row11">
                <span className="home-en-text095">
                  Price for 5 class voucher
                </span>
                <div className="value">
                  <span className="home-en-text096">30€/clase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row12">
            <div className="home-en-plans06">
              <div className="home-en-row13">
                <span className="home-en-text097">
                  Price for 10 class voucher
                </span>
                <div className="value">
                  <span className="home-en-text098">25€/clase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row14">
            <div className="home-en-plans07">
              <div className="home-en-row15">
                <span className="home-en-text099">Location of choice</span>
                <div className="value">
                  <span className="home-en-text100">10€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row16">
            <div className="home-en-plans08">
              <div className="home-en-row17">
                <span className="home-en-text101">Discount for 2 people</span>
                <div className="value">
                  <span className="home-en-text102">-25%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row18">
            <div className="home-en-plans09">
              <div className="home-en-row19">
                <span className="home-en-text103">Discount for 3+ people</span>
                <div className="value">
                  <span className="home-en-text104">-50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimoniales" className="home-en-customer">
        <div className="home-en-header15">
          <h2 className="home-en-heading10">
            <span>Testimonials from my clients</span>
            <br></br>
          </h2>
        </div>
        <section className="home-en-slides1">
          <div className="someslider slider blaze-slider">
            <div className="home-en-slider-container1 blaze-container">
              <div className="home-en-slider-track-container1 blaze-track-container">
                <div className="home-en-slider-track1 blaze-track">
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-en-content11">
                      <div className="home-en-quote">
                        <p className="home-en-quote1">
                          <span>
                            Great professional, great person with a lot of
                            patience and a lot of technical knowledge, both for
                            beginner and advanced levels, a safe bet.
                          </span>
                          <br></br>
                        </p>
                        <div className="home-en-author2">
                          <span className="home-en-name4">
                            <span>Laura Fernández</span>
                            <br></br>
                          </span>
                          <span className="home-en-location">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-en-content12">
                      <div className="home-en-quote2">
                        <p className="home-en-quote3">
                          <span>
                            I&apos;m over the moon! He explains everything
                            great, he is very patient and very nice.
                          </span>
                          <br></br>
                        </p>
                        <div className="home-en-author3">
                          <span className="home-en-name5">
                            Mariangeles Mediero
                          </span>
                          <span className="home-en-location1">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-en-content13">
                      <div className="home-en-quote4">
                        <p className="home-en-quote5">
                          <span>
                            Wadi is a great competitor and teammate, and also as
                            a coach: he is patient, passionate about teaching
                            and experienced, great so take advantage of it💪🏽💪🏽
                          </span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </p>
                        <div className="home-en-author4">
                          <span className="home-en-name6">
                            <span>Mourad Zakari</span>
                            <br></br>
                          </span>
                          <span className="home-en-location2">Mijas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-en-content14">
                      <div className="home-en-quote6">
                        <p className="home-en-quote7">
                          Wadi, a great trainer and fighter, capable of training
                          different fighting styles and adapting to the
                          student&apos;s learning, I started training boxing
                          with him, I have advanced a lot in a short time, and
                          it has been a great discovery for me, it is giving me
                          a lot of personal motivation.
                        </p>
                        <div className="home-en-author5">
                          <span className="home-en-name7">David Lozano</span>
                          <span className="home-en-location3">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-en-controls1">
                <button
                  data-role="previous-banner-button"
                  className="home-en-previous1 blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-en-icon17">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-en-next1 blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-en-icon19">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
                <a
                  href="https://goo.gl/maps/jvHUtQGQDUB29dnY7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-link07 button"
                >
                  <span>
                    <span>More reviews</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="home-en-container08">
              <Script
                html={`<script>
const el2 = document.querySelector('.someslider')

new BlazeSlider(el2, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
              ></Script>
            </div>
          </div>
        </section>
      </section>
      <section id="faq" className="home-en-faq">
        <div className="home-en-header16">
          <h2 className="home-en-heading11">FAQ</h2>
        </div>
        <div className="home-en-content15">
          <div className="home-en-column">
            <div className="home-en-element">
              <h3 className="home-en-header17">
                <span>Where are the training sessions?</span>
                <br></br>
              </h3>
              <p className="home-en-content16">
                <span className="home-en-text123">
                  They can be at the Spartans Fighter gym, on the beach in
                  Fuengirola or for an extra cost at a personalized location.
                  Send me a message!
                </span>
                <br className="home-en-text124"></br>
                <br className="home-en-text125"></br>
                <br className="home-en-text126"></br>
                <a
                  href="https://goo.gl/maps/ZTmxewL62pkV4dgT9"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-link08"
                >
                  Spartans Fighter Mijas
                </a>
                <br></br>
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="home-en-element1">
              <h3 className="home-en-header18">
                <span>What equipment do I need?</span>
                <br></br>
              </h3>
              <p className="home-en-content17">
                <span>
                  For your first class you don&apos;t need anything more than
                  comfortable clothes and water. And for the long term, you can
                  buy gloves and protection (shin guards) to get the most out of
                  it.
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element2">
              <h3 className="home-en-header19">
                <span>Do I need experience to train with you?</span>
                <br></br>
              </h3>
              <p className="home-en-content18">
                <span>
                  No! I adapt the classes according to the level and physical
                  condition of each client.
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element3">
              <h3 className="home-en-header20">
                <span>Do you offer group classes?</span>
                <br></br>
              </h3>
              <p className="home-en-content19">
                Not currently. If you are interested in group classes, contact
                Spartans Fighter Mijas.
              </p>
            </div>
          </div>
          <div className="home-en-column1">
            <div className="home-en-element4">
              <h3 className="home-en-header21">What schedule do you have?</h3>
              <p className="home-en-content20">
                <span className="home-en-text140">
                  I have a flexible schedule. Checkout my calendar for
                  availability!
                </span>
                <span className="home-en-text141">Booking calendar</span>
              </p>
            </div>
            <div className="home-en-element5">
              <h3 className="home-en-header22">How long are the classes?</h3>
              <p className="home-en-content21">
                <span>
                  Classes are one hour, with some extra for stretching and more.
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element6">
              <h3 className="home-en-header23">How do I get started?</h3>
              <p className="home-en-content22">
                <span>
                  Book your first class by clicking on the reservation button.
                  The trial class has a discount of -70% (individual trial class
                  €10).
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element7">
              <h3 className="home-en-header24">
                <span>I have more questions, how do I contact you?</span>
                <br></br>
              </h3>
              <p className="home-en-content23">
                <span className="home-en-text148">
                  You can message me on Facebook, Instagram or WhatsApp!
                </span>
                <br></br>
                <br></br>
              </p>
              <p className="home-en-content24">
                <a
                  href="https://m.facebook.com/WadiiKadiri/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-link09"
                >
                  Facebook
                </a>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </p>
              <a
                href="https://www.instagram.com/wazaek"
                target="_blank"
                rel="noreferrer noopener"
                className="home-en-link10"
              >
                <p className="home-en-content25">Instagram</p>
              </a>
              <img
                alt="pastedImage"
                src="/external/pastedimage-6z36-1500h.png"
              />
            </div>
          </div>
        </div>
        <div className="home-en-container09">
          <div className="home-en-container10">
            <Script
              html={`<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/CrGKatHITFJ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/Cr3m9ogrebz/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/Cr3m9ogrebz/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Wadii Kadiri (@wazaek)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>`}
            ></Script>
          </div>
        </div>
      </section>
      <div className="home-en-footer">
        <div className="home-en-content26">
          <div className="home-en-main">
            <div className="home-en-branding1">
              <img
                alt="image"
                src="/wk-training-logo-1500h.png"
                className="home-en-image07"
              />
              <span className="home-en-text153">
                <span>WK Training</span>
                <br></br>
                <span>Fuengirola, Málaga</span>
              </span>
            </div>
            <div className="home-en-links">
              <div className="home-en-column2">
                <span className="home-en-header25">
                  <span>Content</span>
                  <br></br>
                </span>
                <div className="home-en-list">
                  <a href="#quien-soy" className="home-en-link11">
                    About me
                  </a>
                  <a href="#info-clases" className="home-en-link12">
                    Information
                  </a>
                  <a href="#faq" className="home-en-link13">
                    FAQ
                  </a>
                  <a href="#testimoniales" className="home-en-link14">
                    <span>Testimonials</span>
                    <br></br>
                  </a>
                </div>
              </div>
              <div className="home-en-column3">
                <span className="home-en-header26">Social media</span>
                <div className="home-en-list1">
                  <a
                    href="https://www.instagram.com/wazaek"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-en-link15"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://m.facebook.com/WadiiKadiri/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-en-link16"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-bottom">
            <div className="home-en-container11">
              <img
                alt="image"
                src="/favicon-192x192-200h.png"
                className="home-en-image08"
              />
              <span className="home-en-text161">
                © 2024 WKTraining - All rights reserved
              </span>
            </div>
            <button data-role="scroll-top" className="home-en-button1 button">
              <img alt="image" src="/arrow.svg" className="home-en-image09" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-en-container13">
          <Script
            html={`<script>
if (document.readyState !== 'loading') {
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        myInitCode();
    });
}

function myInitCode() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

</script>
`}
          ></Script>
        </div>
      </div>
      <div className="home-en-container14">
        <div className="home-en-container15">
          <Script
            html={`<style>
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
    font-size:30px;
    z-index:100;
}

.my-float{
	margin-top:16px;
}
</style>
<a href="https://api.whatsapp.com/send?phone=34677049573&text=Hi%21%20I%27d%20like%20to%20ask%20more%20about..." class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default HomeEn
