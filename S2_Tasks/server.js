function pingServer() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const online = Math.random() > 0.7;
            if (online) {
                resolve("Server is Online");
            } else {
                reject("Server is Offline");
            } }, 1000);
    });

}

async function checkServer() {
    for(let i=1;i<=5;i++){

        try{
            console.log("Attempt", i);
            const result = await pingServer();
            console.log(result);
            return;
        }

        catch(error){

            console.log(error);

            if(i===5){
                console.log("Server failed after 5 attempts.");
            }
        }
    }
}

checkServer();