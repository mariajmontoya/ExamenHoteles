let HotelId;
let evualuationData = [];



function registerEvaluation(){

    registerEvaluationData(evualuationData, HotelId);
    swal({
        type : 'success',
        title : 'Evaluación exitosa',
        text: 'La evaluación fue recibida',
        confirmButtonText : 'Entendido'
    })
    closeEvaluationModal();
}

function closeEvaluationModal() {
    $("[class*=fa-star]").removeClass('selected-star');
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function openEvaluationModal(hotelInfo) {
    let modal = document.getElementById('myModal');
    let hotelName = document.querySelector('#hotelName');
    hotelName.innerHTML = hotelInfo.hotelName;
    HotelId =  hotelInfo._id;   
    // When the user clicks the button, open the modal 
        modal.style.display = "block";
        let btnRegistryEvaluation = document.querySelector("#evaluationButton");
        btnRegistryEvaluation.addEventListener("click", registerEvaluation); 
        var span = document.getElementsByClassName("close")[0];
        span.addEventListener("click", closeEvaluationModal);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeEvaluationModal();
        }
    }
}

// let activeElement

$(document).ready(function(){
    $(".starContainer").click(function(e) {
        addPoint(e.currentTarget.id, e);
        console.log(e);
    })
});

function addPoint(id, target) {
    separator = "_", // un espacio en blanco
    limit  = 2,
    pointArray = id.split(separator, limit);
    // console.log(pointArray); 

    switch (pointArray[0]) {
        case "food":
            evualuationData[0] = pointArray[1];
            $("[class*=food]").removeClass('selected-star');
            $("." + target.currentTarget.id).addClass('selected-star');
            break;
        case "customerService":
            evualuationData[1] = pointArray[1];
            $("[class*=customerService]").removeClass('selected-star');
            $("." + target.currentTarget.id).addClass('selected-star');
            break;
        case "rooms":
            evualuationData[2] = pointArray[1];
            $("[class*=rooms]").removeClass('selected-star');
            $("." + target.currentTarget.id).addClass('selected-star');
            break;
        case "building":
            evualuationData[3] = pointArray[1];
            $("[class*=building]").removeClass('selected-star');
            $("." + target.currentTarget.id).addClass('selected-star');
            break;
        case "cleaning":
            evualuationData[4] = pointArray[1];
            $("[class*=cleaning]").removeClass('selected-star');
            $("." + target.currentTarget.id).addClass('selected-star');
            break;                                                
    
        default:
            break;
    }
    
}