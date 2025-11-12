'use client';

import { useEffect } from 'react';
import Swal from 'sweetalert2';

/**
 * Component to handle image popups (replaces Magnific Popup)
 * Usage: Add className="img-popup" and data-src="/path/to/image.jpg" to img tags
 */
export default function ImagePopup() {
  useEffect(() => {
    const imageElements = document.querySelectorAll<HTMLImageElement>('.img-popup');
    
    imageElements.forEach((img) => {
      const src = img.getAttribute('data-src') || img.src;
      const gallery = img.closest('.gallery') !== null;
      
      img.style.cursor = 'pointer';
      
      img.addEventListener('click', () => {
        Swal.fire({
          imageUrl: src,
          imageAlt: img.alt || 'Image',
          showCloseButton: true,
          showConfirmButton: false,
          background: 'rgba(0, 0, 0, 0.9)',
          width: '90%',
          padding: '0',
        });
      });
    });

    return () => {
      imageElements.forEach((img) => {
        img.replaceWith(img.cloneNode(true));
      });
    };
  }, []);

  return null;
}

