//
export class API {
   constructor(artist, track) {
      this.artist = artist;
      this.track = track;
      
   }

   async consultAPI(spinner, showMessageFunction, form){
      //Show spinner
      spinner.style.display = "block";
      const response = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.track}`);

      //Hide spinner
      spinner.style.display = "none";

      const lyricsResult =  await response.json();

      return lyricsResult;
   }
   
}