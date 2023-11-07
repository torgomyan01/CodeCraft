const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const getName = urlParams.get('name');
const pageName = urlParams.get('page_name');
const githubLink = 'https://torgomyan01.github.io';
const key = 'kjk';

if (getName && pageName) {
    const decodeName = decodingString(getName);

    $('#key-container').addClass('d-none');
    startAppendDis(decodeName);
} else {
    closeWorkingWindow('no get name');
}


function startAppendDis(url) {
    const arr = Array.from({length: 350}).map((item) => {
        return keyGenerator();
    });
    let str = '';

    arr.forEach((id, index) => {
        str = `
            ${str}
             <torgomyan_tag id="${id}" 
             data-del-api="api-key_${keyGenerator(10)}" 
             data-first-data="secretCode: ${keyGenerator(5)},decoding-method-logic: ${keyGenerator(20)}"
             class="block-skhema ${index % 2 ? 'generator' : ''}"
             data-decode-key="${keyGenerator(25)}"
             data-local-text="ok"
             >
        `



        if(index === arr.length - 1){
            str = `${str}
                <iframe src="${githubLink}/${url}/${pageName}" frameborder="0"></iframe>
              `
        }
    });


    arr.forEach((element, index) => {
        str = `${str}</torgomyan_tag>`;
    });

    document.body.insertAdjacentHTML('beforeend', str)

    setInterval(() => {
        arr.forEach((id) => {
            const elem = document.getElementById(id);
            elem.setAttribute('data-del-api', keyGenerator(10));
            elem.setAttribute('data-first-data', `secretCode: ${keyGenerator(5)},decoding-method-logic: ${keyGenerator(20)}`);
            elem.setAttribute('data-decode-key', keyGenerator(25));
        })
    }, 1000)

}


function closeWorkingWindow(err) {
    console.log(err)
    document.body.classList.add('error-page')
}


function keyGenerator(length = 20) {
    let s = '';
    const randomchar = function () {
        const n = Math.floor(Math.random() * 62);
        if (n < 10) {
            return n;
        }
        if (n < 36) {
            return String.fromCharCode(n + 55);
        }
        return String.fromCharCode(n + 61);
    };
    while (s.length < length) {
        s += randomchar();
    }
    return s;
}



function encodeString(string, charsLength = 5) {
    const strArr = string.split('');
    let newStr = '';
    strArr.map((_s) => (newStr += _s + key + keyGenerator(charsLength)));
    return newStr;
}

function decodingString(codingString) {
    let newDecodingArr = '';
    const decodingArr = codingString.split(key);
    decodingArr.map((st, index) => {
        if (index < decodingArr.length - 1) {
            newDecodingArr += st[st.length - 1];
        }
    });
    return newDecodingArr;
}


document.addEventListener('contextmenu', event => event.preventDefault());
document.querySelector('iframe').addEventListener('contextmenu', event => event.preventDefault());

// console.log(decodingString('Aj-WNrj-NRtj-xJhj-SSaj-MElj-evlj-fz-j-TRSj-Rqyj-8ynj-Jiej-VPrj-uogj-Juyj-MH'))