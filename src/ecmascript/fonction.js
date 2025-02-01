//4
import { Tab } from './EcmaScript.js';

export const Search = (id) => {
    return Tab.find(item => item.id === id);
  };