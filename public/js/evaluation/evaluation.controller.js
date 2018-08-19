let HotelId;
let evualuationData = [];

function registerEvaluation(){

    registerEvaluationData(evualuationData);
    swal({
        type : 'success',
        title : 'Evaluación exitosa',
        text: 'La evaluación fue recibida',
        confirmButtonText : 'Entendido'
    })
    closeEvaluationModal();
}

function closeEvaluationModal() {
    document.querySelector("#evaluationContainer").classList.add("hide");
}

function openEvaluationModal() {
    document.querySelector("#evaluationContainer").classList.remove("hide");
}

// let activeElement

$(document).ready(function(){
    $(".starContainer").click(function(e) {
        addPoint(e.currentTarget.id, e);
        // e.addClass("selected-star");
        // $(".fa-star").removeClass('selected-star');
        // $("#" + e.currentTarget.id).addClass('selected-star');
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