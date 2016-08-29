# greek-in-tech

> Learn which words used on modern computing and software engineering, come straight from the greek language/mythology.

All the entries are just a [JSON file](data/entries.json).

## Install

```
$ npm install --save greek-in-tech
```

## Usage

```js
const greekInTech = require('greek-in-tech');

greekInTech.all;
//=> all entries

greekInTech.random();
//=> random enrty

greekInTech.getEntry(2);
//=> specific entry
```

A single entry looks like this:

```
{
  id: 2,
  title: 'Daemon',
  description: 'The term coined by programmers of MIT\'s Project MAC, was inspired by the physicist James Clerk Maxwell\'s demon. It originated as an imaginary being from a thought experiment that constantly works in the background sorting molecules. In Greek mythology, a daemon is a supernatural being working in the background, with no particular bias towards good or evil. The daemon concept was subsequently adopted by Unix systems, however, BSD and some of its derivatives have used a Christian interpretation of the mythological deamon as their mascot rather than a Greek daemon.',
  categories: [ 'OS', 'unix', 'linux', 'open source' ],
  references: [ 'https://en.wikipedia.org/wiki/Daemon_(computing)#Etymology' ]
}
```

## API

### .all: object[]

All entries.

### .random(): object

Random entry.

### .getEntry(id: number): object

Specific entry.

## License

GPL3 © [John Tsevdos](http://tsevdos.me)
