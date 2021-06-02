These are a set of scripts to run in a Chrome console to download files from https://www.ninsheetmusic.org
Go to any page that has the list of files visible, and run this script below in the console.

## Problem: 
	Manually clicking and downloading each file takes too long.

## Solution: 
	- JavaScript to the rescue!
	- Each script will gather the elements by their type (pdf, mus, mid).
	- The function xxxDownloader takes in an argument, the xxxHTMLCollection. It will iterate through each item in the collection, and get the title and href (link). On each iteration, it will create a dom element, add href and download properties to the element, simulate a user click to download the file, wait 100 milliseconds, and then remove the dom element (to make space for the new one.)