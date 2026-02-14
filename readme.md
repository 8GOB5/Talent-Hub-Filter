# Talent Hub Filter

A lightweight Tampermonkey userscript that hides asset sale posts on
Roblox Talent Hub so you can focus on hiring opportunities.

## Overview

Talent Hub is primarily used for connecting developers with hiring
opportunities. This script automatically hides posts that appear to be
asset sales (e.g. listings containing "selling" or "sale" in the title).

The script runs entirely client-side and only affects what you see in
your own browser.

## Features

-   Automatic filtering on page load
-   Real-time detection of newly loaded listings
-   Lightweight and minimal performance impact
-   Open source and easy to modify
-   Works only on:
    `https://create.roblox.com/talent/`

## How It Works

The script:

-   Scans job cards on the page
-   Checks their titles for specific keywords
-   Hides matching listings
-   Uses a `MutationObserver` to detect dynamically loaded content
-   Avoids reprocessing already scanned elements

By default, the script filters posts containing:

``` js
['selling', 'sale']
```

You can customize this list in the script if you want to expand or
narrow the filtering behavior.

## Installation

1.  Install Tampermonkey for your browser (Chrome / Edge / Firefox
    supported)\
2.  Install the userscript by creating a new script and pasting the
    code\
3.  Visit:\
    `https://create.roblox.com/talent`

Filtered listings will automatically be hidden.

## Customization

To change what gets filtered, modify:

``` js
const filterKeywords = ['selling', 'sale'];
```

You can add additional terms such as:

``` js
['selling', 'sale', 'for purchase', 'asset pack']
```

Filtering is case-insensitive.

## Disclaimer

-   This script is entirely client-side.
-   It does not modify Roblox servers or platform data.
-   It simply hides elements in your local browser view.
-   Use at your own discretion.

## Contributing

Pull requests and suggestions are welcome.
Feel free to fork and extend the filtering logic.
Also, starring this repository would be appreciated.

## License

This project is licensed under the MIT License.
