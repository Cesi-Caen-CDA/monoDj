window.addEventListener("load", getAllBooking, false);

function Booking() {
    console.log("On enregistre la nouvelle réservation");
    // var formulaire = document.querySelector('#reservationForm');
    // Object.values(formulaire).reduce((obj, field) => {
    //     obj[field.name] = field.value;
    //     console.log(field.name)
    //     return obj;
    // }, {});
}

function getAllBooking() {
    try {

        console.log("On appelle toutes les réservations");
    } catch (error) {
        console.log(`Une erreur a été levée: ${error}`);
    }

}