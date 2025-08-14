const today = new Date()

function initUI() {
    loadYearAndMonth()
    createDatesBtn()
}


function loadYearAndMonth() {
    document.getElementById("yy").value = today.getFullYear() - 1911;
    document.getElementById("mm").value = today.getMonth() + 1;
}


function createDatesBtn() {
    let yy = document.getElementById('yy').value
    let mm = document.getElementById('mm').value
    yy = parseInt(yy) + 1911
    mm = parseInt(mm) - 1   // monthIndex, beginning with 0 for January to 11 for December.

    const firstDay = new Date(yy, mm, 1)
    const lastDay = new Date(yy, mm + 1, 0)  // the pevious day of next month
    const days = lastDay.getDate()
    const weekdays = firstDay.getDay()

    // Prepare inserted tags
    let allDates = ""
    let tagInput = document.createElement("input")
    tagInput.setAttribute("type", "checkbox")
    tagInput.setAttribute("class", "btn-check dd")
    let tagLabel = document.createElement("label")
    tagLabel.setAttribute("class", "btn btn-outline-primary m-rb8")

    // Add blank dates as placeholder
    tagLabel.setAttribute("style", 'visibility:hidden')
    tagLabel.innerHTML = "00"
    if (2 <= weekdays && weekdays <= 5) {
        allDates += tagLabel.outerHTML.repeat(weekdays - 1)
    }
    tagLabel.removeAttribute('style')

    // Add each date
    for (let i = 1; i <= days; i++) {
        const dd = new Date(yy, mm, i)
        if (dd.getDay() != 6 && dd.getDay() != 0) {
            eleID = "btncheckDate" + i

            // tagInput
            tagInput.setAttribute("id", eleID)
            tagInput.setAttribute("value", i)
            if (dd < today) {
                tagInput.setAttribute("checked", "")
            }
            else { tagInput.removeAttribute("checked") }

            // tagLabel
            tagLabel.setAttribute("for", eleID)
            tagLabel.innerHTML = (dd.getDate() < 10) ? ("0" + dd.getDate()) : (dd.getDate())

            // allDates
            allDates += tagInput.outerHTML
            allDates += tagLabel.outerHTML
        }
        else {
            allDates += "<br>"
        }
    }

    // Clear beginning and duplicate <br>
    while (allDates.startsWith("<br>")) {
        allDates = allDates.substring("<br>".length)
    }
    allDates = allDates.replaceAll('<br><br>', '<br>')

    // Insert tags
    document.getElementById("dates").innerHTML = allDates
}


// TODO
// $ = number
// $$ = text
// checked
const elementTemplate = {
    "workin": {
        "input": {
            "type": "checkbox",
            "class": "btn-check workin",
            "id": "btncheckWork$",
            "autocomplete": "off",
            "value": "$$",
        },
        "label":{
            "class": "btn btn-outline-primary m-r8",
            "for": "btncheckWork$",
        }
    },
    "projID": {
        "input": {
            "type": "radio",
            "class": "btn-check projID",
            "name": "btnradioproj",
            "id": "btnradioproj$",
            "autocomplete": "off",
            "value": "$$",
        },
        "label":{
            "class": "btn btn-outline-primary m-r8",
            "for": "btnradioproj$",
        }
    },
    "hrs": {
        "input": {
            "type": "radio",
            "class": "btn-check hrs",
            "name": "btnradiohrs",
            "id": "btnradiohrs$",
            "autocomplete": "off",
            "value": "$$",
        },
        "label":{
            "class": "btn btn-outline-primary m-r8",
            "for": "btnradiohrs$",
        }
    }
}
