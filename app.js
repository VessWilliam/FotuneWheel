const fontuneForm = document.getElementById("fortuneForm");
const oneInput = fontuneForm['one']
const twoInput = fontuneForm['two']
const threeInput = fontuneForm['three']
const fourInput = fontuneForm['four']
const fiveInput = fontuneForm['five']
const sixInput = fontuneForm['six']


let choice =[]

const addChoice =( one,two,three,four,five,six) =>{ 
    choice.push({
        one,
        two,
        three,
        four,
        five,
        six
    })
    localStorage.setItem("Choice" , JSON.stringify(choice))
}

fontuneForm.onsubmit = async e =>{
    e.preventDefault()
     
    await addChoice(
        oneInput.value,
        twoInput.value,
        threeInput.value,
        fourInput.value,
        fiveInput.value,
        sixInput.value
    )

    oneInput.value = ""
    twoInput.value = ""
    threeInput.value = ""
    fourInput.value = ""
    fiveInput.value = ""
    sixInput.value = ""
    window.location.assign("fortune.html")
}