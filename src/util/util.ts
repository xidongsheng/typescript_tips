import { groupBy } from 'lodash';

export const groupByUsers = (): Object => {
  // Original array

  let users = ['eight', 'nine', 'four', 'seven'];
  let grouped_data = groupBy(users, 'length');

  console.log(grouped_data);
  return grouped_data;
};

export function groupByUsersFunction(): Object {
  // Original array

  let users = ['eight', 'nine', 'four', 'seven'];
  let grouped_data = groupBy(users, 'length');

  console.log(grouped_data);
  return grouped_data;
}
