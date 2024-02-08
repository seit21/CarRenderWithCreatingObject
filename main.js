const cars=[
    {
      name:'BMW',
      model: 'X6',
      price: 200,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'tesla',
      model: 'm2332',
      price: 400,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'lastetti',
      model: '23X6',
      price: 450,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'audi',
      model: '124rfsd',
      price: 330,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'malibu',
      model: '3ewfre',
      price: 240,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'ferrari',
      model: 'tyr',
      price: 500,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'wolsvagen',
      model: 'dr324',
      price: 210,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'xamer',
      model: 'ae32',
      price: 600,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    },
    {
      name:'teslaPro',
      model: '21eX6',
      price: 450,
      image:'https://o.aolcdn.com/images/dims3/GLOB/crop/3494x1966+301+302/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/12171547/IMG_5385.jpg'
    }
]

const main= document.querySelector('.row')
 for (const element of cars) {
    const newElemet=document.createElement('div')

    newElemet.innerHTML= `
    <div class="card" style="width: 18rem;">
  <img src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.model}</p>
    <span> Narxi:${element.price} </span>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
    newElemet.classList.add('col-lg-4');
    main.appendChild(newElemet)
 }

 const carsTotalPrice = cars.reduce((total, moshina) => total + moshina.price, 0);

const totalPriceElement = document.createElement('div');
totalPriceElement.innerHTML = `<h2> Moshinalarning umumiy narxi: ${carsTotalPrice}</h2>`;

document.body.prepend(totalPriceElement);
