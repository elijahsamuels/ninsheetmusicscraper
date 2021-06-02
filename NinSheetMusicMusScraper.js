// This is a script to run in a Chrome console to download all the .Mus (Finale) files from https://www.ninsheetmusic.org
// Go to any page that has the list of files visible, and run this script below in the console.


const musHTMLCollection = document.getElementsByClassName("pseudoImage pseudoImage--finaleLogo");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const musDownloader = async (musHTMLCollection) => {
	
	for (let i = 0; i < musHTMLCollection.length; i++) {
			let title = document.getElementsByClassName("tableList-cell tableList-cell--sheetTitle")[i].innerText;
			let mus = document.createElement(`a`);

			if (i < musHTMLCollection.length) {
				mus.href = musHTMLCollection[i].href;
				mus.download = `${title}.mus`;
				console.log(`Title: ${mus.download} - Link: ${mus.href}`)
				mus.click()
				await delay(100);
				mus.remove();
			}
		}
};
musDownloader(musHTMLCollection);
