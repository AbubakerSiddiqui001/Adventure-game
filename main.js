#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.italic.blueBright(" \n \t Wellcome to Adventure Game \n"));
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncreare() {
        this.fuel = 100;
    }
}
class opposite {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let Player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your Name: "
    },
]);
let Opposition = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent",
        choices: ["Aliens", "Zombies", "Skeleton"]
    }
]);
let p1 = new player(chalk.red(Player.name));
let o1 = new opposite(Opposition.select);
do {
    // Applying Aliens
    if (Opposition.select == "Aliens") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do ?",
                choices: ["Attack", "Increase fuels", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(` \n ${chalk.blueBright(p1.name)} your fuel is ${chalk.yellowBright(p1.fuel)}`);
                console.log(` \n ${chalk.blueBright(o1.name)} fuel is ${chalk.yellowBright(o1.fuel)} \n`);
                if (p1.fuel <= 0) {
                    console.log(`${chalk.blueBright(p1.name)}`, chalk.bgMagenta(`You loose , Better luck next time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(` \n ${chalk.blueBright(p1.name)} your fuel is ${chalk.yellowBright(p1.fuel)}`);
                console.log(` \n ${chalk.blueBright(o1.name)} fuel is ${chalk.yellowBright(o1.fuel)} \n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgMagenta("\n Congratulations! You win \t"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Increase fuels") {
            p1.fuelIncreare();
            console.log(chalk.blueBright(` \n You increase your current fuels & your fuels is`), `${chalk.yellowBright(p1.fuel)} \n`);
        }
        if (ask.opt == "Run for your life") {
            console.log(` \n ${chalk.blueBright(p1.name)}`, `You loose , Better luck next time \n`);
            process.exit();
        }
    }
    // Applying Zombies 
    if (Opposition.select == "Zombies") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do ?",
                choices: ["Attack", "Increase fuels", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(` \n ${chalk.blueBright(p1.name)} your fuel is ${chalk.yellowBright(p1.fuel)}`);
                console.log(` \n ${chalk.blueBright(o1.name)} fuel is ${chalk.yellowBright(o1.fuel)} \n`);
                if (p1.fuel <= 0) {
                    console.log(`${chalk.blueBright(p1.name)}`, chalk.bgMagenta(`You loose , Better luck next time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(` \n ${chalk.blueBright(p1.name)} your fuel is ${chalk.yellowBright(p1.fuel)}`);
                console.log(` \n ${chalk.blueBright(o1.name)} fuel is ${chalk.yellowBright(o1.fuel)} \n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgMagenta("\n Congratulations! You win \t"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Increase fuels") {
            p1.fuelIncreare();
            console.log(chalk.blueBright(` \n You increase your current fuels & your fuels is`), `${chalk.yellowBright(p1.fuel)} \n`);
        }
        if (ask.opt == "Run for your life") {
            console.log(` \n ${chalk.blueBright(p1.name)}`, `You loose , Better luck next time \n`);
            process.exit();
        }
    }
    // Applying Skeleton
    if (Opposition.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do ?",
                choices: ["Attack", "Increase fuels", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(` \n ${chalk.blueBright(p1.name)} your fuel is ${chalk.yellowBright(p1.fuel)}`);
                console.log(` \n ${chalk.blueBright(o1.name)} fuel is ${chalk.yellowBright(o1.fuel)} \n`);
                if (p1.fuel <= 0) {
                    console.log(`${chalk.blueBright(p1.name)}`, chalk.bgMagenta(`You loose , Better luck next time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(` \n ${chalk.blueBright(p1.name)} your fuel is ${chalk.yellowBright(p1.fuel)}`);
                console.log(` \n ${chalk.blueBright(o1.name)} fuel is ${chalk.yellowBright(o1.fuel)} \n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgMagenta("\n Congratulations! You win \t"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Increase fuels") {
            p1.fuelIncreare();
            console.log(chalk.blueBright(` \n You increase your current fuels & your fuels is`), `${chalk.yellowBright(p1.fuel)} \n`);
        }
        if (ask.opt == "Run for your life") {
            console.log(` \n ${chalk.blueBright(p1.name)}`, `You loose , Better luck next time. \n`);
            process.exit();
        }
    }
} while (true);
