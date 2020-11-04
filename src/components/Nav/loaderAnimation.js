import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { gsap } from 'gsap'

gsap.registerPlugin(CSSRulePlugin)

const loaderAnimation = () => {
  console.log('essa')
  const ruleAfter = CSSRulePlugin.getRule('body:after')
  const ruleBefore = CSSRulePlugin.getRule('body:before')
  const loaderopacity = CSSRulePlugin.getRule('.loader--opacity')
  const tl = gsap.timeline()
  tl.to(
    ruleBefore,
    {
      duration: 0.4,
      ease: 'power2.easeInOut',
      cssRule: {
        top: '51%',
      },
    },
    'close'
  )
  tl.to(
    ruleAfter,
    {
      duration: 0.4,
      ease: 'power2.easeInOut',
      cssRule: {
        bottom: '50%',
      },
    },
    'close'
  )
  tl.to(loaderopacity, {
    duration: 0.2,
    cssRule: {
      opacity: 1,
    },
  })
  tl.to(
    ruleBefore,
    {
      delay: 1,
      duration: 0.4,
      ease: 'power2.easeInOut',
      cssRule: {
        top: '0%',
      },
    },
    'open'
  )
  tl.to(
    ruleAfter,
    {
      delay: 1,
      duration: 0.4,
      ease: 'power2.easeInOut',
      cssRule: {
        bottom: '0%',
      },
    },
    'open'
  )
  tl.to(
    loaderopacity,
    {
      delay: 1,
      duration: 0.2,
      cssRule: {
        opacity: 0,
      },
    },
    'open'
  )
}

export default loaderAnimation
