# Rock, Paper, Scissors, Lizard, Spock!

This is a basic REST API that allows a user to play the game Rock, Paper, Scissors, Lizard, Spock against a computer opponent.

It was created using node.js and Express. 

## Getting Started

```
1. Clone this repository
```
```
2. Open terminal and cd. into the root directory of the project (game-project)
```
```
3. Type 'npm start' to start the REST API
```
```
4. Access endpoints at http://localhost:3000. Please see the section titled "endpoints" for the list of possibilities.
```
```
5. You can either use an application such as Postman to access the endpoints, or paste the base URL into https://codechallenge.boohma.com/
```
```
6. control + c will stop your project running and free up localhost 3000 once you are finished! Good luck!
```

## Endpoints

```
1. "/" Home page. Displays a basic JSON message welcoming you to the application. Accepts a GET request
```
```
2. "/choices". Displays a list of all choices in JSON format. Accepts a GET request.
```
```
3. "/choice". Selects and displays a random choice in JSON format. Accept a GET request.
```
```
4. "/play". Play Rock, Paper, Scissors, Lizard, Spock against a computer opponent! Accepts a POST request with a JSON body in the following format:

{
	"player": 5
}

returns a JSON object describing the results of your match!

```

## Endpoints

```
1. "/" Home page. Displays a basic JSON message welcoming you to the application. Accepts a GET request
```
```
2. "/choices". Displays a list of all choices in JSON format. Accepts a GET request.
```
```
3. "/choice". Selects and displays a random choice in JSON format. Accept a GET request.
```
```
4. "/play". Play Rock, Paper, Scissors, Lizard, Spock against a computer opponent! Accepts a POST request with a JSON body in the following format:

{
	"player": 5
}

returns a JSON object describing the results of your match!

```

## Dictionary

A JSON file is used for the "database" of potential options. This file can be found in game-project -> resources -> choices.json. A list of choices and corresponding identifiers is also listed here for ease of use.

```
Rock: 1
Paper: 2
Scissors: 3
Lizard: 4
Spock: 5

```

### Credits

I would like to credit the following content creator, whose videos I used to learn more about node.js and better complete this project: 

```
https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q
```

Please note that all code was written by hand using my own ideas, but I did use this playlist to learn how to set up routes, handle exceptions, etc. :)


## Other Information

This was a lovely project, thank you so much for the opportunity!

