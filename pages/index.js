import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light  disable animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/ryan-ray-profile2.jpeg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>gastón.</h1>
              <h3>CEO of Pears&Pears</h3>

              <Link href="https://www.google.com/intl/es-419/gmail/about/">
                <a className="btn btn-outline-light btn-success">t6nokk@gmail.com</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>About Life.</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                 Gym, Work, nationality, idioms.
                  </h5>
                  <p>
Me llamo Gastón Zúñiga García, estudio o estudie en el Instituto cumbres de caracas, vivo en venezuela, hablo español he ingles, quiero estudiar tambien el idioma ruso, hize este portafolio para hablar un poco sobre mi en resumido, me gustaria trabajar de administrador de alguna empresa, anteriormente hize 4 cursos de desarrollador (developer), naci en el 2007, tengo sangre española y venezolana, empeze a iir ala gimnasio el 19 de abril del 2022, Mi anime favorito es Berserk y jojos bizarre adventures.
                  </p>
                  <p>
                  My name is Gastón Zúñiga García, I study or studied at the Cumbres Institute in Caracas, I live in Venezuela, I speak Spanish and English, I also want to study the Russian language, I made this portfolio to talk a little about myself in short, I would like to work as an administrator of some company, I previously did 4 developer courses, I was born in 2007, I have Spanish and Venezuelan blood, I started going to the gym on April 19, 2022, My favorite anime is Berserk and Jojos Bizarre Adventures.
                  </p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
      </section>




  </Layout>
);

export default Index;
