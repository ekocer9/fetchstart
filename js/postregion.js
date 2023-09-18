console.log("jeg er i postregion")

const pbpostRegion = document.getElementById("pbPostRegion")
const pbPutRegion = document.getElementById("pbPutRegion")

const inputKode = document.getElementById("inpKode")
const inputName = document.getElementById("inpName")
const inputHref = document.getElementById("inpHref")

const regionUrl = "http://localhost:8080/region"

function getRegion() {
    const region = {}
    region.kode = inputKode.value
    region.navn = inputName.value
    region.href = inputHref.value
    console.log(region)
    return region
}

async function postRegion() {
    const region = getRegion()
    const res = await postObjectAsJson(regionUrl, region, "POST")
    if (res.ok) {
        alert("Region saved")
    }
}

async function putRegion() {
    const region = getRegion()
    const putUrl = regionUrl + "/" + region.kode
    console.log(putUrl)
    const res = await postObjectAsJson(putUrl, region, "PUT")
    if (res.ok) {
        alert("Region updated")
    }
}

async function postObjectAsJson(url, region, httpVerbum) {
    const objectAsJsonString = JSON.stringify(region)
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

function actionPostRegion() {
    postRegion()
}

function actionPutRegion() {
    putRegion()
}

pbpostRegion.addEventListener("click", actionPostRegion)
pbPutRegion.addEventListener("click", actionPutRegion)