// ==UserScript==
// @name         "Enhancer for YouTube" Buttons Fix
// @namespace    https://github.com/stansters/enhancer-for-youtube-buttons-fix
// @version      1.0.2
// @description  Fix the misaligned "Enhancer for YouTube" buttons for the new YouTube UI update
// @author       stansters
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-start
// @license      MIT
//
// @updateURL    https://github.com/stansters/enhancer-for-youtube-buttons-fix/raw/refs/heads/main/Fix.user.js
// @downloadURL  https://github.com/stansters/enhancer-for-youtube-buttons-fix/raw/refs/heads/main/Fix.user.js
//
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
            min-width: 48px !important;
            min-height: 48px !important;
            max-width: 48px !important;
            max-height: 48px !important;
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
