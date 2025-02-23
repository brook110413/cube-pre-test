/**  
There is an array, each item has such format: 
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’} lastName, note can be empty, customerID can only be a set of digital numbers. profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or  ‘systemAnalytics’. 
**/

// Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this  array and print it out.

function sortUserName(users) {
  const sortedUsers = [...users].sort((a, b) => {
    const nameA = a.firstName + (a.lastName ? a.lastName : '');
    const nameB = b.firstName + (b.lastName ? b.lastName : '');

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return a.customerID - b.customerID;
  });

  console.log(sortedUsers);
  return sortedUsers;
}

// Q2. Please sort by ‘profession’ to follow the principle.
// (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)

function sortByType(users) {
  const order = {
    student: 0,
    freelancer: 1,
    productOwner: 2,
    engineer: 3,
    systemAnalytics: 4,
  };

  const sortedUsers = [...users].sort(
    (a, b) => order[b.profession] - order[a.profession]
  );

  console.log(sortedUsers);
  return sortedUsers;
}
