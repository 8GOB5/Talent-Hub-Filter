// ==UserScript==
// @name         Talent Hub Filter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Talent Hub is for getting hired, not selling some crappy system made with AI. This script will automatically filter out that garbage for you!
// @author       gobluau
// @match        https://create.roblox.com/talent/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const filterKeywords = ['selling', 'sale'];
    const processedCards = new WeakSet();

    function containsFilterKeyword(text) {
        if (!text) return false;
        const lowerText = text.toLowerCase();
        return filterKeywords.some(keyword => lowerText.includes(keyword));
    }

    function filterListings() {
        const jobCards = document.querySelectorAll('[data-testid^="jobcard-"]');

        jobCards.forEach(card => {
            if (processedCards.has(card)) {
                return;
            }

            const titleLink = card.querySelector('a[data-testid*="-anchor-title"]');

            if (titleLink) {
                const titleText = titleLink.textContent || titleLink.innerText;

                if (containsFilterKeyword(titleText)) {
                    card.style.display = 'none';
                }

                processedCards.add(card);
            }
        });
    }

    setTimeout(filterListings, 1500);

    let isProcessing = false;
    const observer = new MutationObserver((mutations) => {
        if (!isProcessing) {
            isProcessing = true;
            setTimeout(() => {
                filterListings();
                isProcessing = false;
            }, 500);
        }
    });

    const targetNode = document.body;
    if (targetNode) {
        observer.observe(targetNode, {
            childList: true,
            subtree: true
        });
    }

    setInterval(() => {
        if (!isProcessing) {
            filterListings();
        }
    }, 5000);
})();
