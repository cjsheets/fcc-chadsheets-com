import { Injectable } from '@angular/core';

export class Poll {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public options: [PollOption]
  ){}
}

export class PollOption {
  constructor(
    public id: number,
    public option: string,
    public votes: number
  ){}
}

/* temporary poll provider */
let POLLS = [
  new Poll(
    0, 'Chicken or Egg',
    'One had to come first',
    [new PollOption(0, 'Chicken', 0),
     new PollOption(1, 'Egg', 0)]),
  new Poll(
    1,
    'Why did the Chicken Cross Road',
    'Choose your favorite reason',
    [new PollOption(0, 'Get to the other side', 0),
     new PollOption(1, 'Flee from a wolf', 0),
     new PollOption(2, 'Prove it wasn\'t chicken', 0)]),
  new Poll(
    2,
    'What is your favorite color',
    'Choose your most prefered color below',
    [new PollOption(0, 'Red', 0),
     new PollOption(1, 'Green', 0),
     new PollOption(2, 'Blue', 0)])
];
let pollsPromise = Promise.resolve(POLLS);

@Injectable()
export class PollService {
  getPolls(): Promise<[Poll]> {
    return pollsPromise;
  }

  getPoll(id: number | string): Promise<Poll> {
    return pollsPromise
      .then(polls => polls.find(poll => poll.id === +id));
  }
}