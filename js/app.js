import * as UI from "./ui.js";
import { API } from "./api.js";

UI.searchForm.addEventListener('submit', (e)=>{
   e.preventDefault();

   //get inputs value of form
   const artistInput = document.getElementById("artist-name").value,
         trackInput = document.getElementById("track-name").value;
   
   if(artistInput === '' || trackInput === ''){
      UI.showMessage('Ops! all fields are required');
   }else{
      //get lyrics music from the api
      const api = new API(artistInput, trackInput);

      //if teh API doesn't respond
      const timer = setTimeout(() => {
         UI.spiner.style.display = "none";
         UI.showMessage('Sorry, artist or track no exist :(, try with another');
         UI.searchForm.reset();
      }, 10000);

      //consult the API
      api.consultAPI(UI.spiner)
         .then(data=>{
            //if the API respond, stop setTimeuot
            clearTimeout(timer);

            //show lyrics in the web site
            console.log(data.lyrics);
            UI.lyric.textContent = data.lyrics;
         })
   }
})