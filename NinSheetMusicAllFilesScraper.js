// This is a script to run in a Chrome console to download all files from https://www.ninsheetmusic.org
// Go to any page that has the list of files visible, and run this script below in the console.


const midHTMLCollection = document.getElementsByClassName("pseudoImage pseudoImage--midIcon");
const pdfHTMLCollection = document.getElementsByClassName("tableList-buttonCell tableList-buttonCell--sheetPdf js-sheetOptions-copy");
const musHTMLCollection = document.getElementsByClassName("pseudoImage pseudoImage--finaleLogo");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const fileDownloader = async (pdfHTMLCollection, midHTMLCollection, musHTMLCollection) => {
	
	for (let i = 0; i < midHTMLCollection.length; i++) {
			let title = document.getElementsByClassName("tableList-cell tableList-cell--sheetTitle")[i].innerText;
			let pdf = document.createElement(`a`);
			let mid = document.createElement(`a`);
			let mus = document.createElement(`a`);

			if (i < midHTMLCollection.length) {
				pdf.href = pdfHTMLCollection[i].href;
				pdf.download = `${title}.pdf`;
				mid.href = midHTMLCollection[i].href;
				mid.download = `${title}.mid`;
				mus.href = musHTMLCollection[i].href;
				mus.download = `${title}.mus`;

				console.log(`Title: ${pdf.download} - Link: ${pdf.href}`)
				console.log(`Title: ${mid.download} - Link: ${mid.href}`)
				console.log(`Title: ${mus.download} - Link: ${mus.href}`)
				pdf.click()
				mid.click()
				mus.click()
				await delay(100);
				pdf.remove();
				mid.remove();
				mus.remove();

			}
		}
};
fileDownloader(pdfHTMLCollection, midHTMLCollection, musHTMLCollection);
