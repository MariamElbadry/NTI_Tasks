const bookedSlots = ["a1", "b3", "c2"];

function bookAppointment(slot) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bookedSlots.includes(slot)) {
                reject("Slot already booked.");
            } else {
                bookedSlots.push(slot);
                resolve("Appointment booked successfully.");
            } }, 1500);
    });
}

async function book() {

    const slot = document.getElementById("slot").value.toLowerCase();
    try {
        const result = await bookAppointment(slot);
        document.getElementById("result").innerHTML = result;
    }
    catch(error){
        document.getElementById("result").innerHTML = error;
    }

}