require('dotenv').config()

const mongoose = require('mongoose')
const database = require('../models')

const MONGODB_URI =
  process.env.MONGODB_URI_ADMIN || 'mongodb://localhost/dev_portfolio_db'

const projects = [
  {
    title: 'Canine Hangman',
    url: 'https://christopherzenner.dev/fsf-a03/',
    repo: 'https://github.com/icn2you/fsf-a03',
    imagePath: './static/media/word-guess-sprite.0d6088ba.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['jQuery'],
    completionDate: new Date(2020, 2, 29),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'Crystals Collector',
    url: 'https://christopherzenner.dev/fsf-a04/',
    repo: 'https://github.com/icn2you/fsf-a04',
    imagePath: './static/media/crystals-collector-sprite.b539ecda.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['jQuery'],
    completionDate: new Date(2020, 3, 7),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'Real Wonder Women Trivia',
    url: 'https://christopherzenner.dev/fsf-a05/',
    repo: 'https://github.com/icn2you/fsf-a05',
    imagePath: './static/media/woman-trivia-sprite.7b8913ea.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['jQuery'],
    completionDate: new Date(2020, 3, 16),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'GIF-tastic',
    url: 'https://christopherzenner.dev/fsf-a06/',
    repo: 'https://github.com/icn2you/fsf-a06',
    imagePath: './static/media/gif-tastic-sprite.11af8482.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['API', 'jQuery'],
    completionDate: new Date(2020, 3, 21),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'Multiplayer RPS',
    url: 'https://christopherzenner.dev/fsf-a07/',
    repo: 'https://github.com/icn2you/fsf-a07',
    imagePath: './static/media/rps-multiplayer-sprite.b5c891b2.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['Firebase', 'jQuery'],
    completionDate: new Date(2020, 3, 28),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'FriendFinder',
    url: 'https://gentle-oasis-55680.herokuapp.com/',
    repo: 'https://github.com/icn2you/fsf-a11',
    imagePath: './static/media/friendfinder-sprite.4e7b1449.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['Express', 'Handlebars', 'Node', 'jQuery'],
    completionDate: new Date(2020, 5, 9),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'News That\'s Fit to Scrape',
    url: 'https://newsscraper.christopherzenner.dev/',
    repo: 'https://github.com/icn2you/fsf-a14',
    imagePath: './static/media/newsscraper-sprite.bf2b5152.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['MongoDB', 'Express', 'Handlebars', 'Node'],
    completionDate: new Date(2020, 7, 11),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'Pokéclick',
    url: 'http://christopherzenner.dev/fsf-a15/',
    repo: 'https://github.com/icn2you/fsf-a15',
    imagePath: './static/media/pokeclick-game-sprite.c3372381.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['React', 'Node'],
    completionDate: new Date(2020, 6, 23),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'Google Books Search',
    url: 'https://evening-badlands-52380.herokuapp.com/',
    repo: 'https://github.com/icn2you/fsf-a16',
    imagePath: './static/media/google-books-search-sprite.23653045.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['MongoDB', 'Express', 'React', 'Node'],
    completionDate: new Date(2020, 7, 23),
    projectType: 'individual',
    starred: false,
    active: true
  },
  {
    title: 'CookQuik',
    url: 'https://christopherzenner.dev/fsf-p01/',
    repo: 'https://github.com/icn2you/fsf-p01',
    imagePath: './static/media/cookquik-sprite.f94392de.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['API', 'Webpack', 'jQuery'],
    completionDate: new Date(2020, 4, 4),
    projectType: 'group',
    starred: false,
    active: true
  },
  {
    title: 'Listen, Hear',
    url: 'https://fsf-p02.herokuapp.com/',
    repo: 'https://github.com/icn2you/fsf-p02',
    imagePath: './static/media/listenhear-sprite.189a6e3c.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: ['MySQL', 'Express', 'Handlebars', 'Node'],
    completionDate: new Date(2020, 5, 31),
    projectType: 'group',
    starred: false,
    active: true
  },
  {
    title: 'Lagomify',
    url: 'https://lagomify.herokuapp.com/',
    repo: '#0',
    imagePath: './static/media/lagomify-sprite.f19a8dd9.png',
    programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
    technologiesUsed: [],
    completionDate: new Date(2020, 7, 23),
    projectType: 'group',
    starred: false,
    active: true
  }
]

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection
  .on('error', console.error.bind(
    console, 'An error was encountered connection to the database.'
  ))
  .once('connected', () => {
    console.log('Connection to the database open ...')
  })

database.Project
  .deleteMany({})
  .then(() => database.Project.collection.insertMany(projects))
  .then(data => {
    console.log(
      `${data.result.n} documents inserted into the database!`)

    mongoose.connection.close(() => {
      console.log('Connection to the database closed.')
      process.exit(0)
    })
  })
  .catch(err => {
    mongoose.connection.close(() => {
      console.log('Connection to the database closed.')
    })

    console.error(err.stack)

    process.exit(1)
  })
