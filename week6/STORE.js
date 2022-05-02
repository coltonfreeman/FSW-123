import { v4 as uuidv4 } from 'uuid';

export const listOfTodos = [
    {   id: uuidv4(),
        text: "Do 30 min workout",
        isCompleted: false
    },
    {   id: uuidv4(),
        text: "walk for an hour",
        isCompleted: false
    }, 
    { 
        id: uuidv4(),
        text: "Take Viatmins",
        isCompleted: false
    },
    { 
        id: uuidv4(),
        text: "Drink 1 gallon of water",
        isCompleted: false
    },
    {
	    id: uuidv4(),
		text: "Check blood pressure",
		isCompleted: false
	}	
];