var data = {
    'projID': '',
    'yy': '',
    'mm': '',
    'dds': [],
    'hrs': '',
    'workin': []
}

const projTypeXPath = '/html/body/center/form/div[2]/label[3]'
const typeInXPath = '/html/body/h3[4]/a'
// const url = 'https://www026190.ccu.edu.tw/pt_proj/index.php'
const url = 'https://cas.ccu.edu.tw/login?service=https%3A%2F%2Fwww026190.ccu.edu.tw%2Fpt_proj%2Findex.php' // 從兼任助理進入單一入口登入的網址
const checkinUrl = 'https://www026190.ccu.edu.tw/pt_proj/frame_stu.php'
const typeInUrl = 'https://www026190.ccu.edu.tw/pt_proj/control2.php'
const printUrl = 'https://www026190.ccu.edu.tw/pt_proj/print_sel.php'

function getData() {

    document.querySelectorAll('.workin').forEach((item) => {
        if (item.checked) {
            data.workin.push(item.value)
        }
    })

    document.querySelectorAll('.projID').forEach((item) => {
        if (item.checked) {
            data.projID = item.value
        }
    })

    document.querySelectorAll('.hrs').forEach((item) => {
        if (item.checked) {
            data.hrs = item.value
        }
    })

    data.yy = document.querySelector('#yy').value

    data.mm = document.querySelector('#mm').value

    document.querySelectorAll('.dd').forEach((item) => {
        if (item.checked && !data.dds.includes(item.value)) {
            data.dds.push(item.value)
        }
    })
}

function getElementByXpath(path, document = document) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}

function randint() {
    return Math.floor(Math.random() * data.workin.length)
}

function exec_a_job(dd, workin) {
    // LOCATING
    typeInFrameDocument = window.frames[1].document

    // 計畫編號
    typeInFrameDocument.getElementsByName('type')[0].value = data.projID
    // getElementByXpath('/html/body/form/center/table/tbody/tr[1]/td/select', typeInFrameDocument).value = data.projID

    // 日期
    typeInFrameDocument.getElementsByName('yy')[0].value = data.yy
    typeInFrameDocument.getElementsByName('mm')[0].value = data.mm
    typeInFrameDocument.getElementsByName('dd')[0].value = dd

    // 時數
    typeInFrameDocument.getElementsByName('hrs')[0].value = data.hrs

    // 內容
    typeInFrameDocument.getElementsByName('workin')[0].value = workin

    // SUBMIT
    typeInFrameDocument.querySelectorAll("input[type='submit']")[0].click()
}

async function job() {
    document.getElementById('ok').innerHTML = 'GO!'
    console.log(config)
}

// TODO:
// 1. 等待可能用 setTimeout('', 3000) 或 setTimeout('console.log("Hello!")', 3000);
// 2. 以其他方法取代 getElementByXpath()
// 3. PAUSE 可能用 alert('XXX') 取代
// 4. Detect alert 可能用自動按下空白鍵去解

