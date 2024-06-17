


import { Ui } from "./ui.module.js";

export class Details {
    constructor (id){



        document.getElementById('btnClose').addEventListener("click" , ()=>{

            document.getElementById('gameDetails').classList.add('d-none') ;
            document.getElementById('homeData').classList.remove('d-none') ;
            
            
        }) ;

        this.getDetails(id) ;
       






    }



    async getDetails(id){

        loading.classList.remove('d-none') ;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c1f5ab2de7msh1061a1544a2525bp1f3517jsnaa7ba0b0bc97',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


       const api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` ,options ) ;
       const response = await api.json() ;

       console.log(response);

       loading.classList.add('d-none') ;

       new Ui().displayDetails(response) ;
    }
}