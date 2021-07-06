
let img = function () {
    return  this.name.split(' ').join('-').toLowerCase() + '.jpg';
}

let feedbacks = {
    client_1: {
        name: 'Artemii Lebedev',
        position: 'SEO',
        img:img
    }

}


console.log(feedbacks);