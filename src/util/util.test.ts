import { groupByUsers, groupByUsersFunction } from './util';

test('group by user', () => {
  let group_result = { '4': ['nine', 'four'], '5': ['eight', 'seven'] };
  expect(groupByUsers()).toEqual(group_result);
});

test('group by user function', () => {
  let group_result = { '4': ['nine', 'four'], '5': ['eight', 'seven'] };
  expect(groupByUsersFunction()).toEqual(group_result);
});
