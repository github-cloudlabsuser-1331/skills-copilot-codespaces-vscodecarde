import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };
    const reverseSentence = (sentence) => {
        return sentence
            .split(' ')
            .reverse()
            .join(' ')
            .replace(/^\w/, (c) => c.toUpperCase());
    };

    const handleReverse = () => {
        setMarkdown(reverseSentence(markdown));
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}


const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];
const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']

const extractNames = (data) => {
    return data.flat().map(person => person.name);
};

console.log(extractNames(data)); // Output: ['John', 'Jane', 'Bob']