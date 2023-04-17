import { firstName, lastName, smileys } from '../contacts/contactList';
import randomItem from 'random-item';

export function getRandomName() {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    return randomFirstName + ' ' + randomLastName + ' ' + randomItem(smileys);;
  }

 export function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }