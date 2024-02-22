import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Check from '../components/check'
import './home-es.css'

const HomeEs = (props) => {
  return (
    <div className="home-es-container">
      <Helmet>
        <title>WK Training - Entrenador Personal de Artes Marciales</title>
        <meta
          property="og:title"
          content="WK Training - Entrenador Personal de Artes Marciales"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/eea6a35f-439d-4bb5-9212-69ef86903565/7d3a9595-2129-4ab9-beb6-74cbf4d883b3?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="home-es-container01">
        <span className="home-es-text">
          <span className="home-es-text001">
            AVISO:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            Tengo disponibilidad limitada para aceptar nuevos clientes mientras
            me recupero de una cirugía de rodilla. ¡Contáctame para más
            información!
          </span>
        </span>
      </div>
      <section className="home-es-hero">
        <video
          src="/training.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="home-es-video"
        ></video>
        <header data-thq="thq-navbar" className="home-es-navbar">
          <img
            alt="image"
            src="/wk-training-logo-1500h.png"
            className="home-es-branding"
          />
          <div data-thq="thq-burger-menu" className="home-es-burger-menu">
            <div className="home-es-hamburger">
              <img alt="image" src="/hamburger.svg" className="home-es-icon" />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-es-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-es-nav"
            >
              <div className="home-es-container02">
                <img
                  alt="image"
                  src="/wk-training-logo-1500h.png"
                  className="home-es-image"
                />
                <div data-thq="thq-close-menu" className="home-es-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-es-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-es-nav1"
              >
                <a href="#quien-soy" className="home-es-link">
                  Quien soy?
                </a>
                <a href="#info-clases" className="home-es-link01">
                  Información clases
                </a>
                <a href="#faq" className="home-es-link02">
                  Preguntas frecuentes
                </a>
                <a href="#faq" className="home-es-link03">
                  Testimoniales
                </a>
                <Link to="/en" className="home-es-link04">
                  IN ENGLISH
                </Link>
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-6z36-1500h.png"
                />
              </nav>
              <div className="home-es-container03">
                <a
                  href="https://calendly.com/wktraining"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-es-button button"
                >
                  <span>
                    <span>Reservar clases</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
            <div className="home-es-icon-group"></div>
          </div>
        </header>
        <div className="home-es-hero-content">
          <div className="home-es-container04">
            <div className="home-es-header-container">
              <div className="home-es-header">
                <h1 className="home-es-heading">
                  <span className="home-es-text006">
                    Desata a tu luchador interno
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
          <p className="home-es-caption">
            Transforma tu cuerpo y mente con las clases privadas de boxeo y
            kickboxing de WK Training!
          </p>
          <a
            href="https://calendly.com/wktraining"
            target="_blank"
            rel="noreferrer noopener"
            className="home-es-link05 button"
          >
            <span className="home-es-text008">
              <span>Reservar clases</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <section className="home-es-note">
        <h2 className="home-es-caption01">
          Con un enfoque en la técnica, la resistencia y la fuerza, mis clases
          están diseñadas para desafiarte y motivarte a alcanzar tu máximo
          potencial.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h2>
      </section>
      <section className="home-es-statistics">
        <div className="home-es-content">
          <div className="home-es-stat">
            <h3 className="home-es-header01">10+ años</h3>
            <span className="home-es-caption02">Experiencia de enseñanza</span>
          </div>
          <div className="home-es-stat1">
            <h3 className="home-es-header02">50+</h3>
            <span className="home-es-caption03">
              Peleas en boxeo y artes marciales
            </span>
          </div>
          <div className="home-es-stat2">
            <h3 className="home-es-header03">300+</h3>
            <span className="home-es-caption04">
              Alumnos a lo largo de años
            </span>
          </div>
        </div>
      </section>
      <section className="home-es-slider">
        <h2 className="home-es-heading01">
          Un deporte para la salud mental y física
        </h2>
        <div className="home-es-header04"></div>
        <div className="home-es-selector">
          <p className="home-es-caption05">
            <span>
              Bienvenido/a a las clases privadas de boxeo y kickboxing de Wadii
              (El Vikingo) Kadiri en Fuengirola, Málaga. 
            </span>
            <span>
              Ven a probar una clase sin compromiso y descubre los beneficios de
              las clases privadas de boxeo y kickboxing!
            </span>
          </p>
        </div>
      </section>
      <section className="home-es-slides">
        <div className="home-es-slider1 slider blaze-slider">
          <div className="home-es-slider-container blaze-container">
            <div className="home-es-slider-track-container blaze-track-container">
              <div className="home-es-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-muay-thai-400h1.webp"
                    className="home-es-image01"
                  />
                  <div className="home-es-content01">
                    <div className="home-es-header05">
                      <h3 className="home-es-heading02">Muay Thai</h3>
                      <p className="home-es-caption06">
                        El Muay Thai es un deporte de combate originario de
                        Tailandia que implica el uso de técnicas de puño,
                        patadas, rodillas y codos.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-boxeo-2-400h.webp"
                    className="home-es-image02"
                  />
                  <div className="home-es-content02">
                    <div className="home-es-header06">
                      <h3 className="home-es-heading03">Boxeo</h3>
                      <p className="home-es-caption07">
                        El famoso boxeo, un deporte que requiere una gran
                        habilidad, agilidad y ​​condición física combinada con
                        fuerza.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-kickboxing-400h.webp"
                    className="home-es-image03"
                  />
                  <div className="home-es-content03">
                    <div className="home-es-header07">
                      <h3 className="home-es-heading04">Kickboxing</h3>
                      <p className="home-es-caption08">
                        Kickboxing es un deporte de combate que combina técnicas
                        de boxeo y patadas.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/clases-k1-400h.webp"
                    className="home-es-image04"
                  />
                  <div className="home-es-content04">
                    <div className="home-es-header08">
                      <h3 className="home-es-heading05">K-1</h3>
                      <p className="home-es-caption09">
                        K-1 es un arte marcial que combina combina técnicas de
                        boxeo, kickboxing, muay thai y karate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-es-controls">
              <button
                data-role="previous-banner-button"
                className="home-es-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-es-icon03">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-es-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-es-icon05">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-es-container06">
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
      <section className="home-es-objectives">
        <div className="home-es-content05">
          <span className="home-es-text013">Objetivos</span>
          <div className="home-es-objectives-list">
            <div className="objective">
              <h3 className="home-es-text014">Crecimiento</h3>
              <p className="home-es-text015">
                <span>
                  Al mejorar tu técnica y habilidades en el boxeo, aumentarás tu
                  confianza en ti mismo y crecerás como persona.
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
            <div className="objective home-es-objective1">
              <h3 className="home-es-text018">Fitness</h3>
              <p className="home-es-text019">
                Los entrenamientos te ayudarán a mejorar tu condición física,
                fuerza, flexibilidad y tu resistencia cardiovascular.
              </p>
            </div>
            <div className="objective home-es-objective2">
              <h3 className="home-es-text020">Enfoque personal</h3>
              <p className="home-es-text021">
                En las clases privadas, el enfoque está en ti y en tus objetivos
                específicos, personalizo cada sesión para ayudarte a mejorar en
                áreas específicas a tí.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="quien-soy" className="home-es-experience">
        <div className="home-es-content06">
          <div className="home-es-header09">
            <div className="home-es-header-container1">
              <div className="home-es-header10">
                <h2 className="home-es-heading06">
                  <span>¿Quién soy</span>
                  <span>?</span>
                </h2>
              </div>
              <p className="home-es-caption10">
                Hola, soy Wadii, campeón de Andalucía en 2014 y de NSW
                (Australia) en 2018 en el mundo de las artes marciales. He
                viajado por todo el mundo y he adquirido una gran experiencia y
                técnicas nuevas. Ahora, he decidido dedicar mi tiempo a mi
                pasión: competir a nivel profesional y enseñar artes marciales.
                Me encantaría compartir mis conocimientos contigo y ayudarte a
                alcanzar tus objetivos en este deporte que tanto amo. ¡Únete a
                mis clases y juntos llevaremos tus habilidades al siguiente
                nivel!
              </p>
            </div>
          </div>
          <div className="home-es-testimonial">
            <div className="home-es-content07">
              <span className="home-es-text024">Testimonial</span>
              <p className="home-es-text025">
                “Wadi, un gran entrenador y luchador, capaz de entrenar
                diferentes estilos de lucha y adaptarse al aprendizaje del
                alumno”
              </p>
            </div>
            <div className="home-es-information">
              <div className="home-es-author">
                <img
                  alt="image"
                  src="/david-200h.png"
                  className="home-es-icon07"
                />
                <span className="home-es-name">David Lozano</span>
              </div>
              <span className="home-es-name1">Fuengirola</span>
            </div>
          </div>
        </div>
        <div className="home-es-images">
          <div className="home-es-square"></div>
          <img
            alt="image"
            src="/wadii_minimized-1400w.webp"
            className="home-es-image05"
          />
        </div>
      </section>
      <section id="beneficios" className="home-es-experience1">
        <div className="home-es-images1">
          <div className="home-es-square1"></div>
          <img
            alt="image"
            src="/clases-boxeo-1400w.webp"
            className="home-es-image06"
          />
        </div>
        <div className="home-es-content08">
          <div className="home-es-header11">
            <div className="home-es-header-container2">
              <div className="home-es-header12">
                <h2 className="home-es-heading07">Entrena y ¡diviértete!</h2>
              </div>
              <p className="home-es-caption11">
                ¡Hacer deporte no tiene porque ser aburrido!
              </p>
            </div>
            <div className="home-es-checkmarks">
              <div className="home-es-check">
                <div className="home-es-mark">
                  <svg viewBox="0 0 1024 1024" className="home-es-icon08">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-es-text026">
                  Técnicas de boxeo: aprende las técnicas de ataque y defensa
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-es-check1">
                <div className="home-es-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-es-icon10">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-es-text027">
                  Entrenamiento físico: ejercicios específicos para mejorar la
                  fuerza, la resistencia, la velocidad y la agilidad
                </span>
              </div>
              <div className="home-es-check2">
                <div className="home-es-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-es-icon12">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-es-text028">
                  Estrategias y tácticas: técnicas avanzadas para aplicar
                  durante los combates de boxeo
                </span>
              </div>
              <div className="home-es-check3">
                <div className="home-es-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-es-icon14">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-es-text029">
                  Coaching mental: preparación mental tanto para día al día o
                  para un  combate, incluyendo la visualización, la
                  concentración y la confianza en uno mismo
                </span>
              </div>
            </div>
          </div>
          <div className="home-es-testimonial1">
            <div className="home-es-content09">
              <span className="home-es-text030">Testimonial</span>
              <p className="home-es-text031">
                “Wadii ha conseguido que pese a que ya peino canas, me libere de
                prejuicios y ha adaptado el entrenamiento a mi nivel físico.
                Cada día me pone a prueba y consigue que me supere. Ya tengo el
                boxeo corriendo por mis venas. Un crack como entrenador y
                persona.”
              </p>
            </div>
            <div className="home-es-information1">
              <div className="home-es-author1">
                <img
                  alt="image"
                  src="/javier-200h.png"
                  className="home-es-icon16"
                />
                <span className="home-es-name2">Javier Jover Palacios</span>
              </div>
              <span className="home-es-name3">Fuengirola</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-es-create">
        <div className="home-es-content10">
          <div className="home-es-header13">
            <h2 className="home-es-heading08">
              <span>
                Ven a probar una clase a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-es-text033">-70%</span>
              <span> </span>
              <span>ahora!</span>
              <br></br>
            </h2>
          </div>
          <a
            href="https://calendly.com/wktraining"
            target="_blank"
            rel="noreferrer noopener"
            className="home-es-link06 button"
          >
            <span>
              <span>Reservar mi clase privada</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <section id="info-clases" className="home-es-comparision">
        <div id="precios" className="home-es-header-container3">
          <div className="home-es-header14">
            <h2 className="home-es-heading09">
              <span>Información de clases privadas</span>
              <br></br>
            </h2>
          </div>
          <p className="home-es-caption12">
            <span>
              Bienvenido/a a mis clases privadas de boxeo personalizadas, donde
              toda la atención se enfoca en ti.
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
          <p className="home-es-caption13">
            <span>
              Aprenderás de manera efectiva y disfrutarás al máximo. La ventaja
              de mis clases es que están diseñadas específicamente para ti,
              adaptándonos a tus metas y objetivos personales, ya sea perder
              peso, ganar fuerza, aprender técnicas básicas y avanzadas, o
              prepararte para futuras competencias. Todo esto mientras te
              diviertes y disfrutas de una experiencia única en cada sesión.
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
          <p className="home-es-caption14">
            <span>
              Además, mis horarios son flexibles, incluyendo disponibilidad de
              lunes a domingo, tanto en la mañana como en la tarde. No dudes en
              contactarme para ponernos de acuerdo en los días y horarios que
              mejor se adapten a tu agenda. Reserva tu clase privada de boxeo
              personalizada y comienza a alcanzar tus metas hoy mismo.
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
        <div className="home-es-table">
          <div className="home-es-row">
            <div className="home-es-plans">
              <div className="home-es-row01">
                <span className="home-es-text051">Placeholder</span>
                <span className="home-es-text052">
                  <span>Precios</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-es-row02">
            <div className="home-es-plans01">
              <div className="home-es-row03">
                <span className="home-es-text055">Atención personalizada</span>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row04">
            <div className="home-es-plans02">
              <div className="home-es-row05">
                <span className="home-es-text056">Video análisis</span>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row06">
            <div className="home-es-plans03">
              <div className="home-es-row07">
                <span className="home-es-text057">Primera clase</span>
                <div className="value">
                  <span className="home-es-text058">
                    <span className="home-es-text059">-70% (=10€)</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row08">
            <div className="home-es-plans04">
              <div className="home-es-row09">
                <span className="home-es-text061">Precio clase suelta</span>
                <div className="value">
                  <span className="home-es-text062">35€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row10">
            <div className="home-es-plans05">
              <div className="home-es-row11">
                <span className="home-es-text063">Precio bono de 5 clases</span>
                <div className="value">
                  <span className="home-es-text064">30€/clase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row12">
            <div className="home-es-plans06">
              <div className="home-es-row13">
                <span className="home-es-text065">
                  Precio bono de 10 clases
                </span>
                <div className="value">
                  <span className="home-es-text066">25€/clase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row14">
            <div className="home-es-plans07">
              <div className="home-es-row15">
                <span className="home-es-text067">Locación personalizada</span>
                <div className="value">
                  <span className="home-es-text068">10€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row16">
            <div className="home-es-plans08">
              <div className="home-es-row17">
                <span className="home-es-text069">
                  Descuento para 2 personas
                </span>
                <div className="value">
                  <span className="home-es-text070">-25%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-row18">
            <div className="home-es-plans09">
              <div className="home-es-row19">
                <span className="home-es-text071">
                  Descuento para 3+ personas
                </span>
                <div className="value">
                  <span className="home-es-text072">-50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimoniales" className="home-es-customer">
        <div className="home-es-header15">
          <h2 className="home-es-heading10">
            <span>Testimoniales de mis clientes</span>
            <br></br>
          </h2>
        </div>
        <section className="home-es-slides1">
          <div className="someslider slider blaze-slider">
            <div className="home-es-slider-container1 blaze-container">
              <div className="home-es-slider-track-container1 blaze-track-container">
                <div className="home-es-slider-track1 blaze-track">
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-es-content11">
                      <div className="home-es-quote">
                        <p className="home-es-quote1">
                          Gran profesional, gran persona con mucha paciencia y
                          con muchos conocimientos técnicos, tanto para niveles
                          iniciales, como avanzados, apuesta segura.
                        </p>
                        <div className="home-es-author2">
                          <span className="home-es-name4">
                            <span>Laura Fernández</span>
                            <br></br>
                          </span>
                          <span className="home-es-location">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-es-content12">
                      <div className="home-es-quote2">
                        <p className="home-es-quote3">
                          Encantada!! Te explica todo genial, tiene mucha
                          paciencia y es muy agradable.
                        </p>
                        <div className="home-es-author3">
                          <span className="home-es-name5">
                            Mariangeles Mediero
                          </span>
                          <span className="home-es-location1">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-es-content13">
                      <div className="home-es-quote4">
                        <p className="home-es-quote5">
                          Wadi es un gran competidor y compañero, y tambien como
                          entrenador: es paciente, apasionado por enseñar y
                          experimentado, una pasada asi que aprovecharlo💪🏽💪🏽
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                        <div className="home-es-author4">
                          <span className="home-es-name6">
                            <span>Mourad Zakari</span>
                            <br></br>
                          </span>
                          <span className="home-es-location2">Mijas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner-black banner"
                  >
                    <div className="home-es-content14">
                      <div className="home-es-quote6">
                        <p className="home-es-quote7">
                          Wadi, un gran entrenador y luchador, capaz de entrenar
                          diferentes estilos de lucha y adaptarse al aprendizaje
                          del alumno, empecé entrenando boxeo con el, he
                          avanzado mucho en poco tiempo, y ha sido un gran
                          descubrimiento para mí, me está dando mucha motivación
                          personal.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                        <div className="home-es-author5">
                          <span className="home-es-name7">David Lozano</span>
                          <span className="home-es-location3">Fuengirola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-es-controls1">
                <button
                  data-role="previous-banner-button"
                  className="home-es-previous1 blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-es-icon17">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-es-next1 blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-es-icon19">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
                <a
                  href="https://goo.gl/maps/jvHUtQGQDUB29dnY7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-es-link07 button"
                >
                  <span>
                    <span>Ver todas las reseñas</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="home-es-container08">
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
      <section id="faq" className="home-es-faq">
        <div className="home-es-header16">
          <h2 className="home-es-heading11">Preguntas frecuentes</h2>
        </div>
        <div className="home-es-content15">
          <div className="home-es-column">
            <div className="home-es-element">
              <h3 className="home-es-header17">¿Dónde son los entrenos?</h3>
              <p className="home-es-content16">
                <span className="home-es-text082">
                  Pueden ser en el gimnasio Spartans Fighter, en la playa de
                  Fuengirola o por un coste extra en una locación personalizada.
                  Mándame mensaje!
                </span>
                <br className="home-es-text083"></br>
                <br className="home-es-text084"></br>
                <a
                  href="https://goo.gl/maps/ZTmxewL62pkV4dgT9"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-es-link08"
                >
                  Spartans Fighter Mijas
                </a>
                <br></br>
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="home-es-element1">
              <h3 className="home-es-header18">¿Qué equipamiento necesito?</h3>
              <p className="home-es-content17">
                Para tu primera clase no necesitas nada más que ropa cómoda y
                agua. Y para largo plazo, puedes comprarte guantes y
                protecciones (espinilleras) para aprovechar al máximo.
              </p>
            </div>
            <div className="home-es-element2">
              <h3 className="home-es-header19">
                ¿Necesito experiencia para entrenar contigo?
              </h3>
              <p className="home-es-content18">
                No! Adapto las clases según el nivel y físico de cada cliente.
              </p>
            </div>
            <div className="home-es-element3">
              <h3 className="home-es-header20">¿Hay clases grupales?</h3>
              <p className="home-es-content19">
                Estoy en proceso de intentar cuadrar clases grupales con los
                interesados. Mándame mensaje para verlo.
              </p>
            </div>
          </div>
          <div className="home-es-column1">
            <div className="home-es-element4">
              <h3 className="home-es-header21">¿Qué horario hay?</h3>
              <p className="home-es-content20">
                <span className="home-es-text088">
                  Tengo horario flexible. Puedes ver las horas disponibles en mi
                  calendario.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-es-text089">Ver disponibilidad</span>
              </p>
            </div>
            <div className="home-es-element5">
              <h3 className="home-es-header22">
                ¿Qué duración tienen las clases?
              </h3>
              <p className="home-es-content21">
                Las clases son de una hora, con algo de extra para estiramiento
                y más.
              </p>
            </div>
            <div className="home-es-element6">
              <h3 className="home-es-header23">¿Como empiezo?</h3>
              <p className="home-es-content22">
                Reserva tu primera clase pulsando en el botón de reserva. La
                clase de prueba tiene un coste de -70% (clase suelta de prueba
                10€).
              </p>
            </div>
            <div className="home-es-element7">
              <h3 className="home-es-header24">
                Tengo más preguntas, ¿cómo contacto contigo?
              </h3>
              <p className="home-es-content23">
                <span className="home-es-text090">
                  Puedes escribirme por Facebook o Instagram o WhatsApp!
                </span>
                <br></br>
                <br></br>
              </p>
              <p className="home-es-content24">
                <a
                  href="https://m.facebook.com/WadiiKadiri/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-es-link09"
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
                className="home-es-link10"
              >
                <p className="home-es-content25">Instagram</p>
              </a>
              <img
                alt="pastedImage"
                src="/external/pastedimage-6z36-1500h.png"
              />
            </div>
          </div>
        </div>
        <div className="home-es-container09">
          <div className="home-es-container10">
            <Script
              html={`<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/CrGKatHITFJ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/Cr3m9ogrebz/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/Cr3m9ogrebz/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Wadii Kadiri (@wazaek)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>`}
            ></Script>
          </div>
        </div>
      </section>
      <div className="home-es-footer">
        <div className="home-es-content26">
          <div className="home-es-main">
            <div className="home-es-branding1">
              <img
                alt="image"
                src="/wk-training-logo-1500h.png"
                className="home-es-image07"
              />
              <span className="home-es-text095">
                <span>WK Training</span>
                <br></br>
                <span>Fuengirola, Málaga</span>
              </span>
            </div>
            <div className="home-es-links">
              <div className="home-es-column2">
                <span className="home-es-header25">
                  <span>Apartados</span>
                  <br></br>
                </span>
                <div className="home-es-list">
                  <a href="#quien-soy" className="home-es-link11">
                    Quien soy?
                  </a>
                  <a href="#info-clases" className="home-es-link12">
                    Información clases
                  </a>
                  <a href="#faq" className="home-es-link13">
                    Preguntas frequentes
                  </a>
                  <a href="#testimoniales" className="home-es-link14">
                    <span>Testimoniales</span>
                    <br></br>
                  </a>
                </div>
              </div>
              <div className="home-es-column3">
                <span className="home-es-header26">Redes sociales</span>
                <div className="home-es-list1">
                  <a
                    href="https://www.instagram.com/wazaek"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-es-link15"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://m.facebook.com/WadiiKadiri/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-es-link16"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-es-bottom">
            <div className="home-es-container11">
              <img
                alt="image"
                src="/favicon-192x192-200h.png"
                className="home-es-image08"
              />
              <span className="home-es-text103">
                © 2024 WKTraining - All rights reserved
              </span>
            </div>
            <button data-role="scroll-top" className="home-es-button1 button">
              <img alt="image" src="/arrow.svg" className="home-es-image09" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-es-container13">
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
      <div className="home-es-container14">
        <div className="home-es-container15">
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
<a href="https://api.whatsapp.com/send?phone=34677049573&text=Hola%21%0AQuisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre..." class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default HomeEs
