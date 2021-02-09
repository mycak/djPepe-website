import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

export const addSmoothScroll = () => {
  const scroller = document.querySelector('.scroller');

  const bodyScrollBar = Scrollbar.init(scroller, {
    damping: 0.05,
    thumbMinSize: 0,
    delegateTo: document,
    alwaysShowTracks: true,
  });

  ScrollTrigger.scrollerProxy('.scroller', {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
  bodyScrollBar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller });

  // if (document.querySelector('.gsap-marker-scroller-start')) {
  //   const markers = gsap.utils.toArray('[class *= "gsap-marker"]')

  //   bodyScrollBar.addListener(({ offset }) => {
  //     gsap.set(markers, { marginTop: -offset.y })
  //   })
  // }
};
