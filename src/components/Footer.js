import React from 'react'
import { facebook, twitter, linkedin, logo, made } from '../assets'

const links = [
  {
    icon: facebook,
    href: 'https://www.facebook.com/petstays-app'
  },
  {
    icon: twitter,
    href: 'https://twitter.com/petstays-app'
  },
  {
    icon: linkedin,
    href: 'https://linkedin.com/company/petstays-app'
  }
]

export default () => {
  const renderLinks = links.map(l =>
    <a href={l.href} className="section-footer__link" data-social="true">
      {l.icon}
    </a>
  )
  return (
    <footer className="section-footer">
      <div className="section-footer__logo">
        {logo}
      </div>
      <div className="section-footer__social">
        <div className="section-footer__links">
          {renderLinks}
        </div>
        <div className="section-footer__copyright">
          <div>
            © 2020
          </div>
          <div className="section-footer__madein">
            <span>Made in</span>
            <span>San</span>
            <span>Fransisco</span>
          </div>
        </div>
      </div>
    </footer>
  )
}