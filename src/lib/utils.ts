import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(e: React.MouseEvent | null, id: string) {
  if (e) e.preventDefault();
  
  // Find the scroll element managed by R3F ScrollControls
  const scrollContainer = document.querySelector('.scroll-container');
  const scrollEl = scrollContainer?.parentElement;
  
  if (scrollEl) {
    if (id === 'home') {
      scrollEl.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.getElementById(id);
      if (target) {
        // Calculate offsetTop relative to the scroll container's inner content
        // In R3F Scroll, the target is inside the .scroll-container
        const scrollPosition = target.offsetTop - 80;
        scrollEl.scrollTo({ 
          top: scrollPosition, 
          behavior: 'smooth' 
        });
      }
    }
  }
}
