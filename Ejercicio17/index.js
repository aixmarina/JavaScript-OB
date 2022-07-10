let marker, map

function initMap() {
    const mi_pueblo = {
        lat: 38.17639336338888,
        lng: -0.8666844735294617
    }
    const elsinor = {
        lat: 56.03960359759435,
        lng: 12.621877986310786
    }

    const lago_finlandia = {
        lat: 60.31441405208015,
        lng: 24.6895295781198
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: mi_pueblo
    })

    marker = new google.maps.Marker({
        position: mi_pueblo,
        map,
        title: "Mi pueblo"
    })

    marker = new google.maps.Marker({
        position: elsinor,
        map,
        title: "Elsinor"
    })

    marker = new google.maps.Marker({
        position: lago_finlandia,
        map,
        title: "Lago"
    })
}

