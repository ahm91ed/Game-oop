export class Ui {
    constructor (){}

    displayGames(data){

        let gamesBox = "" ;

        for ( let i = 0 ; i< data.length ; i ++){

            gamesBox += `

            <div class="cards col-lg-4" data-id="${data[i].id}">
            <div  class="rounded-2 border border-dark h-100">

              <div class="p-3">
                <figure class="section-image position-relative ">
                  <img src="${data[i].thumbnail}" class="w-100 rounded-2 ">
                  <div class="hidden-layer position-absolute top-0 bottom-0 start-0 end-0 rounded-2">

                  </div>
                </figure>
                  
                  <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
                      <h6> ${data[i].title.split('',15).splice('').join('' , 15)  }</h6>
                      <a href='${data[i].game_url}' target='_blank' class="btn btn-outline-primary btn-sm">Free</a>
                  </div>
                  <p class="text-center mt-3">${data[i].short_description.split('',50).splice('').join('',50)  }</p>
              </div>

            <div class="h-line bg-dark w-100">
            </div>

              <footer class="d-flex justify-content-between align-items-center mt-2 mb-2 ps-3 pe-3">
                <span class="btn btn-secondary btn-sm pt-0 pb-0">${data[i].genre}</span>
                <span class="btn btn-secondary btn-sm pt-0 pb-0">${data[i].platform}</span>
              </footer>


            </div>
        </div>
            
            
            
            `

        }

        document.getElementById('gameData').innerHTML = gamesBox ;

    } ;


    displayDetails(data){


    let  detailBox = 
      `      <div class="col-md-4 text-white">
      <div>
        <img src="${data.thumbnail}" class="w-100" />
      </div>
    </div>

    <div class="col-md-8 text-white">
      <div>
        <h6>Title : ${data.title}</h6>
        <h6>Category : <span class="btn btn-info p-0">${data.genre}</span></h6>
        <h6>Platform : <span class="btn btn-info p-0">${data.platform}</span></h6>
        <h6>Status : <span class="btn btn-info p-0">Live</${data.status}></h6>
        <p class="small">
        ${data.description}
        </p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}"
          >Show Game</a
        >
      </div>
    </div>`

    document.getElementById('detailsContent').innerHTML = detailBox ;


    }
}