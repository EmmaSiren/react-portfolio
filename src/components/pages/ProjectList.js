import textEditor from '../images/textEditor.jpg';
import weatherDashboard from '../images/weatherDashboard.jpg';
import noteTaker from '../images/noteTaker.jpg';
import scheduler from '../images/workScheduler.jpg';
import quiz from '../images/CodingQuizGif.gif';
import passwordGenerator from '../images/passwordGenerator.jpg'

const projects = [
  {
    id: 1,
    name: 'Text Editor',
    link: 'https://damp-waters-97002.herokuapp.com',
    repo: 'https://github.com/EmmaSiren/text-editor',
    img: textEditor,
  },
  {
    id: 2,
    name: 'Weather Dashboard',
    link: 'https://emmasiren.github.io/upcoming-weather-dashboard/',
    repo: 'https://github.com/EmmaSiren/upcoming-weather-dashboard',
    img: weatherDashboard,
  },
  {
    id: 3,
    name: 'Note Taker',
    link: 'https://floating-atoll-96790.herokuapp.com/',
    repo: 'https://github.com/EmmaSiren/note-taker',
    img: noteTaker,
  },
  {
    id: 4,
    name: 'Work Day Scheduler',
    link: 'https://emmasiren.github.io/work-day-scheduler/',
    repo: 'https://github.com/EmmaSiren/work-day-scheduler',
    img: scheduler,
  },
  {
    id: 5,
    name: 'Coding Quiz',
    link: 'https://emmasiren.github.io/Coding-Quiz/',
    repo: 'https://github.com/EmmaSiren/Coding-Quiz',
    img: quiz,
  },
  {
    id: 6,
    name: 'Password Generator',
    link: 'https://emmasiren.github.io/Refactoring-Password-Generator/',
    repo: 'https://github.com/EmmaSiren/Refactoring-Password-Generator',
    img: passwordGenerator,
  },
]
export default projects;