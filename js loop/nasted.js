const college = {
    name: 'wilfsc',
    dept: ['science', 'commerce', 'arts'],
    total_students: 2500,
    unique: {
        color: 'white',
        result: {
            gpa: 5,
            merit: 'top most',
        }
    }
}
// console.log(college.unique.color)
// college.unique.result.merit = 'top top top most'
console.log(college['unique'].result.merit);

// this line use for delete something
delete college.unique;
console.log(college)
// college.events[1] = '16 december'
// console.log(college.events[1])
