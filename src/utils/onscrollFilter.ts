import { gsap } from "gsap";
// import GSAPPluginScope from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// ScrollTrigger
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

export default class Item {
  DOM: {
    element: HTMLElement | null;
    titleWrap: HTMLElement | null;
    titleUp: HTMLElement | null;
    titleDown: HTMLElement | null;
    content: Element[] | null;
    svg: HTMLElement | null;
    mask: HTMLElement | null;
    image: SVGImageElement | HTMLElement | null;
  } = {
    element: null,
    titleWrap: null,
    titleUp: null,
    titleDown: null,
    content: null,
    svg: null,
    mask: null,
    image: null,
  };

  flipState: Flip.FlipState | null;

  constructor(DOM_ELEMENT: HTMLElement) {
    this.DOM.element = DOM_ELEMENT;
    this.DOM.titleWrap = DOM_ELEMENT.querySelector(".title-wrap");
    this.DOM.titleUp = DOM_ELEMENT.querySelector(".title--up");
    this.DOM.titleDown = DOM_ELEMENT.querySelector(".title--down");
    this.DOM.content = [...DOM_ELEMENT.querySelectorAll(".content")];
    this.DOM.svg = DOM_ELEMENT.querySelector(".content__img");
    this.DOM.mask = DOM_ELEMENT.querySelector(".mask");
    this.DOM.image = DOM_ELEMENT.querySelector("image");
    this.flipState = Flip.getState([this.DOM.titleUp, this.DOM.titleDown]);

    console.log(`this${this}`);
    console.log(this.DOM);

    if (this.DOM.titleUp && this.DOM.titleDown) {
      console.log("if condition");
      this.DOM.content[1].prepend(this.DOM.titleUp, this.DOM.titleDown);
    }

    const isCircle = this.DOM.mask?.tagName.toLowerCase() === "circle";
    const rAttribute: string = this.DOM.mask?.getAttribute("r") ?? ""; // TODO handle error properly
    const dAttribute: string = this.DOM.mask?.getAttribute("d") ?? ""; // TODO handle error properly
    const finalDatasetValue: string = this.DOM.mask?.dataset.valueFinal ?? ""; // TODO handle error properly
    console.log(`isCircle = ${isCircle}`);
    console.log(`rAttribute = ${rAttribute}`);
    console.log(`dAttribute = ${dAttribute}`);
    console.log(`finalDatasetValue = ${finalDatasetValue}`);
    console.log(this.flipState);

    const flip = Flip.from(this.flipState, {
      ease: "none",
      simple: true,
    })
      .fromTo(
        this.DOM.mask,
        {
          attr: isCircle ? { r: rAttribute } : { d: dAttribute },
        },
        {
          ease: "none",
          attr: isCircle ? { r: finalDatasetValue } : { d: finalDatasetValue },
        },
        0,
      )
      .fromTo(
        this.DOM.image,
        {
          transformOrigin: "50% 50%",
          filter: "brightness(100%)",
        },
        {
          ease: "none",
          scale: isCircle ? 1.2 : 1,
          filter: "brightness(150%)",
        },
        0,
      );

    ScrollTrigger.create({
      trigger: this.DOM.titleWrap,
      snap: { ease: "none" },
      ease: "none",
      start: "clamp(top bottom-=10%)",
      end: "+=40%",
      scrub: true,
      animation: flip,
    });
  }
}
