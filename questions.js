        // Questions data (reduced to 20 questions)

const originalQuestions = [
            {
                id: 1,
                text: "In OOP, encapsulation primarily refers to:",
                options: [
                    { id: "A", text: "Hiding internal state and exposing methods" },
                    { id: "B", text: "Inheriting from multiple classes" },
                    { id: "C", text: "Overloading operators" },
                    { id: "D", text: "Compiling code to machine language" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-15"
            },
            {
                id: 2,
                text: "Which of these is an immutable sequence type?",
                options: [
                    { id: "A", text: "list" },
                    { id: "B", text: "dict" },
                    { id: "C", text: "tuple" },
                    { id: "D", text: "set" }
                ],
                correctAnswer: "C",
                source: "Source: Lec-3"
            },

            {
                id: 3,
                text: "Which statement about Python sets is true?",
                options: [
                    { id: "A", text: "They are unordered and contain unique elements." },
                    { id: "B", text: "They preserve insertion order like lists." },
                    { id: "C", text: "They allow duplicate entries." },
                    { id: "D", text: "They are indexed by integer positions." }
                ],
                correctAnswer: "A",
                source: "Source: Lec-12"
            },
            {
                id: 4,
                text: "How do you create an empty set in Python?",
                options: [
                    { id: "A", text: "{}" },
                    { id: "B", text: "set[]" },
                    { id: "C", text: "EmptySet()" },
                    { id: "D", text: "set()" }
                ],
                correctAnswer: "D",
                source: "Source: Lec-12"
            },
            {
                id: 5,
                text: "What exception is raised by int('abc')?",
                options: [
                    { id: "A", text: "ValueError" },
                    { id: "B", text: "TypeError" },
                    { id: "C", text: "KeyError" },
                    { id: "D", text: "NameError" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-3"
            },
            {
                id: 6,
                text: "How do you create an empty set in Python?",
                options: [
                    { id: "A", text: "{}" },
                    { id: "B", text: "set[]" },
                    { id: "C", text: "EmptySet()" },
                    { id: "D", text: "set()" }
                ],
                correctAnswer: "D",
                source: "Source: Lec-12"
            },
            {
                id: 7,
                text: "In a while loop, what statement immediately skips to the next iteration?",
                options: [
                    { id: "A", text: "break" },
                    { id: "B", text: "return" },
                    { id: "C", text: "continue" },
                    { id: "D", text: "pass" }
                ],
                correctAnswer: "C",
                source: "Source: Lec-6"
            },
            {
                id: 8,
                text: "What exception is raised by int('abc')?",
                options: [
                    { id: "A", text: "ValueError" },
                    { id: "B", text: "TypeError" },
                    { id: "C", text: "KeyError" },
                    { id: "D", text: "NameError" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-3"
            },
            {
                id: 9,
                text: "In a class method, what does self refer to?",
                options: [
                    { id: "A", text: "The class object" },
                    { id: "B", text: "Global namespace" },
                    { id: "C", text: "The instance on which the method was called" },
                    { id: "D", text: "A magic built-in variable" }
                ],
                correctAnswer: "C",
                source: "Source: Lec-15"
            },
            {
                id: 10,
                text: "Which of these will correctly add an element x to set s?",
                options: [
                    { id: "A", text: "s.add(x)" },
                    { id: "B", text: "s.append(x)" },
                    { id: "C", text: "s.insert(x)" },
                    { id: "D", text: "s[x] = True" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-12"
            },
            {
                id: 11,
                text: "What does the expression {1,2} | {2,3} produce?",
                options: [
                    { id: "A", text: "{1,2,3} & {2}" },
                    { id: "B", text: "{2}" },
                    { id: "C", text: "{1,3}" },
                    { id: "D", text: "{1,2,3} (union)" }
                ],
                correctAnswer: "D",
                source: "Source: Lec-12"
            },
            {
                id: 12,
                text: "Which built-in function returns a list of tuples pairing index and element?",
                options: [
                    { id: "A", text: "enumerate()" },
                    { id: "B", text: "zip()" },
                    { id: "C", text: "map()" },
                    { id: "D", text: "range()" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-5"
            },
            {
                id: 13,
                text: "Which of the following is true about Python's variable scoping in functions?",
                options: [
                    { id: "A", text: "Assignment creates a new local variable unless declared global/nonlocal" },
                    { id: "B", text: "All variables are global by default" },
                    { id: "C", text: "Python has block scope like C" },
                    { id: "D", text: "Variables in functions cannot access globals" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-6"
            },
            {
                id: 14,
                text: "What does the expression list(range(2,8,2)) evaluate to?",
                options: [
                    { id: "A", text: "[2,8]" },
                    { id: "B", text: "[2,3,4,5,6,7,8]" },
                    { id: "C", text: "[2,4,6]" },
                    { id: "D", text: "[0,2,4,6,8]" }
                ],
                correctAnswer: "C",
                source: "Source: Lec-6"
            },
            {
                id: 15,
                text: "In OOP, encapsulation primarily refers to:",
                options: [
                    { id: "A", text: "Hiding internal state and exposing methods" },
                    { id: "B", text: "Inheriting from multiple classes" },
                    { id: "C", text: "Overloading operators" },
                    { id: "D", text: "Compiling code to machine language" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-15"
            },
            {
                id: 16,
                text: "What does the expression x += 1 do for an integer x?",
                options: [
                    { id: "A", text: "In-place increment for integers" },
                    { id: "B", text: "Raises TypeError" },
                    { id: "C", text: "Creates a tuple" },
                    { id: "D", text: "Rebinds x to x+1 (effectively increment)" }
                ],
                correctAnswer: "D",
                source: "Source: Lec-6"
            },
            {
                id: 17,
                text: "Which of the following will sort list L in place?",
                options: [
                    { id: "A", text: "sorted(L)" },
                    { id: "B", text: "L.sort()" },
                    { id: "C", text: "L.sorted()" },
                    { id: "D", text: "sort(L)" }
                ],
                correctAnswer: "B",
                source: "Source: Lec-7"
            },
            {
                id: 18,
                text: "Which of these is valid way to open a file for writing text?",
                options: [
                    { id: "A", text: "open('f','r')" },
                    { id: "B", text: "open('f','w')" },
                    { id: "C", text: "open('f','rb')" },
                    { id: "D", text: "open('f',write=True)" }
                ],
                correctAnswer: "B",
                source: "Source: Lec-10"
            },
            {
                id: 19,
                text: "Which of these datatypes can be used as dict keys?",
                options: [
                    { id: "A", text: "Immutable and hashable types (e.g., int, str, tuple)" },
                    { id: "B", text: "Lists" },
                    { id: "C", text: "dict" },
                    { id: "D", text: "set" }
                ],
                correctAnswer: "A",
                source: "Source: Lec-13"
            },
            {
                id: 20,
                text: "What is the main difference between list and tuple?",
                options: [
                    { id: "A", text: "Lists are immutable, tuples are mutable" },
                    { id: "B", text: "Lists use parentheses" },
                    { id: "C", text: "Lists are mutable; tuples are immutable" },
                    { id: "D", text: "There is no difference" }
                ],
                correctAnswer: "C",
                source: "Source: Lec-3"
            },
          
             {
                id: 22,
                text: "What color is shown in the image?",
                imageUrl: "images/red.png",
                options: [
                    { id: "A", text: "Blue" },
                    { id: "B", text: "Green" },
                    { id: "C", text: "Red" },
                    { id: "D", text: "Yellow" }
                ],
                correctAnswer: "C",
                source: "Custom Image Question"
            },
        ];