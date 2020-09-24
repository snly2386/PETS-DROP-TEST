import React, { useEffect, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from './Button'
import gsap, { TweenLite } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default () => {
  const section = useRef(null)

  useEffect(() => {
    TweenLite.to(section.current, {
      backgroundColor: '#003A1C',
      scrollTrigger: {
        trigger: section.current,
        scrub: true,
        start: "top bottom",
        end: 'top center'
      }
    })
  }, [])

  return (
    <section className="section-search" ref={section}>
      <Row>
        <Col md="6" sm="12">
          <div className="section-search__content">
            <p>
              Search and book over 800 pet-friendly hotels, b&bs, and private getaways with our platform.
            </p>
            <Button
              href="/start-booking"
              className="button--body button--animated-secondary">
              Start Booking
            </Button>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="section-search__img">
            <img src="https://drophellopets.s3-us-west-1.amazonaws.com/img/Dog+Stays_UIshot.png" />
          </div>
        </Col>
      </Row>
    </section>
  )
}