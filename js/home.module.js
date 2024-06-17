import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";



export class Home {


    constructor (){


        this.ui = new Ui();
        this.getGames('MMORPG') ;
        this.homeData = document.getElementById('homeData') ;
       this.gameDetails = document.getElementById('gameDetails') ;


        document.querySelectorAll('.nav-link').forEach(  (link)=> {

            link.addEventListener('click' ,  ()=> {

                // ===== Calling changeActiveLink Mehod =====
                this.changeActiveLink(link) ;

                 // ===== get current link =====
                const category = link.getAttribute('data-category') ;

                // ===== Calling (API) =====
                this.getGames(category) ;
            }) ;

        } ) ;

    }



    // ===== Method to remove active link and adding current link =====

    changeActiveLink(link){

        document.querySelector('.navbar-nav .active').classList.remove('active') ;
        link.classList.add ('active') ;

    }



    // ===== Method to getGames (API) =====

   async  getGames(cat) {
    

    const loading = document.querySelector('#loading') ;
    loading.classList.remove('d-none') ;

    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c1f5ab2de7msh1061a1544a2525bp1f3517jsnaa7ba0b0bc97',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
   

   const api =  await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , options ) ;

   const response = await api.json() ;

   console.log(response)


   loading.classList.add('d-none') ;

   this.ui.displayGames(response) ;

   document.querySelectorAll('.cards').forEach( (cards)=>{

    cards.addEventListener('click' , ()=>{

        this.gameDetails.classList.remove('d-none') ;
        this.homeData.classList.add('d-none') ;

         new Details(cards.dataset.id) ;
    })

   })



    }




}