import React from 'react'
import { logo } from '../assets'
import Button from './Button'

const HERO_IMG = 'https://drophellopets.s3-us-west-1.amazonaws.com/img/Pet+Stays+Hero_lg%402x.png'
  , HERO_IMG_MOBILE = 'https://drophellopets.s3-us-west-1.amazonaws.com/img/Pet+Stays+Hero+Mobile%402x.png'

export default () => {
  return (
    <>
      <nav className="nav d-flex">
        <div className="nav__icon">
          {logo}
        </div>
        <div className="nav__cta">
          <Button className="button--nav button--animated-main" href="/book-a-place">
            Book a place
          </Button>
        </div>
      </nav>
      <main className="section-landing">
        <div>
          <h1 className="section-landing__header">Vacation Rentals for pets and their loved ones.</h1>
          <picture>
            <source media="(max-width: 600px)" srcSet={HERO_IMG_MOBILE} />
            <img src={HERO_IMG} alt="Pets And Luggage" className="section-landing__img" />
          </picture>
        </div>
      </main>
    </>
  )
}
