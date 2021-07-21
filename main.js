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

let current_page = 1;
let row = 5;

const displayList = (items, wrapper, rows_per_page, page) => {
     wrapper.innerHTML = '';
     page--;

     let start = page * rows_per_page;
     let end = rows_per_page + (rows_per_page * page);
     let paginatedItem = items.slice(start, end);
     console.log(paginatedItem);

     for(let i = 0 ; i < paginatedItem.length; i++) {
       const div = document.createElement('div');
       div.classList.add('item');
       div.innerText = paginatedItem[i];
       wrapper.append(div);
     }
}

const displayButton = (items, wrapper, rows_per_page, page) => {
     wrapper.innerHTML = '';

     let btn = Math.ceil(items.length / rows_per_page);
     
     for(let i = 1; i < btn + 1; i++) {
        const button = paginationButton(i, items);
        wrapper.append(button);
     }
     
}

const paginationButton = (page, items) => {
     let button = document.createElement('button');
     button.innerText = page;

     if(current_page == page) {
         button.classList.add('active');
     } 

     button.addEventListener('click', () => {
         current_page = page;
         displayList(items, list, row, current_page);

         let current_btn = document.querySelector('.pageNumber button.active');
         current_btn.classList.remove('active');

         button.classList.add('active');
     })
     return button;
}

displayList(list_items, list, row, current_page);
displayButton(list_items, list, row, current_page);