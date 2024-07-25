const purchases = [
    { brand: 'Adidas', date: '2024-06-11', item: 'Shoes' },
    { brand: 'Puma', date: '2024-06-12', item: 'T-Shirt' },
    { brand: 'Nike', date: '2024-06-03', item: 'Jacket' },
    { brand: 'Adidas', date: '2024-06-04', item: 'Hat' },
    { brand: 'Puma', date: '2024-06-05', item: 'Shorts' },
    { brand: 'Adidas', date: '2024-06-06', item: 'Socks' },
    { brand: 'Lewis', date: '2024-06-06', item: 'skirt' }
  ];
  //Set(4) { 'Shoes', 'T-Shirt', 'Jacket', 'skirt' }
let brands=[];
let res={};
  for(let i of purchases){
    if(!brands.includes(i.brand)){
        brands.push(i.brand)
        res[i.brand]=i
    }else if( new Date(res[i.brand].date)< new Date(i.date)){
        res[i.brand]=i;
    }
  }

  let final= new Set();

  for(let j of Object.values(res)){
    final.add(j.item)
  }

  console.log(final)


  // 2nd and optimistic approach
  const purchases = [
    { brand: 'Adidas', date: '2024-06-11', item: 'Shoes' },
    { brand: 'Puma', date: '2024-06-12', item: 'T-Shirt' },
    { brand: 'Nike', date: '2024-06-03', item: 'Jacket' },
    { brand: 'Adidas', date: '2024-06-04', item: 'Hat' },
    { brand: 'Puma', date: '2024-06-05', item: 'Shorts' },
    { brand: 'Adidas', date: '2024-06-06', item: 'Socks' },
    { brand: 'Lewis', date: '2024-06-06', item: 'skirt' }
  ];
  //Set(4) { 'Shoes', 'T-Shirt', 'Jacket', 'skirt' }
let res={};
  for(let i of purchases){
   if(!res[i.brand]|| new Date(res[i.brand].date)< new Date(i.date)){
        res[i.brand]=i;
    }
  }

  let final= new Set();

  for(let j of Object.values(res)){
    final.add(j.item)
  }

  console.log(final)