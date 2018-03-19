import React, { Component, Fragment } from 'react'
import { WOW } from 'wowjs'
import {
  Button,
  ButtonText,
  Card,
  Composition,
  FeatureBox,
  FormBook,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  LogoLarge,
  LogoSmall,
  Popup,
  Story,
  Video
} from 'components'
import nat8 from 'assets/nat-8.jpg'
import nat9 from 'assets/nat-9.jpg'
import './Home.css'

const card1 = {
  color: 'orange',
  header: 'The Sea Explorer',
  detailsList: <ul>
    <li>3 day tours</li>
    <li>Up to 30 people</li>
    <li>2 tour guides</li>
    <li>Sleep in cozy hotels</li>
    <li>Difficulty: easy</li>
  </ul>,
  price: '$279'
}

const card2 = {
  color: 'green',
  header: 'The Forest Hiker',
  detailsList: <ul>
    <li>7 day tours</li>
    <li>Up to 40 people</li>
    <li>6 tour guides</li>
    <li>Sleep in provided tents</li>
    <li>Difficulty: medium</li>
  </ul>,
  price: '$497'
}

const card3 = {
  color: 'blue',
  header: 'The Snow Adventurer',
  detailsList: <ul>
    <li>5 day tours</li>
    <li>Up to 15 people</li>
    <li>3 tour guides</li>
    <li>Sleep in provided tents</li>
    <li>Difficulty: hard</li>
  </ul>,
  price: '$897'
}

const story1 = {
  imagePath: nat8,
  name: 'Mary Smith',
  title: 'I had the best week ever with my family',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.'
}

const story2 = {
  imagePath: nat9,
  name: 'Jack Wilson',
  title: 'WOW! My life is completely different now<',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.'
}

class Home extends Component {
  componentDidMount () {
    new WOW().init()
  }
  render () {
    return (
      <Fragment>
        <div>
          <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
          <label htmlFor='navi-toggle' className='navigation__button'>
            <span className='navigation__icon'>&nbsp;</span>
          </label>
          <div className='navigation__background'>&nbsp;</div>
          <nav className='navigation__nav'>
            <ul className='navigation__list'>
              <li className='navigation__item'><a href='#' className='navigation__link'><span>01</span>About Natous</a></li>
              <li className='navigation__item'><a href='#' className='navigation__link'><span>02</span>Your benfits</a></li>
              <li className='navigation__item'><a href='#' className='navigation__link'><span>03</span>Popular tours</a></li>
              <li className='navigation__item'><a href='#' className='navigation__link'><span>04</span>Stories</a></li>
              <li className='navigation__item'><a href='#' className='navigation__link'><span>05</span>Book now</a></li>
            </ul>
          </nav>
        </div>

        <header className='header'>
          <div className='header__logo-box'>
            <LogoSmall />
          </div>
          <div className='header__text-box'>
            <HeadingPrimary className='heading-primary--left-animation' size='main' text='Outdoors' />
            <HeadingPrimary className='heading-primary--right-animation u-margin-bottom-big' size='sub' text='is where life happens' />
            <Button className='btn--bottom-animation' href='#section-tours' color='white' text='Discover our tours' />
          </div>
        </header>

        <main>
          <section className='section-about'>
            <div className='u-center-text u-margin-bottom-big'>
              <HeadingSecondary text='Exciting tours for adventurous people' />
            </div>
            <div className='row'>
              <div className='col-1-of-2 wow slideInLeft'>
                <HeadingTertiary className='u-margin-bottom-small' text={'You\'re going to fall in love with nature'} />
                <p className='section-about__paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                  ducimus quam nisi exercitationem omnis earum qui.
                </p>
                <HeadingTertiary className='u-margin-bottom-small' text='Live adventures like you never have before' />
                <p className='section-about__paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                </p>
                <ButtonText href='#' text='Learn more &rarr;' />
              </div>
              <div className='col-1-of-2 wow slideInRight'>
                <Composition />
              </div>
            </div>
          </section>

          <section className='section-features'>
            <div className='row'>
              <div className='col-1-of-4 wow slideInUp'>
                <FeatureBox
                  header='Explore the world'
                  icon='icon-basic-world'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.' />
              </div>
              <div className='col-1-of-4 wow slideInDown'>
                <FeatureBox
                  header='Meet nature'
                  icon='icon-basic-compass'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.' />
              </div>
              <div className='col-1-of-4 wow slideInUp'>
                <FeatureBox
                  header='Find your way'
                  icon='icon-basic-map'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.' />
              </div>
              <div className='col-1-of-4 wow slideInDown'>
                <FeatureBox
                  header='Live a healthier life'
                  icon='icon-basic-heart'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.' />
              </div>
            </div>
          </section>

          <section className='section-tours' id='section-tours'>
            <div className='u-center-text u-margin-bottom-big'>
              <HeadingSecondary text='Most popular tours' />
            </div>
            <div className='row'>
              <div className='col-1-of-3 wow flipInY'>
                <Card {...card1} />
              </div>
              <div className='col-1-of-3 wow flipInY'>
                <Card {...card2} />
              </div>
              <div className='col-1-of-3 wow flipInY'>
                <Card {...card3} />
              </div>
            </div>
            <div className='u-center-text u-margin-top-huge'>
              <Button href='#' color='green' text='Discover all tours' />
            </div>
          </section>

          <section className='section-stories'>
            <Video />
            <div className='u-center-text u-margin-bottom-big'>
              <HeadingSecondary text='We make people genuinely happy' />
            </div>
            <div className='row wow tada'>
              <Story {...story1} />
            </div>
            <div className='row wow tada'>
              <Story {...story2} />
            </div>
            <div className='u-center-text u-margin-top-huge'>
              <ButtonText href='#' text='Read all stories &rarr;' />
            </div>
          </section>

          <section className='section-book'>
            <div className='row wow jello'>
              <FormBook />
            </div>
          </section>
        </main>
        <footer className='footer'>
          <div className='footer__logo-box'>
            <LogoLarge />
          </div>
          <div className='row'>
            <div className='col-1-of-2'>
              <div className='footer__navigation'>
                <ul className='footer__list'>
                  <li className='footer__item'><a href='#' className='footer__link'>Company</a></li>
                  <li className='footer__item'><a href='#' className='footer__link'>Contact us</a></li>
                  <li className='footer__item'><a href='#' className='footer__link'>Carrers</a></li>
                  <li className='footer__item'><a href='#' className='footer__link'>Privacy policy</a></li>
                  <li className='footer__item'><a href='#' className='footer__link'>Terms</a></li>
                </ul>
              </div>
            </div>
            <div className='col-1-of-2'>
              <p className='footer__copyright'>
                You are 100% allowed to use this webpage for both personal
                and commercial use, but NOT to claim it as your own design.
                A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
              </p>
            </div>
          </div>
        </footer>

        <Popup />
      </Fragment>
    )
  }
}

export default Home
