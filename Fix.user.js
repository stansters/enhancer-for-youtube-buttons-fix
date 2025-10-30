// ==UserScript==
// @name         "Enhancer for YouTube" Buttons Fix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix the misaligned "Enhancer for YouTube" buttons for the new YouTube UI update
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';

    // Add CSS fixes
    const style = document.createElement('style');
    style.textContent = `
        /* Fix button container alignment */
        #ytp-efyt-controls {
            display: inline-flex !important;
            align-items: center !important;
            height: 100% !important;
        }

        /* Fix individual button alignment and size */
        .ytp-efyt-button,
        #efyt-controls-button {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 48px !important;
            min-height: 48px !important;
        }

        /* Fix SVG sizing - need to override inline styles */
        .ytp-efyt-button svg,
        #efyt-controls-button svg {
            min-width: 36px !important;
            min-height: 36px !important;
            max-width: 36px !important;
            max-height: 36px !important;
        }
    `;

    // Insert as early as possible
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.head.appendChild(style);
        });
    }
})();