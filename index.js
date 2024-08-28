#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuel_decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuel_increase() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuel_decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
console.log(chalk.bold.yellow("\t... Welcome to Adventure Game ... \t"));
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        message: "Select Your Opponent:",
        type: "list",
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
]);
// Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Opponent => Skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you Want:",
                choices: ["Attack", "Drink Portion", "Run For Your Life", "Exit"]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck for your Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("Congrats,You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuel_increase();
            console.log(chalk.bold.italic.green(`You Drink Helath Portion.Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt === "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck for your Next Time!"));
            process.exit();
        }
        if (ask.opt === "Exit") {
            console.log(chalk.bold.blue("\t Exiting... \t"));
            process.exit();
        }
    }
    // Opponent => Assassin
    if (opponent.select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you Want:",
                choices: ["Attack", "Drink Portion", "Run For Your Life", "Exit"]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck for your Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("Congrats,You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuel_increase();
            console.log(chalk.bold.italic.green(`You Drink Helath Portion.Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt === "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck for your Next Time!"));
            process.exit();
        }
        if (ask.opt === "Exit") {
            console.log(chalk.bold.blue("\t Exiting... \t"));
            process.exit();
        }
    }
    // Opponent => Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you Want:",
                choices: ["Attack", "Drink Portion", "Run For Your Life", "Exit"]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck for your Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("Congrats,You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuel_increase();
            console.log(chalk.bold.italic.green(`You Drink Helath Portion.Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt === "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck for your Next Time!"));
            process.exit();
        }
        if (ask.opt === "Exit") {
            console.log(chalk.bold.blue("\t Exiting... \t"));
            process.exit();
        }
    }
} while (true);
