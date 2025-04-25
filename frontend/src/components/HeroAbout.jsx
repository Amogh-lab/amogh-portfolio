import './HeroAbout.css';
import React from 'react'
import MyImage from './myimage';

function HeroAbout() {
  return (<>
    <section className="hero-about-wrapper">
      <div className="hero-about-card">
        <h1>Welcome to My Portfolio</h1>
        <p className='name'>Hi, I'm Amogh A P,</p> <p className='card'>an aspiring developer currently learning AI & ML at RVCE. 
        I'm passionate about building scalable full-stack applications and diving 
        into DevOps to optimize my development processes. With a strong focus on AI 
        foundations and machine learning, I thrive in environments where I can quickly 
        pick up new tools and technologies to stay at the cutting edge of development.
        </p>
      </div>
    </section>
    <MyImage/>
    </>
  );
}

export default HeroAbout;
