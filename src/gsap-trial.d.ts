declare module "gsap/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | string[] | Element | Element[], vars?: Record<string, unknown>);
    split(vars?: Record<string, unknown>): void;
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static get(): ScrollSmoother | undefined;
    static refresh(hard?: boolean): void;
    scrollTo(target: string | Element | number | null, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}
