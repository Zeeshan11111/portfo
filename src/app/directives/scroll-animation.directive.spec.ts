import { ScrollAnimationDirective } from './scroll-animation.directive';
import { ElementRef, Renderer2, NgZone } from '@angular/core';

describe('ScrollAnimationDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;
  let ngZone: NgZone;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div')); // Mock ElementRef
    renderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']); // Mock Renderer2
    ngZone = jasmine.createSpyObj('NgZone', ['run']); // Mock NgZone
  });

  it('should create an instance', () => {
    const directive = new ScrollAnimationDirective(elementRef, renderer, ngZone);
    expect(directive).toBeTruthy();
  });
});
