import { Meteor } from 'meteor/meteor';
import { Tasks } from '../tasks';

Meteor.publish('tasks', () => Tasks.find());