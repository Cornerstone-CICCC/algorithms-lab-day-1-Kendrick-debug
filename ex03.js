// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe'). 

function getFullNames(users) {
  let getFullNames = []
  for (let i = 0; i < users.length; i++) {
    const fullName = `${users[i].firstName} ${users[i].lastName}`
    getFullNames.push(fullName)
  }
  return getFullNames
}

console.log(getFullNames([{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])) // ['John Doe', 'Jane Doe']
