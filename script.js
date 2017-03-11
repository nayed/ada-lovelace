const endpoint = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=Ada%20Lovelace&redirects=true&origin=*"

const content = document.querySelector(".content")

const row = document.createElement("div")
row.className = "row"
content.appendChild(row)

const leftText = document.createElement("div")
leftText.className = "one-half column"
leftText.innerHTML = "A gauche"

const rightText = document.createElement("div")
rightText.className = "one-half column"
rightText.innerHTML = "A droite"

row.appendChild(leftText)
row.appendChild(rightText)

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => {
    leftText.innerHTML = `${data.query.pages[974].extract.substring(0, 1400)}`
    rightText.innerHTML = `${data.query.pages[974].extract.substring(1400, 2800)}...`
  })
