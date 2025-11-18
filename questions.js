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
                id: 4,
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
                id: 5,
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
                id: 6,
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
                id: 7,
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
                id: 8,
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
