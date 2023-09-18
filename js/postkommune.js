console.log("jeg er i postkommune")

const pbpostKommune = document.getElementById("pbPostKommune")
const pbPutKommune = document.getElementById("pbPutKommune")

const inputKode = document.getElementById("inpKode")
const inputName = document.getElementById("inpName")
const inputHref = document.getElementById("inpHref")
const inputRegionKode = document.getElementById("inpRegionKode")

const kommuneUrl = "http://localhost:8080/kommune"

function getKommune() {
    const kommune = {}
    kommune.kode = inputKode.value
    kommune.navn = inputName.value
    kommune.href = inputHref.value
    kommune.region = {}
    kommune.region.kode = inputRegionKode.value

    console.log(kommune)
    return kommune
}

async function postKommune() {
    const kommune = getKommune()
    const res = await postObjectAsJson(kommuneUrl, kommune, "POST")
    if (res.ok) {
        alert("Kommune saved")
    }
}

async function putKommune() {
    const kommune = getKommune()
    const putUrl = kommuneUrl + "/" + kommune.kode
    console.log(putUrl)
    const res = await postObjectAsJson(putUrl, kommune, "PUT")
    if (res.ok) {
        alert("Kommune updated")
    }
}

async function postObjectAsJson(url, kommune, httpVerbum) {
    const objectAsJsonString = JSON.stringify(kommune)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": "application/json"
        },
        body: objectAsJsonString
    }
    const response = await fetch(url, fetchOptions)
    return response
}

function actionPostKommune() {
    postKommune()
}

function actionPutKommune() {
    putKommune()
}

pbpostKommune.addEventListener("click", actionPostKommune)
pbPutKommune.addEventListener("click", actionPutKommune)