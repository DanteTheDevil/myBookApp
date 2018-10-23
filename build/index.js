const books = new Map();
books.set('Jewels of Nizam',{author: 'Geeta Devi', rate: 5});
books.set('Cakes & Bakes',{author: 'Sanjeev Kapoor', rate: 5});
books.set('Jamie\'s Kitchen',{author: 'Jamie Oliver', rate: 4});
books.set('Inexpensive Family Meals',{author: 'Simon Holst', rate: 4});
books.set('Paleo Slow Cooking',{author: 'Chrissy Gower', rate: 4});
books.set('Cook Like an Italian',{author: 'Tobie Puttock', rate: 4});
books.set('Suneeta Vaswani',{author: 'Geeta Devi', rate: 5});
books.set('Jamie Does',{author: 'Jamie Oliver', rate: 4});
books.set('Jamie\'s italy',{author: 'Jamie Oliver', rate: 5});
books.set('Vegetables Cookbook',{author: 'Matthew Biggs', rate: 3});
const contentObject = document.getElementsByClassName('container__content')[0];

for(let book of books) {
  const newBook = document.createElement('li');
  const img = document.createElement('img');
  const title = document.createElement('span');
  const author = document.createElement('span');
  const rate = document.createElement('ul');
  const authorName = book[1].author;
  const rateNumber = book[1].rate;

  img.setAttribute('src', `./images/${book[0]}.png`);
  title.innerHTML = `<b>${book[0]}</b>`;
  title.className = 'container__content__book-name';
  author.innerHTML = `by ${authorName}`;
  author.className = 'container__content__book-author';
  rate.className = 'container__content__book-rate';
  for (let i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.innerHTML = '<i class="far fa-star"></i>';
    rate.append(li);
  }
  for (let i = 0; i < rateNumber; i++) {
    rate.children[i].innerHTML = '<i class="fas fa-star"></i>';
  }
  newBook.append(img, title, author, rate);
  contentObject.append(newBook);
}
