
function initMap() {

    const posiciones = [
        {
            lat: -1.492124852955771,
            lng: -80.79262237851009
        },
        {
            lat: 48.85923197240898, 
            lng: 2.294533824627933
        },
        {
            lat: 31.763123243038976, 
            lng: 35.05097946832072
        }
    ]
    

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posiciones[0]
    })
    
    for (let i = 0; i < posiciones.length; i++) {
        const marker = new google.maps.Marker({
            position: posiciones[i],
            map,
            title: "posicion inicial"
        })
        
    }
    

}


