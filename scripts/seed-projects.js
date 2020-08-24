const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/devprojsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const projects = [
    {
      title: 'Canine Hangman',
      url: 'https://christopherzenner.dev/fsf-a03/',
      repo: 'https://github.com/icn2you/fsf-a03',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['jQuery'],
      completionDate: new Date(2020, 02, 29),
      projectType: 'individual',  
    },
    {
      title: 'Crystals Collector',
      url: 'https://christopherzenner.dev/fsf-a04/',
      repo: 'https://github.com/icn2you/fsf-a04',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['jQuery'],
      completionDate: new Date(2020, 03, 07),
      projectType: 'individual',  
    },
    {
      title: 'Real Wonder Women Trivia',
      url: 'https://christopherzenner.dev/fsf-a05/',
      repo: 'https://github.com/icn2you/fsf-a05',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['jQuery'],
      completionDate: new Date(2020, 03, 16),
      projectType: 'individual',  
    },
    {
      title: 'GIF-tastic',
      url: 'https://christopherzenner.dev/fsf-a06/',
      repo: 'https://github.com/icn2you/fsf-a06',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['API', 'jQuery'],
      completionDate: new Date(2020, 03, 21),
      projectType: 'individual',  
    },
    {
      title: 'Multiplayer RPS',
      url: 'https://christopherzenner.dev/fsf-a07/',
      repo: 'https://github.com/icn2you/fsf-a07',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['Firebase', 'jQuery'],
      completionDate: new Date(2020, 03, 28),
      projectType: 'individual',  
    },
    {
      title: 'FriendFinder',
      url: 'https://gentle-oasis-55680.herokuapp.com/',
      repo: 'https://github.com/icn2you/fsf-a11',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['Express', 'Handlebars', 'Node', 'jQuery'],
      completionDate: new Date(2020, 05, 09),
      projectType: 'individual',  
    },
    {
      title: 'News That\'s Fit to Scrape',
      url: 'https://newsscraper.christopherzenner.dev/',
      repo: 'https://github.com/icn2you/fsf-a14',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['MongoDB', 'Express', 'Handlebars', 'Node'],
      completionDate: new Date(2020, 07, 11),
      projectType: 'individual',  
    },
    {
      title: 'Pokéclick',
      url: 'http://christopherzenner.dev/fsf-a15/',
      repo: 'https://github.com/icn2you/fsf-a15',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['React', 'Node'],
      completionDate: new Date(2020, 06, 23),
      projectType: 'individual',  
    },
    {
      title: 'Google Books Search',
      url: 'https://evening-badlands-52380.herokuapp.com/',
      repo: 'https://github.com/icn2you/fsf-a16',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['MongoDB', 'Express', 'React', 'Node'],
      completionDate: new Date(2020, 07, 23),
      projectType: 'individual',  
    },
    {
      title: 'CookQuik',
      url: 'https://christopherzenner.dev/fsf-p01/',
      repo: 'https://github.com/icn2you/fsf-p01',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['API', 'Webpack', 'jQuery'],
      completionDate: new Date(2020, 04, 04),
      projectType: 'group',  
    },
    {
      title: 'Listen, Hear',
      url: 'https://fsf-p02.herokuapp.com/',
      repo: 'https://github.com/icn2you/fsf-p02',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['MySQL', 'Express', 'Handlebars', 'Node'],
      completionDate: new Date(2020, 05, 31),
      projectType: 'group',  
    },
    {
      title: 'Lagomify',
      url: 'https://lagomify.herokuapp.com/',
      repo: '#',
      imagePath: '../assets/img/...',
      programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
      technologiesUsed: ['', '', ''],
      completionDate: new Date(2020, 07, 23),
      projectType: 'group'
    }
  ]

  db.Project
    .deleteMany({})
    .then(() => db.Project.collection.insertMany(projects))
    .then(data => {
      console.log(
        `${data.result.n} documents inserted into the database!`)
      process.exit(0)
    })
    .catch(err => {
      console.error(err.stack)
      process.exit(1)
    })
