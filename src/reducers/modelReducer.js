import { createSlice } from '@reduxjs/toolkit';

export const mandatory_categories = [
    'Help',
    'Errors and Faults Management', 
    'System Information', 
    'Presentation',
    'Features', 
    'Inputs', 
    'Risk Support' 
]

export const all_categories = [
    'Help',
    'Errors and Faults Management', 
    'System Information', 
    'Presentation', 
    'Features',
    'Inputs', 
    'Risk Support',
    'Alternative Ways to Achieve Goal'
]

export const goals_names = [ 
    {name: "Feature Help", isChecked: false, parent: "", log_req: "", category: 'Help', hasSon: false},
    {name: "Demonstrative Materials", isChecked: false, parent: "", log_req: "", category: 'Help', hasSon: false},
    {name: "Step By Step", isChecked: false, parent: "", log_req: "", category: 'Help', hasSon: true},
    {name: "Step by Step Help", isChecked: false, parent: "Step By Step", log_req: "alternative", category: 'Help', hasSon: false},
    {name: "Step by Step Instructions", isChecked: false, parent: "Step By Step", log_req: "alternative", category: 'Help', hasSon: false},
    {name: "Error/Failure Message", isChecked: true, parent: "", log_req: "", category: 'Errors and Faults Management', hasSon: false},
    {name: "Error Location", isChecked: true, parent: "", log_req: "", category: 'Errors and Faults Management', hasSon: true},
    {name: "Error Identification", isChecked: true, parent: "Error Location", log_req: "", category: 'Errors and Faults Management', hasSon: false},
    {name: "Error Redirection", isChecked: false, parent: "Error Location", log_req: "", category: 'Errors and Faults Management', hasSon: false},
    {name: "Dealing with Errors and Faults", isChecked: true, parent: "", log_req: "", category: 'Errors and Faults Management', hasSon: true},
    {name: "Solve Errors", isChecked: false, parent: "Dealing with Errors and Faults", log_req: "", category: 'Errors and Faults Management', hasSon: true},
    {name: "Error/Failure Cause", isChecked: false, parent: "Solve Errors", log_req: "", category: 'Errors and Faults Management', hasSon: false},
    {name: "Error Correction", isChecked: false, parent: "Solve Errors", log_req: "", category: 'Errors and Faults Management', hasSon: false},
    {name: "Workaround", isChecked: false, parent: "Dealing with Errors and Faults", log_req: "", category: 'Errors and Faults Management', hasSon: true},
    {name: "Options to Continue", isChecked: false, parent: "Workaround" , log_req: "alternative", category: 'Errors and Faults Management', hasSon: false},
    {name: "Previous State", isChecked: false, parent: "Workaround", log_req: "alternative", category: 'Errors and Faults Management', hasSon: false},
    {name: "System Status in case of Errors and Faults", isChecked: false, parent: "", log_req: "", category: 'Errors and Faults Management', hasSon: false},
    {name: "Problem Understanding", isChecked: true, parent: "", log_req: "", category: 'System Information', hasSon: true},
    {name: "Decisions", isChecked: false, parent: "Problem Understanding", log_req: "", category: 'System Information', hasSon: false},
    {name: "Data Processing", isChecked: false, parent: "Problem Understanding", log_req: "", category: 'System Information', hasSon: false},
    {name: "Feature Information", isChecked: true, parent: "Problem Understanding", log_req: "", category: 'System Information', hasSon: true},
    {name: "Feature Details", isChecked: false, parent: "Feature Information", log_req: "", category: 'System Information', hasSon: false},
    {name: "Feature Step", isChecked: true, parent: "Feature Information", log_req: "", category: 'System Information', hasSon: false},
    {name: "Interface Elements", isChecked: true, parent: "", log_req: "", category: 'System Information', hasSon: true},
    {name: "Acronyms", isChecked: true, parent: "Interface Elements", log_req: "", category: 'System Information', hasSon: false},
    {name: "Symbols Design", isChecked: true, parent: "Interface Elements", log_req: "", category: 'System Information', hasSon: false},
    {name: "Symbols Meaning", isChecked: true, parent: "Interface Elements", log_req: "", category: 'System Information', hasSon: false},
    {name: "Highlighted Information", isChecked: true, parent: "", log_req: "", category: 'Presentation', hasSon: false},
    {name: "Elimination of Redundancy and Contradictions", isChecked: true, parent: "", log_req: "", category: 'Presentation', hasSon: false},
    {name: "Organized Information", isChecked: true, parent: "", log_req: "", category: 'Presentation', hasSon: false},
    {name: "Options Selection", isChecked: true, parent: "", log_req: "", category: 'Inputs', hasSon: true}, 
    {name: "Limit Options", isChecked: true, parent: "Options Selection", log_req: "", category: 'Inputs', hasSon: false},
    {name: "Options Description", isChecked: false, parent: "Options Selection", log_req: "", category: 'Inputs', hasSon: false},
    {name: "Data Insertion", isChecked: false, parent: "", log_req: "", category: 'Inputs', hasSon: true},
    {name: "Data Format", isChecked: false, parent: "Data Insertion", log_req: "", category: 'Inputs', hasSon: false},
    {name: "Information Location", isChecked: false, parent: "Data Insertion", log_req: "", category: 'Inputs', hasSon: false},
    {name: "Default Values", isChecked: false, parent: "", log_req: "", category: 'Inputs', hasSon: false},
    {name: "Action State", isChecked: true, parent: "", log_req: "", category: 'Features', hasSon: true},
    {name: "Next Step", isChecked: true, parent: "Action State", log_req: "", category: 'Features', hasSon: false},
    {name: "Progress", isChecked: true, parent: "Action State", log_req: "", category: 'Features', hasSon: false},
    {name: "Feedback", isChecked: true, parent: "", log_req: "", category: 'Features', hasSon: false},
    {name: "Success Message", isChecked: true, parent: "Feedback", log_req: "", category: 'Features', hasSon: false},
    {name: "Process Oriented", isChecked: true, parent: "", log_req: "", category: 'Features', hasSon: false},
    {name: "Modularization", isChecked: true, parent: "Process Oriented", log_req: "", category: 'Features', hasSon: false},
    {name: "Action Resumption", isChecked: false, parent: "", log_req: "", category: 'Features', hasSon: false},
    {name: "Expectations", isChecked: true, parent: "", log_req: "", category: 'Features', hasSon: false},
    {name: "Risk Support", isChecked: true, parent: "", log_req: "", category:'Risk Support', hasSon: true},
    {name: "Critical Information", isChecked: true, parent: "Risk Support", log_req: "", category:'Risk Support', hasSon: false},
    {name: "Risk Management", isChecked: true, parent: "Risk Support", log_req: "", category:'Risk Support', hasSon: false},
    {name: "Alternative Ways to Achieve Goal", isChecked: false, parent: "", log_req: "", category: 'Alternative Ways to Achieve Goal', hasSon: false},
]

export const model_goals = {
    "Help":
    [{
        id:"help",
        name: "Help",
        requirements: "mandatory",
        goals: [
            {
                goalName: "Feature Help",
                description: "Provides a help menu that the user can consult during the execution of the function to obtain all available information about it.",
                type: "concrete",
                requirements: "optional",
                parentName: "",
                goals: ""
            },
            {
                goalName: "Illustrative Materials",
                description: "Provides illustrative material on how to use the system.",
                type: "concrete",
                requirements: "optional",
                parentName: "",
                goals: ""
            }, 
            {
                goalName: "Step-by-step",
                description: "",
                
                type: "abstract",
                parentName: "",
                requirements: "optional",
                goals: [
                    {
                        goalName: "Step-by-step Help",
                        description: "Provides step-by-step demonstrations to guide the user in using the system.",
                        type: "concrete",
                        requirements: "optional",
                        logic_operators: "alternative", // só pode selecionar um dos que estão aqui
                        parentName: "Step By Step",
                        goals: ""
                    },
                    {
                        goalName: "Step-by-step Instructions",
                        description: "Provides step-by-step instructions to help the user understand how to operate the system.",
                        type: "concrete",
                        logic_operators: "alternative",
                        requirements: "optional",
                        parentName: "Step By Step",
                        goals: ""
                    }
                ]
            }
        ]
    }],

    "Errors and Faults Management":
    [{
        id: "erros_faults",
        name: "Errors and Faults Management",
        description: "",
        logic_operators: "", //seleciona um ou mais
        requirements: "mandatory",
        goals: [
            {
                goalName: "Error/Failure Message",
                description: "Displays a message indicating an error or system failure.",
                requirements: "mandatory",
                type: "concrete",
                parentName: "",
                goals: ""
            },
            {
                goalName: "Error Location",
                description: "",
                logic_operators: "", // só pode selecionar um dos que estão aqui
                type: "abstract",
                requirements: "mandatory",
                parentName: "",
                goals: [
                    {
                        goalName: "Error Identification",
                        description: "Highlights the location of the error.",
                        requirements: "mandatory",
                        type: "concrete",
                        parentName: "Error Location",
                        goals: ""
                    },
                    {
                        goalName: "Error Redirection",
                        description: "Directs the user to the location of the error.",
                        requirements: "optional",
                        type: "concrete",
                        parentName: "Error Location",
                        goals: ""
                    }
                ]
            },
            {
                goalName: "Dealing with Errors and Faults",
                description: "",
                type: "abstract",
                requirements: "mandatory",
                parentName: "",
                goals: [
                    {
                        goalName: "Solve Errors",
                        description: "",
                        requirements: "optional",
                        type: "abstract",
                        logic_operators: "",
                        parentName: "Dealing with Errors and Faults",
                        goals: [
                            {
                                goalName: "Error/Failure Cause",
                                description: "Displays the cause of errors that have been made by the user or the cause of system failures.",
                                requirements: "sub-mandatory",
                                type: "concrete",
                                parentName: "Solve Errors",
                                goals: ""
                             },
                            {
                                goalName: "Error Correction",
                                description: "Identifies possible solutions to correct errors that have been made.",
                                requirements: "optional",
                                type: "concrete",
                                parentName: "Solve Errors",
                                goals: ""
                            }
                        ]
                    },
                    {
                        goalName: "Workaround",
                        description: "",
                        requirements: "optional",
                        logic_operators: "",
                        type: "abstract",
                        parentName: "Dealing with Errors and Faults",
                        goals: [
                            {
                                goalName: "Options to Continue",
                                description: "Provides options to continue in case of user error or system failure.",
                                requirements: "optional",
                                type: "concrete",
                                logic_operators: "alternative",
                                parentName: "Workaround",
                                goals: ""
                            },
                            {
                                goalName: "Previous State",
                                description: "Provides options to return to the previous state in case of user error or system failure without affecting progress.",
                                requirements: "optional",
                                logic_operators: "alternative",
                                type: "concrete",
                                parentName: "Workaround",
                                goals: ""
                            }
                        ]
                    }
                ]
            },
            {
                goalName: "System Status in case of Errors and Faults",
                description: "Keeps the data entered by the user in the system in case of a system error or system failure.",
                requirements: "optional",
                type: "concrete",
                parentName: "",
                goals: ""
            },
        ]}
    ],

    "System Information":
    [{
        id:"systeminfo",
        name: "System Information",
        requirements: "mandatory",
        goals: [
            {
                goalName: "Problem Understanding",
                description: "Provides all the information the user needs to fully understand the problem and successfully perform the operation.",
                type: "concrete",
                requirements: "mandatory",
                parentName: "",
                goals: [
                    {
                        goalName: "Decisions",
                        description: "Provides information so that the user feels confident in deciding.",
                        requirements: "optional",
                        type: "concrete",
                        parentName: "Problem Understanding",
                        goals: ""
                    },
                    {
                        goalName: "Data Processing",
                        description: "Provides information on how the data entered by the user into the system is processed, especially those that may involve risks for the user.",
                        requirements: "optional",
                        type: "concrete",
                        parentName: "Problem Understanding",
                        goals: ""
                    },
                    {
                        goalName: "Feature Information",
                        description: "",
                        requirements: "mandatory",
                        parentName: "Problem Understanding",
                        type: "abstract",
                        goals: [
                            {
                                goalName: "Feature Details",
                                description: "Provides information that explains the features in detail.",
                                requirements: "optional",
                                type: "concrete",
                                parentName: "Feature Information",
                                goals: ""
                            },
                            {
                                goalName: "Feature Step",
                                description: "Provides any information required to perform an action or action step.",
                                requirements: "mandatory",
                                type: "concrete",
                                parentName: "Feature Information",
                                goals: ""
                            }
                        ]
                    },
                ]
            },
            {
                goalName: "Interface Elements",
                description: "Provides information about the elements present in the interface.",
                type: "concrete",
                requirements: "mandatory",
                parentName: "",
                goals: [
                    {
                        goalName: "Acronyms",
                        description: "For terms known by their acronyms, give the full term followed by the acronym.",
                        requirements: "mandatory",
                        type: "concrete",
                        parentName: "Interface Elements",
                        goals: ""
                    },
                    {
                        goalName: "Symbols Design",
                        description: "Uses symbols that allow the user to recognize the action associated with them.",
                        requirements: "mandatory",
                        type: "concrete",
                        parentName: "Interface Elements",
                        goals: ""
                    },
                    {
                        goalName: "Symbols Meaning",
                        description: "The user must be able to check the meaning of the symbols used in the interface.",
                        requirements: "mandatory",
                        parentName: "Interface Elements",
                        type: "abstract",
                        goals:""
                    },
                ]
            }, 
        ]
    }],

    "Presentation":
    [{
        id:"presentation",
        name: "Presentation",
        goals: [
            {
                goalName: "Highlighted Information",
                description: "Highlights the most important ideas in the information presented to the user.",
                type: "concrete",
                requirements: "mandatory",
                parentName: "",
                goals: ""
            },
            {
                goalName: "Elimination of Redundancies and Contradictions",
                description: "Eliminates redundant and contradictory information in the information presented to the user.",
                type: "concrete",
                requirements: "mandatory",
                parentName: "",
                goals: ""
            },
            {
                goalName: "Organized Information",
                description: "Presentation of information organized according to a criterion.",
                type: "concrete",
                requirements: "mandatory",
                parentName: "",
                goals: ""
            }
        ]
    }],

    "Inputs":
    [{
        id:"inputs",
        name: "Inputs",
        goals: [
            {
                goalName: "Options Selection",
                description: "",
                type: "abstract",
                requirements: "mandatory",
                parentName: "",
                goals: [
                    {
                        goalName: "Limiting Options",
                        description: "Whenever possible, limits the options the user can choose. Offer the \"other\" option whenever necessary.",
                        type: "concrete",
                        requirements: "mandatory",
                        parentName: "Options Selection",
                        goals: ""
                    },
                    {
                        goalName: "Options Description",
                        description: "Provides a brief description for each of the options offered to the user.",
                        type: "concrete",
                        requirements: "optional",
                        parentName: "Options Selection",
                        goals: ""
                    }
                ]
            },
            {
                goalName: "Data Insertion",
                description: "",
                type: "concrete",
                requirements: "optional",
                parentName: "",
                goals: [
                    {
                        goalName: "Data Format",
                        description: "Specifies the format in which the data should be entered.",
                        type: "concrete",
                        requirements: "optional",
                        parentName: "Data Insertion",
                        goals: ""
                    },
                    {
                        goalName: "Information Location",
                        description: "Provides to the user information on where to find the data to be entered in their documents.",
                        type: "concrete",
                        parentName: "Data Insertion",
                        requirements: "optional",
                        goals: ""
                    }
                ]
            },
            {
                goalName: "Default Values",
                description: "Default values should be specified for functions that affect the operation of the system. / Specify values that are used or expected by most users.", 
                type: "concrete",
                requirements: "optional",
                parentName: "",
                goals: ""
            }
        ]
    }],

    "Features":
    [{
        id:"features",
        name: "Features",
        goals: [
            {
                goalName: "Action State",
                description: "",
                type: "abstract",
                parentName: "",
                requirements: "mandatory",
                goals: [
                    {
                        goalName: "Next Step",
                        description: "Displays elements that allows the user to move to the next step of the function and identify it with the text \"Next step\" or another illustrative label.",
                        type: "concrete",
                        requirements: "mandatory",
                        parentName: "Action State",
                        goals: ""
                    },
                    {
                        goalName: "Progress",
                        description: "Displays a progress bar during the execution of the action or indication of the step the user is in.",
                        type: "concrete",
                        requirements: "mandatory",
                        parentName: "Action State",
                        goals: ""
                    }
                ]
            },
            {
                goalName: "Feedback",
                description: "Provides feedback about the system status.",
                type: "concrete",
                requirements: "mandatory",
                parentName: "",
                goals: [
                    {
                        goalName: "Success Message",
                        description: "Displays messages indicating which action was successful.",
                        type: "concrete",
                        requirements: "mandatory",
                        parentName: "Feedback",
                        goals: ""
                    }
                ]
            },
            {
                goalName: "Process Oriented",
                description: "Provides paths/steps for process-oriented learners.",
                type: "concrete",
                parentName: "",
                requirements: "mandatory",
                goals: [
                    {
                        goalName: "Modularization",
                        description: "Separation of information/function steps on different pages based on a specific function.",
                        parentName: "Process Oriented",
                        type: "concrete",
                        requirements: "mandatory",
                        goals: ""
                    }
                ]
            },
            {
                goalName: "Action Resumption",
                parentName: "",
                description: "Allows the user to leave the function being performed and return to it later to check if they want to start over or continue from where they left off.",
                type: "concrete",
                requirements: "optional",
                goals: ""
            },
            {
                goalName: "Expectations",
                description: "The system must meet the user's expectations when they take a risk.",
                parentName: "",
                type: "concrete",
                requirements: "mandatory",
                goals: ""
            }
        ]
    }],

    "Risk Support":
    [{
        id:"riskSup",
        name: "Risk Support",
        description: "",
        type: "concrete",
        requirements: "mandatory",
        goals: [
            {
                goalName: "Risk Support",
                description: "Provides support for users who are afraid to risk.",
                type: "concrete",
                requirements: "mandatory",
                parentName: "",
                goals: [
                    {
                        goalName: "Critical Information",
                        description: "Labels information that may be critical to the use of the system to alert the user that changing it may affect the normal functioning of the system or the function being performed.",
                        type: "concrete",
                        requirements: "mandatory",
                        parentName: "Risk Support",
                        goals: ""
                    }, 
                    {
                        goalName: "Risk Management",
                        description: "Confirms the intent to change information that may alter the state of the system by showing the potential impact that may occur.",
                        type: "concrete",
                        requirements: "mandatory",
                        parentName: "Risk Support",
                        goals: ""
                    }
                ]
            }
            
        ]
    }],

    "Alternative Ways to Achieve Goal":
    [{
        id:"alternativePath",
        name: "Alternative Ways to Achieve Goal",
        description:"",
        type:"concrete",
        requirements:"optional",
        goals: [
            {
                goalName: "Alternative Ways to Achieve Goal",
                description: "Provides more than one way to accomplish the same goal.",
                type:"concrete",
                requirements:"optional",
                parentName: "",
                goals:""
            }
        ]
    }]

}

const initialState = {
  detail: '',
  selected_node:''
};

const modelSlice = createSlice({
  name: 'model',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDetail: (state, action) => {
      state.detail = model_goals[action.payload];
      state.selected_node = action.payload;
    },
    clearDetail: (state, action) =>{
        const cleared_state = {...initialState};
        return cleared_state
    }
  }
});

export const { setDetail, clearDetail } = modelSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDetail = (state) => state.model.detail;
export const selectedNode = (state) => state.model.selected_node;

export default modelSlice.reducer;



//EXAMPLE -- DRIVENOW


export const goals_examples = [
    {category:"Help", goalName: "Feature Help", parent: "", hasSon: false,  example_desc: "Provide a help button that is present throughout the car booking feature and can be consulted by the user."},
    {category:"Help", goalName: "Demonstrative Materials", parent: "",hasSon: false,  example_desc: "The system must contain a demonstrative video on how to execute the car reservation functionality."},
    {category:"Help", goalName: "Step by Step", parent: "", hasSon: true, example_desc: ""},
    {category:"Help", goalName: "Step by Step Help", parent: "Step by Step", hasSon: false, example_desc: "Provide guidance that assists the user when booking a car and guides them through the process."},
    {category:"Help", goalName: "Step by Step Instructions", parent: "Step by Step", hasSon: false, example_desc: "Provide a textual description indicating the different steps that must be completed in order to book the car. Also provide detailed information about each step."},
    {category:"Errors and Faults Management", goalName: "Error Identification", parent: "", hasSon: false, example_desc: "If during the car booking process, there is an error in filling out a field the system should underline the title of that field of red."},
    {category:"Errors and Faults Management", goalName: "Error Redirection", parent: "", hasSon: false, example_desc: "When the user is submitting the car reservation request, if any of the data is entered incorrectly, the system will automatically go to its location ."},
    {category:"Errors and Faults Management", goalName: "Error/Failure Message", parent: "", hasSon: false, example_desc: "If, when trying to make a reservation, the user is outside the operating area, the system must notify him (message is displayed identifying that the area where he is is not covered by the service)."},
    {category:"Errors and Faults Management", goalName: "Dealing with Errors and Faults", parent: "", hasSon: true, example_desc: ""},
    {category:"Errors and Faults Management", goalName: "Solve Errors", parent: "Dealing with Errors and Faults", hasSon: true, example_desc: ""},
    {category:"Errors and Faults Management", goalName: "Error/Failure Cause", parent: "Solve Errors", hasSon: false, example_desc: "If the user enters invalid characters in the field relating to the card number (to make the payment) the user must subsequently be notified that the payment failed because the card number entered contains characters that are not valid.."},
    {category:"Errors and Faults Management", goalName: "Error Correction", parent: "Solve Errors", hasSon: false, example_desc: "If the user enters invalid characters in the field relating to the card number (for making the payment) the system must indicate to the user that the license number is not valid due to the existence of characters that are not valid."},
    {category:"Errors and Faults Management", goalName: "Workaround", parent: "Dealing with Errors and Faults", hasSon: true, example_desc: ""},
    {category:"Errors and Faults Management", goalName: "Options to Continue", parent: "Workaround", hasSon: false, example_desc: "If the user selected a model that was available during the booking process, but at the time of submitting the reservation it was not, the system must notify the user and return to the reservation form and present the available models."},
    {category:"Errors and Faults Management", goalName: "Previous State", parent: "Workaround", hasSon: false, example_desc: ""},
    {category:"Errors and Faults Management", goalName: "System Status in case of Errors and Faults", parent: "", hasSon: false, example_desc: "If during the car reservation process there is a system failure, the data previously entered by the user must be present in the system when it recovers."},
    {category:"Presentation", goalName: "Highlighted Information", parent: "", hasSon: false, example_desc: "In the explanation on entering data to make the payment, highlight the main topics (introduction of card number, name of the holder, expiry date, CVV, etc.)."},
    {category:"Presentation", goalName: "Elimination of Redundancy and Contradictions", parent: "", hasSon: false, example_desc: "In the explanation on the introduction of data to make the payment, it is important to use easy to understand language and to present information that is not contradictory."},
    {category:"Presentation", goalName: "Organized Information", parent: "", hasSon: false, example_desc: "In the detailed explanation about the car reservation functionality, display information on the different fields that the user has to fill in, organized in the same way they are presented to the user when executing the functionality."},
    {category:"System Information", goalName: "Problem Understanding", parent: "", hasSon: true, example_desc: "Provide a detailed explanation of what the car reservation feature consists of and the entire process that the user needs to perform to be able to book a car."},
    {category:"System Information", goalName: "Decisions", parent: "Problem Understanding", hasSon: false, example_desc: "Provide an option to turn on and turn off application notifications, indicating that, if they are turned off, the user will not be notified of promotions that may exist."},
    {category:"System Information", goalName: "Data Processing", parent: "Problem Understanding", hasSon: false,example_desc: "When entering data to make the payment of the car reservation, present information on how the entered data will be used and the security of the system in order to protect the user."},
    {category:"System Information", goalName: "Feature Information", parent: "Problem Understanding", hasSon: true, example_desc: ""},
    {category:"System Information", goalName: "Feature Details", parent: "Feature Information", hasSon: false, example_desc: ""},
    {category:"System Information", goalName: "Feature Step", parent: "Feature Information", hasSon: false, example_desc: ""},
    {category:"System Information", goalName: "Interface Elements", parent: "", hasSon: true, example_desc: ""},
    {category:"System Information", goalName: "Acronyms", parent: "Interface Elements", hasSon: false, example_desc: ""},
    {category:"System Information", goalName: "Symbols Design", parent: "Interface Elements", hasSon: false, example_desc: "Use of the symbol \"?\" to identify help provided by the system."},
    {category:"System Information", goalName: "Symbols Meaning", parent: "Interface Elements", hasSon: false, example_desc: "In case there is a button with the symbol \"?\" if the user put the mouse over the symbol for a while the system shows its meaning."},
    {category:"Features", goalName: "Action State", parent: "", hasSon: true, example_desc: ""},
    {category:"Features", goalName: "Next Step", parent: "Action State", hasSon: false, example_desc: "If the various steps of the car booking process are separated into different pages and the user is, for example, selecting the car model and wants to proceed to the next step (for example, entering payment data) the interface must contain an arrow-shaped button with a brief description of the next step (in this case, \"Payment\")."},
    {category:"Features", goalName: "Progress", parent: "Action State", hasSon: false, example_desc: "When booking a car, the interface should show a progress bar with the percentage of the functionality that has already been performed by the user."},
    {category:"Features", goalName: "Feedback", parent: "", hasSon: true, example_desc: "In case of incorrectly entered data in the car reservation, notify the user."},
    {category:"Features", goalName: "Success Message", parent: "Feedback", hasSon: false, example_desc: "Once the car reservation process has been completed and all data has been successfully validated, display a message indicating that the reservation was successfully made."},
    {category:"Features", goalName: "Process Oriented", parent: "", hasSon: true, example_desc: "Separate car booking functionality into different stages - Select model, Payment details, User location."},
    {category:"Features", goalName: "Modularization", parent: "Process Oriented", hasSon: false, example_desc: ""},
    {category:"Features", goalName: "Action Resumption", parent: "", hasSon: false, example_desc: "Allow the user, when booking a car, to be able to exit the functionality and later return to it, checking if he wants to continue the operation from the situation where he was previously or restart it."},
    {category:"Features", goalName: "Expectations", parent: "", hasSon: false, example_desc: ""},
    {category:"Inputs", goalName: "Options Selection", parent: "", hasSon: true, example_desc: ""},
    {category:"Inputs", goalName: "Limit Options", parent: "Options Selection", hasSon: false, example_desc: "When selecting the car model, restrict the options to the cars that are available at the time the reservation is being made."},
    {category:"Inputs", goalName: "Options Description", parent: "Options Selection", hasSon: false, example_desc: "In the car model selection process, present characteristics of each available model (car year, number of seats, type of fuel, etc.)."},
    {category:"Inputs", goalName: "Data Insertion", parent: "", hasSon: true, example_desc: ""},
    {category:"Inputs", goalName: "Data Format", parent: "Data Insertion", hasSon: false, example_desc: "When entering payment data, indicate the format in which the card number must be entered."},
    {category:"Inputs", goalName: "Information Location", parent: "Data Insertion", hasSon: false, example_desc: "When the user has to enter data related to the driving license, such as the license number, present a model image of the driving license indicating the place where the license number is."},
    {category:"Inputs", goalName: "Default Values", parent: "", hasSon: false, example_desc: "Select as the default payment method the method that has been most used by users in other software."},
    {category:"Risk Support", goalName: "Risk Support", parent: "", hasSon: true, example_desc: ""},
    {category:"Risk Support", goalName: "Critical Information", parent: "Risk Support", hasSon: false, example_desc: ""},
    {category:"Risk Support", goalName: "Risk Management", parent: "Risk Support", hasSon: false, example_desc: "When submitting the car reservation request, confirm that the user is sure that they want to make the request."},
    {category:"Alternative Ways to Achieve Goal", parent: "", goalName: "Alternative Ways to Achieve Goal", hasSon: false, example_desc: "The system can provide more than one way to make the payment (Credit card, MBWay, Paypal, etc.)."},
    


]