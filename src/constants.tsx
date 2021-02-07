import { Character } from './CharacterList';
import { School } from './CharacterList';


const characters: Character[] = [
  {
    id: 1,
    name: '空条承太郎',
    age: 17,
    height: 195,
  },
  {
    id: 2,
    name: '東方仗助',
    age: 16,
    height: 180,
  },
  {
    id: 3,
    name: 'Joseph Joestar',
    age: 18,
    height: 195,
  },
];

const schools: School[] = [
  {
    id: 1,
    name: 'A学園',
  },
  {
    id: 2,
    name: 'B学園',
  },
  {
    id: 3,
    name: 'C学園'
  },
];

export { characters, schools };
