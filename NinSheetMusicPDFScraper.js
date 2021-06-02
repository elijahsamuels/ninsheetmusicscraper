// This is a script to run in a Chrome console to download all the PDFs from https://www.ninsheetmusic.org
// Go to any page that has the list of files visible, and run this script below in the console.

const pdfHTMLCollection = document.getElementsByClassName("tableList-buttonCell tableList-buttonCell--sheetPdf js-sheetOptions-copy");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const pdfDownloader = async (pdfHTMLCollection) => {
	
	for (let i = 0; i < pdfHTMLCollection.length; i++) {
			let title = document.getElementsByClassName("tableList-cell tableList-cell--sheetTitle")[i].innerText;
			let pdf = document.createElement(`a`);

			if (i < pdfHTMLCollection.length) {
				pdf.href = pdfHTMLCollection[i].href;
				pdf.download = `${title}.pdf`;
				console.log(`Title: ${pdf.download} - Link: ${pdf.href}`)
				pdf.click()
				await delay(100);
				pdf.remove();
			}
		}
};
pdfDownloader(pdfHTMLCollection);

				