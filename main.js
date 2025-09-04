function addPreview(event){
    const divResult = document.querySelector('.result')
    divResult.innerHTML = ""

    const file = event.target.files[0]
    const url = URL.createObjectURL(file)

    const img = document.createElement('img')
    img.src = url
    img.width = 200
    img.height = 200

    divResult.appendChild(img)
    
}

const inputFile = document.querySelector('.inputFile')

inputFile.addEventListener('change', addPreview)

