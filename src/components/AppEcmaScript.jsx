import React from 'react';
import { findLongestWord } from '../ecmascript/EcmaScript';
import { countOccurrences } from '../ecmascript/EcmaScript';
import { calculateTotalMarks } from '../ecmascript/EcmaScript';
import { addEntry } from '../ecmascript/EcmaScript';
import { Search } from '../ecmascript/fonction';
import { Tab } from '../ecmascript/EcmaScript';

const EcmascriptExercises = () => {
    // 1 : long words
    const words = ['ordinateur', 'clavier', 'souris', 'écran', 'imprimante'];
    const longestWord = findLongestWord(words);

    // 2 : count occurrences
    const input = [['a', 'b', 'c'], ['c', 'd', 'f'], ['d', 'f', 'g']];
    const occurrences = countOccurrences(input);

    // 3 : calculate total marks
    const students = [
        { name: 'John', id: 123, marks: 98 },
        { name: 'Baba', id: 101, marks: 23 },
        { name: 'John', id: 200, marks: 45 },
        { name: 'Wick', id: 115, marks: 75 }
    ];
    const totalMarks = calculateTotalMarks(students);

    // 4 : add & search
    addEntry({ name: 'David', age: 40 });
    const searchResult = Search(2);

    return (

        <div>
            <h2>Exercices ECMAScript</h2>
            <div>
                <h3>1 - Trouver le mot le plus long a partir du tableau </h3>
                <p>Voici une liste de mots : {words.join(', ')}</p>
                <p>Le mot le plus long est : {longestWord.mot} ({longestWord.longueur} caractères)</p>
            </div>

            <div>
                <h2>2 - Occurrences</h2>
                <pre>{JSON.stringify(occurrences, null, 2)}</pre>
            </div>

            <div>
                <h2>3 - Total des notes</h2>
                <p>Total des notes : {totalMarks}</p>
            </div>

            <div>
                <h2>4-  Recherche dans le tableau</h2>
                <div>
                    <h1>Tableau Tab</h1>
                    <ul>
                        {Tab.map(item => (
                            <li key={item.id}>{item.name} ({item.age} ans)</li>
                        ))}
                    </ul>
                    <h2>Résultat de la recherche:</h2>
                    {searchResult ? (
                        <div>
                            <p>{searchResult.name} trouvé avec l'ID {searchResult.id}</p>
                        </div>
                    ) : (
                        <p>Aucun résultat trouvé</p>
                    )}
                </div>
            </div>

        </div>



    );
}
export default EcmascriptExercises;