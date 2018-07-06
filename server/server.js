var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var teams = [
  {
    id: 1,
    logo: 'http://www.logo-designer.co/wp-content/uploads/2017/01/2017-interbrand-logo-design-juventus-football.png',
    name: 'Juventus',
    country: 'Italie',
    stadium: 'Juventus Stadium',
    coach: 'Allegri',
    founded: 1897,
    nbCup: 5
  },
  {
    id: 2,
    name: 'PSG',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/768px-Paris_Saint-Germain_Logo.svg.png',
    country: 'France',
    stadium: 'Parc des Princes',
    coach: 'Emery',
    founded: 1970,
    nbCup: 2
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/fr/a/aa/Blason_RC_Strasbourg_1976.png',
    name: 'RC Strasbourg',
    country: 'France',
    stadium: 'La Meinau',
    coach: 'Laurent',
    founded: 1902,
    nbCup: 1
  },
  {
    id: 4,
    logo: 'http://www.logo20.com/logo-real-madrid/logo-real-madrid-2.png',
    name: 'Real Madrid',
    country: 'Espagne',
    stadium: 'Santiago Bernabeu',
    coach: 'Zidane',
    founded: 1912,
    nbCup: 6
  },
  {
    id: 5,
    logo: 'http://images.footmercato.net/club/400x400/13089.png',
    name: 'Gomido',
    country: 'Togo',
    stadium: 'Gomido Arena',
    coach: '',
    founded: 1974,
    nbCup: 2
  },
  {
    id: 6,
    logo: 'https://seeklogo.com/images/A/as-roma-60-s-logo-5422998DC3-seeklogo.com.png',
    name: 'AS Roma',
    country: 'Italie',
    stadium: 'Olimpico',
    coach: 'Di Francesco',
    founded: 1899,
    nbCup: 1
  },
];

var players = [
  {
    id: 1,
    picture: '',
    lastname: 'Del Piero',
    firstname: 'Ale',
    current_team: 'Juventus',
    country: 'Italie',
    position: 'Attaquant'
  },
  {
    id: 2,
    picture: '',
    lastname: 'Buffon',
    firstname: 'Gianluigi',
    current_team: 'Juventus',
    country: 'Italie',
    position: 'Gardien'
  },
  {
    id: 3,
    picture: '',
    lastname: 'Areola',
    firstname: 'Alphonse',
    current_team: 'PSG',
    country: 'France',
    position: 'Gardien'
  },
  {
    id: 4,
    picture: '',
    lastname: 'Rabiot',
    firstname: 'Adrien',
    current_team: 'PSG',
    country: 'France',
    position: 'Milieu'
  },
];

var students = [
  {
      id: 1,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Paolo',
      lastname: 'Dybala',
      notes: [13, 5, 7],
      group: 'POEI Java'
    },
    {
      id: 2,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Chris',
      lastname: 'Chris',
      notes: [19, 15, 17],
      group: 'POEI Java'
    },
    {
      id: 3,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Jean-François',
      lastname: 'El Flouz',
      notes: [4, 12, 20],
      group: 'ESD'
    },
    {
      id: 4,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Francesco',
      lastname: 'Tutti Quanti',
      notes: [10, 7, 2],
      group: 'ESD'
    }
]

var books = [
  {
      id: 1,
      author: 'Honoré de Balzac',
      title: 'le père goriot',
      publicationDate: '1834',
      available: true,
      nbPages: 200,
      nbRent: 120
    },
    {
      id: 2,
      author: 'Marcel Proust',
      title: 'À la recherche du temps perdu',
      publicationDate: '1834',
      available: true,
      nbPages: 200,
      nbRent: 120
    },
    {
      id: 3,
      author: 'François Rabelais',
      title: 'Gargantua et Pantagruel',
      publicationDate: '1834',
      available: false,
      nbPages: 200,
      nbRent: 120
    },
    {
      id: 4,
      author: 'Juan Rulfo',
      title: 'Pedro Páramo',
      publicationDate: '1834',
      available: true,
      nbPages: 200,
      nbRent: 120
    },
    
]

// Middlewares
app.use(bodyParser.json()); // le body des requêtes sont parsées (json -> js)
//app.use(express.static('public'));

// Permet les requêtes cross-domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Routes

// get
app.get('/books', (req, res) => res.json(books));


app.get('/authors', (req, res)=> {
  listAuthors=[]
  for(let i=0; i<books.length; i++){
    listAuthors.push(books[i].author);
  }
  return res.json(listAuthors);
});



// Helper functions
function getLastId(arr) {
  var maxId = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].id > maxId) {
      maxId = array[i].id
    }
  }
  return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
