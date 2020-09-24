import React from 'react'
import { Col, Row } from 'react-bootstrap'

const sections = [
  {
    title: 'Hundreds of Listings around the US',
    body: 'Our network of partners offers stays in luxury resorts, hotels to bed and breakfasts and private vacation homes.',
    img: 'https://drophellopets.s3-us-west-1.amazonaws.com/img/Benefit+A%402x.png'
  },
  {
    title: 'Quick bookings with our easy platform',
    body: 'Search, click, and book. Our confirmation process is super easy with fast confirmations so you can start packing pronto.',
    img: 'https://drophellopets.s3-us-west-1.amazonaws.com/img/Benefit+B.svg'
  },
  {
    title: 'Secure payments for all transactions',
    body: 'Your payment information and your pets documentation is private and encrypted. No funny business!',
    img: 'https://drophellopets.s3-us-west-1.amazonaws.com/img/Benefit+C%402x.png'
  },
]

export default () => {

  const renderList = sections.map(s =>
    <Col md="4" sm="12" className="section-details__item">
      <div className="section-details__item-top">
        <img src={s.img} />
        <h3>{s.title}</h3>
      </div>
      <p>{s.body}</p>
    </Col>
  )

  return (
    <section className="section-details">
      <Row>
        {renderList}
      </Row>
    </section>
  )
}