import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Check from '../components/check'
import './home-en.css'

const HomeEn = (props) => {
  return (
    <div className="home-en-container10">
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
            className="home-en-branding1"
          />
          <div data-thq="thq-burger-menu" className="home-en-burger-menu">
            <div className="home-en-hamburger">
              <img
                alt="image"
                src="/hamburger.svg"
                className="home-en-icon10"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-en-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-en-nav1"
            >
              <div className="home-en-container11">
                <img
                  alt="image"
                  src="/wk-training-logo-1500h.png"
                  className="home-en-image10"
                />
                <div data-thq="thq-close-menu" className="home-en-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon11">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-en-nav2"
              >
                <a href="#quien-soy" className="home-en-link10">
                  About me
                </a>
                <a href="#info-clases" className="home-en-link11">
                  Class information
                </a>
                <a href="#faq" className="home-en-link12">
                  FAQ
                </a>
                <a href="#faq" className="home-en-link13">
                  Testimonials
                </a>
                <Link to="/" className="home-en-link14">
                  IN SPANISH
                </Link>
                <img
                  alt="pastedImage"
                  src="/phone-1400w.png"
                  className="home-en-pasted-image1"
                />
              </nav>
              <div className="home-en-container12">
                <a
                  href="https://calendly.com/wktraining"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-button1 button"
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
          <div className="home-en-container13">
            <div className="home-en-header-container1">
              <div className="home-en-header10">
                <h1 className="home-en-heading10">
                  <span className="home-en-text103">
                    Unleash your inner fighter
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
          <p className="home-en-caption10">
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
            className="home-en-link15 button"
          >
            <span className="home-en-text107">
              <span>Go to booking</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <section className="home-en-note">
        <h2 className="home-en-caption11">
          <span>
            With a focus on technique, endurance and strength, my classes are
            designed to challenge and motivate you to reach your full potential.
          </span>
          <br></br>
        </h2>
      </section>
      <section className="home-en-statistics">
        <div className="home-en-content10">
          <div className="home-en-stat1">
            <h3 className="home-en-header11">10+ years</h3>
            <span className="home-en-caption12">Teaching experience</span>
          </div>
          <div className="home-en-stat2">
            <h3 className="home-en-header12">50+</h3>
            <span className="home-en-caption13">
              Fights in boxing and martial arts
            </span>
          </div>
          <div className="home-en-stat3">
            <h3 className="home-en-header13">300+</h3>
            <span className="home-en-caption14">Students over the years</span>
          </div>
        </div>
      </section>
      <section className="home-en-slider1">
        <h2 className="home-en-heading11">
          <span>A sport for mental and physical health</span>
          <br></br>
        </h2>
        <div className="home-en-header14"></div>
        <div className="home-en-selector">
          <p className="home-en-caption15">
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
      <section className="home-en-slides1">
        <div className="home-en-slider2 slider blaze-slider">
          <div className="home-en-slider-container1 blaze-container">
            <div className="home-en-slider-track-container1 blaze-track-container">
              <div className="home-en-slider-track1 blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-muay-thai-400h1.webp"
                    className="home-en-image11"
                  />
                  <div className="home-en-content11">
                    <div className="home-en-header15">
                      <h3 className="home-en-heading12">Muay Thai</h3>
                      <p className="home-en-caption16">
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
                    className="home-en-image12"
                  />
                  <div className="home-en-content12">
                    <div className="home-en-header16">
                      <h3 className="home-en-heading13">Boxing</h3>
                      <p className="home-en-caption17">
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
                    className="home-en-image13"
                  />
                  <div className="home-en-content13">
                    <div className="home-en-header17">
                      <h3 className="home-en-heading14">Kickboxing</h3>
                      <p className="home-en-caption18">
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
                    className="home-en-image14"
                  />
                  <div className="home-en-content14">
                    <div className="home-en-header18">
                      <h3 className="home-en-heading15">K-1</h3>
                      <p className="home-en-caption19">
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
            <div className="home-en-controls1">
              <button
                data-role="previous-banner-button"
                className="home-en-previous1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-en-icon13">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-en-next1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-en-icon15">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-en-container15">
            <Script
              html={`<script>
let el = document.querySelector('.blaze-slider')
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
        <div className="home-en-content15">
          <span className="home-en-text125">objectives</span>
          <div className="home-en-objectives-list">
            <div className="objective">
              <h3 className="home-en-text126">Growth</h3>
              <p className="home-en-text127">
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
            <div className="objective home-en-objective2">
              <h3 className="home-en-text132">Fitness</h3>
              <p className="home-en-text133">
                <span>
                  The workouts will help you improve your physical condition,
                  strength, flexibility and your cardiovascular endurance.
                </span>
                <br></br>
              </p>
            </div>
            <div className="objective home-en-objective3">
              <h3 className="home-en-text136">Personal approach</h3>
              <p className="home-en-text137">
                In my private classes, the focus is on you and your specific
                goals. I personalize each session to help you improve in areas
                of your choice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="quien-soy" className="home-en-experience1">
        <div className="home-en-content16">
          <div className="home-en-header19">
            <div className="home-en-header-container2">
              <div className="home-en-header20">
                <h2 className="home-en-heading16">About me</h2>
              </div>
              <p className="home-en-caption20">
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
          <div className="home-en-testimonial1">
            <div className="home-en-content17">
              <span className="home-en-text141">Testimonial</span>
              <p className="home-en-text142">
                <span>
                  “Wadi, a great coach and fighter, capable of teaching
                  different fighting styles and adapting to the student&apos;s
                  pace”
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-information1">
              <div className="home-en-author1">
                <img
                  alt="image"
                  src="/david-200h.png"
                  className="home-en-icon17"
                />
                <span className="home-en-name1">David Lozano</span>
              </div>
              <span className="home-en-name2">Fuengirola</span>
            </div>
          </div>
        </div>
        <div className="home-en-images1">
          <div className="home-en-square1"></div>
          <img
            alt="image"
            src="/wadii_minimized-1400w.webp"
            className="home-en-image15"
          />
        </div>
      </section>
      <section id="beneficios" className="home-en-experience2">
        <div className="home-en-images2">
          <div className="home-en-square2"></div>
          <img
            alt="image"
            src="/clases-boxeo-1400w.webp"
            className="home-en-image16"
          />
        </div>
        <div className="home-en-content18">
          <div className="home-en-header21">
            <div className="home-en-header-container3">
              <div className="home-en-header22">
                <h2 className="home-en-heading17">
                  <span>Train and have fun!</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-en-caption21">
                Working out doesn&apos;t have to be boring!
              </p>
            </div>
            <div className="home-en-checkmarks">
              <div className="home-en-check1">
                <div className="home-en-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon18">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text147">
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
              <div className="home-en-check2">
                <div className="home-en-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon20">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text151">
                  <span>
                    Physical training: specific exercises to improve strength,
                    endurance, speed and agility
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-en-check3">
                <div className="home-en-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon22">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text154">
                  <span>
                    Strategies and tactics: advanced techniques to apply during
                    boxing fights
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-en-check4">
                <div className="home-en-mark4">
                  <svg viewBox="0 0 1024 1024" className="home-en-icon24">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-en-text157">
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
          <div className="home-en-testimonial2">
            <div className="home-en-content19">
              <span className="home-en-text160">Testimonial</span>
              <p className="home-en-text161">
                “Wadii has managed to free me from prejudices, even though I
                already have gray hair, and has adapted the training to my
                physical level. Every day he tests me and makes me surpass
                myself. I already have boxing running through my veins. An
                amazing coach and person.”
              </p>
            </div>
            <div className="home-en-information2">
              <div className="home-en-author2">
                <img
                  alt="image"
                  src="/javier-200h.png"
                  className="home-en-icon26"
                />
                <span className="home-en-name3">Javier Jover Palacios</span>
              </div>
              <span className="home-en-name4">Fuengirola</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-en-create">
        <div className="home-en-content20">
          <div className="home-en-header23">
            <h2 className="home-en-heading18">
              <span>Book a trial class at </span>
              <span className="home-en-text163">-75%</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <a
            href="https://calendly.com/wktraining"
            target="_blank"
            rel="noreferrer noopener"
            className="home-en-link16 button"
          >
            <span>
              <span>Book a private class</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <section id="info-clases" className="home-en-comparision">
        <div id="precios" className="home-en-header-container4">
          <div className="home-en-header24">
            <h2 className="home-en-heading19">
              <span>Private class information</span>
              <br></br>
            </h2>
          </div>
          <p className="home-en-caption22">
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
          <p className="home-en-caption23">
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
          <p className="home-en-caption24">
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
          <div className="home-en-row10">
            <div className="home-en-plans10">
              <div className="home-en-row11">
                <span className="home-en-text180">Placeholder</span>
                <span className="home-en-text181">
                  <span>prices</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-en-row12">
            <div className="home-en-plans11">
              <div className="home-en-row13">
                <span className="home-en-text184">Personalized attention</span>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row14">
            <div className="home-en-plans12">
              <div className="home-en-row15">
                <span className="home-en-text185">Video analysis</span>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row16">
            <div className="home-en-plans13">
              <div className="home-en-row17">
                <span className="home-en-text186">Trial class</span>
                <div className="value">
                  <span className="home-en-text187">
                    <span className="home-en-text188">-75% (=10€)</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row18">
            <div className="home-en-plans14">
              <div className="home-en-row19">
                <span className="home-en-text190">Price for single class</span>
                <div className="value">
                  <span className="home-en-text191">40€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row20">
            <div className="home-en-plans15">
              <div className="home-en-row21">
                <span className="home-en-text192">
                  Price for 5 class voucher
                </span>
                <div className="value">
                  <span className="home-en-text193">35€/clase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row22">
            <div className="home-en-plans16">
              <div className="home-en-row23">
                <span className="home-en-text194">
                  Price for 10 class voucher
                </span>
                <div className="value">
                  <span className="home-en-text195">30€/clase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row24">
            <div className="home-en-plans17">
              <div className="home-en-row25">
                <span className="home-en-text196">Location of choice</span>
                <div className="value">
                  <span className="home-en-text197">10€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row26">
            <div className="home-en-plans18">
              <div className="home-en-row27">
                <span className="home-en-text198">Discount for 2 people</span>
                <div className="value">
                  <span className="home-en-text199">-25%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-row28">
            <div className="home-en-plans19">
              <div className="home-en-row29">
                <span className="home-en-text200">Discount for 3+ people</span>
                <div className="value">
                  <span className="home-en-text201">-50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimoniales" className="home-en-customer">
        <div className="home-en-header25">
          <h2 className="home-en-heading20">
            <span>Testimonials from my clients</span>
            <br></br>
          </h2>
        </div>
        <section className="home-en-slides2">
          <div className="someslider slider blaze-slider">
            <div className="home-en-slider-container2 blaze-container">
              <div className="home-en-slider-track-container2 blaze-track-container">
                <div className="home-en-slider-track2 blaze-track">
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-en-content21">
                      <div className="home-en-quote1">
                        <p className="home-en-quote2">
                          <span>
                            Great professional, great person with a lot of
                            patience and a lot of technical knowledge, both for
                            beginner and advanced levels, a safe bet.
                          </span>
                          <br></br>
                        </p>
                        <div className="home-en-author3">
                          <span className="home-en-name5">
                            <span>Laura Fernández</span>
                            <br></br>
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
                    <div className="home-en-content22">
                      <div className="home-en-quote3">
                        <p className="home-en-quote4">
                          <span>
                            I&apos;m over the moon! He explains everything
                            great, he is very patient and very nice.
                          </span>
                          <br></br>
                        </p>
                        <div className="home-en-author4">
                          <span className="home-en-name6">
                            Mariangeles Mediero
                          </span>
                          <span className="home-en-location2">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-en-content23">
                      <div className="home-en-quote5">
                        <p className="home-en-quote6">
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
                        <div className="home-en-author5">
                          <span className="home-en-name7">
                            <span>Mourad Zakari</span>
                            <br></br>
                          </span>
                          <span className="home-en-location3">Mijas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-en-content24">
                      <div className="home-en-quote7">
                        <p className="home-en-quote8">
                          Wadi, a great trainer and fighter, capable of training
                          different fighting styles and adapting to the
                          student&apos;s learning, I started training boxing
                          with him, I have advanced a lot in a short time, and
                          it has been a great discovery for me, it is giving me
                          a lot of personal motivation.
                        </p>
                        <div className="home-en-author6">
                          <span className="home-en-name8">David Lozano</span>
                          <span className="home-en-location4">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-en-controls2">
                <button
                  data-role="previous-banner-button"
                  className="home-en-previous2 blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-en-icon27">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-en-next2 blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-en-icon29">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
                <a
                  href="https://goo.gl/maps/jvHUtQGQDUB29dnY7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-link17 button"
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
            <div className="home-en-container17">
              <Script
                html={`<script>
let el2 = document.querySelector('.someslider')

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
        <div className="home-en-header26">
          <h2 className="home-en-heading21">FAQ</h2>
        </div>
        <div className="home-en-content25">
          <div className="home-en-column1">
            <div className="home-en-element1">
              <h3 className="home-en-header27">
                <span>Where are the training sessions?</span>
                <br></br>
              </h3>
              <p className="home-en-content26">
                <span className="home-en-text220">
                  They will be at NextGen Fight Club Fuengirola / Mijas Costa or
                  for an extra cost at a personalized location. Send me a
                  message!
                </span>
                <br className="home-en-text221"></br>
                <br className="home-en-text222"></br>
                <br className="home-en-text223"></br>
                <a
                  href="https://maps.app.goo.gl/F6H3RDwEDdx96JpY8"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-link18"
                >
                  NextGen Fight Club
                </a>
                <br></br>
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="home-en-element2">
              <h3 className="home-en-header28">
                <span>What equipment do I need?</span>
                <br></br>
              </h3>
              <p className="home-en-content27">
                <span>
                  For your first class you don&apos;t need anything more than
                  comfortable clothes and water. And for the long term, you can
                  buy gloves and protection (shin guards) to get the most out of
                  it.
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element3">
              <h3 className="home-en-header29">
                <span>Do I need experience to train with you?</span>
                <br></br>
              </h3>
              <p className="home-en-content28">
                <span>
                  No! I adapt the classes according to the level and physical
                  condition of each client.
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element4">
              <h3 className="home-en-header30">
                <span>Do you offer group classes?</span>
                <br></br>
              </h3>
              <p className="home-en-content29">
                Not currently. If you are interested in group classes, contact
                Spartans Fighter Mijas.
              </p>
            </div>
          </div>
          <div className="home-en-column2">
            <div className="home-en-element5">
              <h3 className="home-en-header31">What schedule do you have?</h3>
              <p className="home-en-content30">
                <span className="home-en-text237">
                  I have a flexible schedule. Checkout my calendar for
                  availability!
                </span>
                <a
                  href="https://calendly.com/wktraining"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-link19"
                >
                  Booking calendar
                </a>
              </p>
            </div>
            <div className="home-en-element6">
              <h3 className="home-en-header32">How long are the classes?</h3>
              <p className="home-en-content31">
                <span>
                  Classes are generally one hour, with some extra time for
                  stretching etc.
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element7">
              <h3 className="home-en-header33">How do I get started?</h3>
              <p className="home-en-content32">
                <span>
                  Book your first class by clicking on the reservation button.
                  The trial class has a discount of -75% (individual trial class
                  €10).
                </span>
                <br></br>
              </p>
            </div>
            <div className="home-en-element8">
              <h3 className="home-en-header34">
                <span>I have more questions, how do I contact you?</span>
                <br></br>
              </h3>
              <p className="home-en-content33">
                <span className="home-en-text244">
                  You can message me on Facebook, Instagram or WhatsApp!
                </span>
                <br></br>
                <br></br>
              </p>
              <p className="home-en-content34">
                <a
                  href="https://m.facebook.com/WadiiKadiri/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-en-link20"
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
                className="home-en-link21"
              >
                <p className="home-en-content35">Instagram</p>
              </a>
              <img
                alt="pastedImage"
                src="/external/pastedimage-6z36-1400w.png"
              />
            </div>
          </div>
        </div>
        <div className="home-en-container18">
          <div className="home-en-container19">
            <Script
              html={`<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/CrGKatHITFJ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/Cr3m9ogrebz/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/Cr3m9ogrebz/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Wadii Kadiri (@wazaek)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>`}
            ></Script>
          </div>
        </div>
      </section>
      <div className="home-en-footer">
        <div className="home-en-content36">
          <div className="home-en-main">
            <div className="home-en-branding2">
              <img
                alt="image"
                src="/wk-training-logo-1500h.png"
                className="home-en-image17"
              />
              <span className="home-en-text249">
                <span>WK Training</span>
                <br></br>
                <span>Fuengirola, Málaga</span>
              </span>
            </div>
            <div className="home-en-links">
              <div className="home-en-column3">
                <span className="home-en-header35">
                  <span>Content</span>
                  <br></br>
                </span>
                <div className="home-en-list1">
                  <a href="#quien-soy" className="home-en-link22">
                    About me
                  </a>
                  <a href="#info-clases" className="home-en-link23">
                    Information
                  </a>
                  <a href="#faq" className="home-en-link24">
                    FAQ
                  </a>
                  <a href="#testimoniales" className="home-en-link25">
                    <span>Testimonials</span>
                    <br></br>
                  </a>
                </div>
              </div>
              <div className="home-en-column4">
                <span className="home-en-header36">Social media</span>
                <div className="home-en-list2">
                  <a
                    href="https://www.instagram.com/wazaek"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-en-link26"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://m.facebook.com/WadiiKadiri/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-en-link27"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-en-bottom">
            <div className="home-en-container20">
              <img
                alt="image"
                src="/favicon-192x192-200h.png"
                className="home-en-image18"
              />
              <span className="home-en-text257">
                © 2024 WKTraining - All rights reserved
              </span>
            </div>
            <button data-role="scroll-top" className="home-en-button2 button">
              <img alt="image" src="/arrow.svg" className="home-en-image19" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-en-container22">
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
      <div className="home-en-container23">
        <div className="home-en-container24">
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
<a href="https://api.whatsapp.com/send?phone=34634222959&text=Hi%21%20I%27d%20like%20to%20ask%20more%20about..." class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default HomeEn
