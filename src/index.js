import uniqueRandomArray from 'unique-random-array';
import entries from '../data/entries';

export const all = entries;
export const random = uniqueRandomArray(entries);
export const getEntry = (id = 1) => {
  const entry = entries[id - 1];
  if (!entry) {
    throw new Error('Invalid ID');
  }

  return entry;
};
