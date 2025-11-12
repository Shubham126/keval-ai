'use client';

import { useEffect } from 'react';
import Swal from 'sweetalert2';

/**
 * Component to handle video popups (replaces Magnific Popup)
 * Usage: Add className="video-popup" and data-src="https://youtube.com/embed/..." to elements
 */
export default function VideoPopup() {
  useEffect(() => {
    const videoElements = document.querySelectorAll<HTMLElement>('.video-popup');
    
    videoElements.forEach((element) => {
      const src = element.getAttribute('data-src') || element.getAttribute('href');
      if (!src) return;
      
      element.style.cursor = 'pointer';
      
      element.addEventListener('click', (e) => {
        e.preventDefault();
        
        Swal.fire({
          html: `<iframe width="100%" height="500" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          showCloseButton: true,
          showConfirmButton: false,
          background: 'rgba(0, 0, 0, 0.9)',
          width: '90%',
          padding: '20px',
        });
      });
    });

    return () => {
      videoElements.forEach((element) => {
        element.replaceWith(element.cloneNode(true));
      });
    };
  }, []);

  return null;
}

