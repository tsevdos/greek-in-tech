import {expect} from 'chai';
import * as m from '../src/index';

describe('Greek in Tech', () => {
  describe('all', () => {
    it('must be an array with length more than zero', () => {
      expect(m.all).to.be.an('array');
      expect(m.all.length).to.be.above(0);
    });

    it('must includes the "Daemon" entry', () => {
      const entryDescription = [
        'The term coined by programmers of MIT\'s Project MAC, was inspired by the physicist',
        'James Clerk Maxwell\'s demon. It originated as an imaginary being from a thought',
        'experiment that constantly works in the background sorting molecules.',
        'In Greek mythology, a daemon is a supernatural being working in the background,',
        'with no particular bias towards good or evil. The daemon concept was subsequently',
        'adopted by Unix systems, however, BSD and some of its derivatives have used a',
        'Christian interpretation of the mythological deamon as their mascot rather than',
        'a Greek daemon.'
      ];
      const entry = {
        id: 2,
        title: 'Daemon',
        description: entryDescription.join(' '),
        categories: [
          'OS',
          'unix',
          'linux',
          'open source'
        ],
        references: [
          {
            name: 'Wikipedia',
            source: 'https://en.wikipedia.org/wiki/Daemon_(computing)#Etymology'
          }
        ]
      };

      expect(m.all).to.include(entry);
    });
  });

  describe('random', () => {
    it('must return a random entry from the list', () => {
      const entry = m.random();
      expect(m.all).to.include(entry);
    });
  });

  describe('getEntry', () => {
    it('the entry must be an object with correct properties', () => {
      const entry = m.getEntry(2);
      expect(entry).to.be.an('object');
      expect(entry).to.have.property('id');
      expect(entry).to.have.property('title');
      expect(entry).to.have.property('description');
      expect(entry).to.have.property('categories');
      expect(entry).to.have.property('references');
      expect(entry.references).to.be.an('array');
    });

    it('must return a specific entry', () => {
      const entry = m.getEntry(1);
      expect(entry.id).to.eql(1);
      expect(entry.title).to.eql('Cron (job scheduler)');
      const description = [
        'It comes from the Greek word for time, chronos (χρόνος).',
        'Chronos is the personification of time in early Greek mythology and literature.',
        'He later appears in the Renaissance as Father Time.'
      ];
      expect(entry.description).to.eql(description.join(' '));
      expect(entry.categories).to.eql(['OS', 'unix', 'linux', 'open source']);
      expect(entry.references[0].name).to.eql('Wikipedia');
      expect(entry.references[0].source).to.eql('https://en.wikipedia.org/wiki/Cron');
    });

    it('must throw an error if entry doesnt exists', () => {
      expect(m.getEntry.bind(m, 10001)).to.throw(Error, /Invalid ID/);
    });
  });
});
