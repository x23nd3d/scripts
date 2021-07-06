document.getElementById('search').addEventListener('click', switchInput);


function switchInput() {
    let menu = document.getElementById('navbar-menu');
    menu.insertBefore(createCross(), this);
    menu.insertBefore(createInput(), this);
    document.getElementById('search-input').focus();
    this.removeEventListener('click', switchInput);
//    this.addEventListener('click', getInf);
}

function createCross() {
    let cross = document.createElement('i');
    cross.id = 'cross';
    cross.className = 'fas fa-times';
    cross.style.color = "#b8b8b8";
    cross.style.margin = '0 10px';
    cross.addEventListener('mouseover', function () {
        this.style.color = '#18cfab';
    });
    cross.addEventListener('mouseout', function () {
        this.style.color = '#b8b8b8';
    });
    cross.addEventListener('click', deleteInput);
    return cross;
}

function createInput() {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Search');
    input.id = 'search-input';
    input.style.backgroundColor = 'transparent';
    input.style.width = '150px';
    input.style.color = '#e8e8e8';
    input.style.padding = '3px 10px';
    input.style.outline = 'none';
    input.style.border = '1px solid #b8b8b8';
    input.style.boxShadow = '0 0 3px #b8b8b8';
    input.style.borderRadius = '10px';
    input.style.fontFamily = "Montserrat', sans-serif";
    input.style.fontSize = '12px';
    input.style.marginRight = '-10px';
    input.style.transition = '0.5s';
    return input;
}

function deleteInput() {
    document.getElementById('search-input').remove();
    document.getElementById('cross').remove();
//    document.getElementById('search').removeEventListener('click', getInf);
    document.getElementById('search').addEventListener('click', switchInput);
}

//function getInf() {
//    let textToFind = document.getElementById('search-input').value;
//    findString(textToFind);
//}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        document.getElementById('search').click();
    } else if (event.keyCode == 27) {
        document.getElementById('cross').click();
    }
});

/*_____SEARCH_____*/

//let TRange = null;
//
//function findString (str) {
//    if ((parseInt(navigator.appVersion)<4) || !(/\S/.test(str))) {
//       return; 
//    }
//    let strFound;
//    if (window.find) {
//        strFound=self.find(str);
//        if (!strFound) {
//            strFound=self.find(str,0,1);
//            while (self.find(str,0,1)) continue;
//        }
//    }
//    if (!strFound) {
//        alert ("Nothing found by request");
//    }
//    return;
//}