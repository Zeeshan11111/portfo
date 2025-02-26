import { Directive, ElementRef, Renderer2, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: false
})
export class ScrollAnimationDirective implements AfterViewInit {
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object // ✅ Inject PLATFORM_ID
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) { // ✅ Run only on browser
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startAnimation();
          } else {
            this.stopAnimation();
          }
        });
      }, { threshold: 0.5 });

      this.observer.observe(this.el.nativeElement);
    }
  }

  private startAnimation() {
    this.renderer.removeClass(this.el.nativeElement, 'animate-slide-in');
    void this.el.nativeElement.offsetWidth;
    this.renderer.addClass(this.el.nativeElement, 'animate-slide-in');
  }

  private stopAnimation() {
    this.renderer.removeClass(this.el.nativeElement, 'animate-slide-in');
  }
}
