# Fiona's Zoo

#### An app for displaying information about animals in a zoo using Angular.

#### By Jared Eiseman

## Description
An application for "Zoo Employees" to be able to view, add, and edit information about animal residents of the zoo using the Angular JavaScript framework.

## Planning

### User Story
* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
* I want to view a list of animals I have logged.
* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
* I want to click an animal to edit its name, age or caretakers.

### Specs
The app will have a model for maintaining the structure of animals objects
* Example Input: new Animal('Grizzly Bear', 'Yogi', 7, 'Carnivore', 'Northern Trail', 2, 'Male', 'Hibernating', 'Not having any honey');
Example Output: Animal { species: 'Grizzly Bear', name: 'Yogi', age: 7, diet: 'Carnivore', location: 'Northern Trail', age: 2, sex: 'Male', likes: 'Hibernating', dislikes: 'Not having any honey'}

The app will be able to display all animals listed within the animals data in app component to the screen
* Example Input: <animal-list></animal-list>
* Example Output: All animals from within AppComponent.animals displayed to screen.

The app will have a form to allow users to add new animals to the list in AppComponent from within an AddAnimals component
* Example Input: User fills out form with all required fields from the Animal Model
* Example Output: new Animal object pushed to animals array

The app will utilize a pipe to allow the user to sort the displayed animals in animal-list to filter display by age
* Example Input: "let animal of animals | filterByAge:2"
* Example Output: only animals age 2 or greater are displayed

The app will allow the user to edit information about animals that are displayed to update/correct information
* Example Input: user clicks edit button
* Example Output: Form appears with pre-filled inputs to edit information.

## Setup/Installation Requirements

* Clone the repository (https://github.com/jaredeiseman/local-zoo.git)
* Run 'npm install' in your chosen terminal application
* Run 'bower install' in your chosen terminal application
* Run 'gulp serve' in your chosen terminal application, then wait for your browser to be opened to the appropriate page.

## Known Bugs

There are no known bugs at this time.

## Support and contact details

For feedback or support contact Jared Eiseman at jathei@gmail.com.

## Technologies Used

* HTML
* CSS
* Sass
* JavaScript
* Angular
* NPM
* Bower
* Gulp

### License

MIT

Copyright (c) 2017 Jared Eiseman
