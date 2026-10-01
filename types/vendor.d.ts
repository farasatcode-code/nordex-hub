/**
 * Minimal ambient typings for the jQuery-based libraries the template ships
 * with (jQuery, Owl Carousel, WOW.js, Bootstrap 5 bundle, easing).
 *
 * They are loaded at runtime as plain <script> tags from /public, so no npm
 * packages are installed for them. Only the slice of the API the site actually
 * uses is described here.
 */

interface OwlCarouselOptions {
  autoplay?: boolean;
  smartSpeed?: number;
  center?: boolean;
  dots?: boolean;
  loop?: boolean;
  margin?: number;
  nav?: boolean;
  navText?: false | string[];
  responsiveClass?: boolean;
  responsive?: Record<string, { items: number }>;
}

interface JqCollection extends Array<HTMLElement> {
  addClass(className: string): JqCollection;
  removeClass(className: string): JqCollection;
  fadeIn(duration?: number): JqCollection;
  fadeOut(duration?: number): JqCollection;
  animate(
    properties: Record<string, number>,
    duration?: number,
    easing?: string,
  ): JqCollection;
  on(event: string, handler: (event: Event) => void): JqCollection;
  click(handler: (event: Event) => void): JqCollection;
  scroll(handler: () => void): JqCollection;
  scrollTop(): number;
  each(handler: (element: HTMLElement, index: number) => void): JqCollection;
  prop(name: string, value: unknown): JqCollection;
  text(): string;
  text(value: string): JqCollection;
  owlCarousel(options?: OwlCarouselOptions): JqCollection;
  carousel(action?: "init" | "destroy"): JqCollection;
}

interface JQueryStatic {
  (selector: string | Element): JqCollection;
}

interface WOWInstance {
  init(): void;
}

interface WOWStatic {
  new (options?: {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
  }): WOWInstance;
}

interface BootstrapCarouselInstance {
  dispose?(): void;
}

interface BootstrapCarouselConstructor {
  new (element: Element, config?: Record<string, unknown>): BootstrapCarouselInstance;
  getInstance?(element: Element): BootstrapCarouselInstance | null;
  /** Only present from Bootstrap 5.0.2 onwards. */
  getOrCreateInstance?(
    element: Element,
    config?: Record<string, unknown>,
  ): BootstrapCarouselInstance;
}

interface BootstrapStatic {
  Carousel: BootstrapCarouselConstructor;
}

interface Window {
  WOW?: WOWStatic;
  bootstrap?: BootstrapStatic;
  jQuery?: JQueryStatic;
  $?: JQueryStatic;
  __hightechLibsReady?: boolean;
}

declare const $: JQueryStatic;
declare const jQuery: JQueryStatic;
declare const WOW: WOWStatic;
