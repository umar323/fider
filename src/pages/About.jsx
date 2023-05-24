import React from 'react'

function About() {
  return (
    <div className='about'>
      <div className="container">
        <h1 className="about__title">Github Finder</h1>
        <h3 className="about__subTitle">This Web Project is For Testing</h3>
        <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti in minus itaque quasi eius voluptatibus magnam nam quidem quibusdam odio, saepe modi iure, provident facere accusantium rem minima necessitatibus repellat ab! Aliquam ipsa deserunt commodi autem voluptatibus, eaque minus?</p>
        <a href="tel:+9989943534436" className='about__contact'><span>Support Call:</span> +9989943534436</a>
        <a href="mailto:example@gmail.com" className='about__contact'><span>Support Mail:</span> example@gmail.com</a>
      </div>
    </div>
  )
}

export default About