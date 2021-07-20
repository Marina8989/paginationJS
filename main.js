const list_items = [
    'Item1',
    'Item2',
    'Item3',
    'Item4',
    'Item5',
    'Item6',
    'Item7',
    'Item8',
    'Item9',
    'Item10',
    'Item11',
    'Item12',
    'Item13',
    'Item14',
    'Item15',
    'Item16',
    'Item17',
    'Item18',
    'Item19',
    'Item20',
    'Item21',
    'Item22'
]

const list = document.getElementById('list');
const page = document.getElementById('pagination');

let current_page = 2;
let row = 5;

const displayList = (items, wrapper, rows_per_page, page) => {
     wrapper.innerText = '';
     page--;

     let start = page * rows_per_page;
     let end = rows_per_page + (rows_per_page * page);
     let paginatedItem = items.slice(start, end);
     console.log(paginatedItem);

     for(let i = 0 ; i < paginatedItem.length; i++) {
       const div = document.createElement('div');
       div.innerText = paginatedItem[i];
       wrapper.append(div);
     }
}

displayList(list_items, list, row, current_page);