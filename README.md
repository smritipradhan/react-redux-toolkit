# Redux Toolkit

Redux Challenges and Introducing Redux Toolkit.

1. Mistype the Action Identifiers in Complex Project (We could create constants for solution)
2. More Data we have , more pieces of states we have.Copy a lot of states and keep all of the state properties and the reducer function becomes longer and longer. (Third party packages which allow you to copy state and not modify it accidentally)
3. State Immutability - We have to make sure that we return a brand new State Snapshot and we dont accidently change the existing state anywhere.And we dont accidently change any nested data. Its hard to maintain.

Instead there is another solution to the problem - Redux Toolkit which is developed by the same team which developed Redux.Redux toolkit is simply an extra package which makes working with Redux more convenient and easier.

## Get Started with Redux Toolkit

1 . npm install @reduxjs/toolkit
