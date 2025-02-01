//1
export const findLongestWord = (words) => {
    const wordsWithLength = words.map(mot => ({
      mot: mot,
      longueur: mot.length
    }));
  
    const longestWordObject = wordsWithLength.reduce((acc, curr) => {
      return (curr.longueur > acc.longueur) ? curr : acc;
    });
  
    return {
      mot: longestWordObject.mot,
      longueur: longestWordObject.longueur
    };
};

//2

export const countOccurrences = (input) => {
    const flattenedArray = input.flat();
    return flattenedArray.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  };

  export const calculateTotalMarks = (students) => {
    return students
      .map(student => ({
        ...student,
        marks: student.marks < 50 ? student.marks + 15 : student.marks
      }))
      .filter(student => student.marks > 50)
      .reduce((total, student) => total + student.marks, 0);
  };

  //3

  let lastId = 0;

export const Tab = [
  { id: ++lastId, name: 'Alice', age: 25 },
  { id: ++lastId, name: 'Bob', age: 30 },
  { id: ++lastId, name: 'Charlie', age: 35 }
];

export const addEntry = (entry) => {
  entry.id = ++lastId;
  Tab.push(entry);
};

