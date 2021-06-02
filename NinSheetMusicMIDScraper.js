// This is a script to run in a Chrome console to download all the Midi files from https://www.ninsheetmusic.org
// Go to any page that has the list of files visible, and run this script below in the console.


const midHTMLCollection = document.getElementsByClassName("pseudoImage pseudoImage--midIcon");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const midDownloader = async (midHTMLCollection) => {
	
	for (let i = 0; i < midHTMLCollection.length; i++) {
			let title = document.getElementsByClassName("tableList-cell tableList-cell--sheetTitle")[i].innerText;
			let mid = document.createElement(`a`);

			if (i < midHTMLCollection.length) {
				mid.href = midHTMLCollection[i].href;
				mid.download = `${title}.mid`;
				console.log(`Title: ${mid.download} - Link: ${mid.href}`)
				mid.click()
				await delay(100);
				mid.remove();
			}
		}
};
midDownloader(midHTMLCollection);