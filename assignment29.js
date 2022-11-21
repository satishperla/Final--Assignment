var library = [  
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
    ]; 
 
function sort_by_author(a, b) {
    if (a.author < b.author) {
        return -1;
    }
    if (a.author > b.author) {
        return 1;
    }
    return 0;
}

function sort_by_title(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}
function sort_by_id(a, b) {
    if (a.libraryID < b.libraryID) {
        return -1;
    }
    if (a.libraryID > b.libraryID) {
        return 1;
    }
    return 0;
}




console.log(library.sort(sort_by_author));
console.log(library.sort(sort_by_title));
console.log(library.sort(sort_by_id));
