import { spawn } from 'child_process';
import { writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import chalk from 'chalk';
const timerFile = '.timer.json', session = {};
const saveNewSession = async () => await writeFile(timerFile, JSON.stringify([...JSON.parse(await readFile(timerFile, 'utf8')), session]));
const createIfNotExists = async () => !existsSync(timerFile) ? await writeFile(timerFile, JSON.stringify([])) : null;
const fillIfEmpty = async () => !await readFile(timerFile, 'utf8') && await writeFile(timerFile, JSON.stringify([]));

const nextDev = async () => {
    session.start = Date.now();
    const spawned = spawn('next', ['dev', '--turbopack']);

    spawned.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    spawned.stderr.on('data', (data) => {
        process.stderr.write(`${data}`);
    });

    spawned.on('close', async (code) => {
        process.stdout.err(`child process exited with code ${code}`);
        await saveSessionAndExit();
    });

    const saveSessionAndExit = async () => {
        session.end = Date.now();
        await saveNewSession();
    };

    process.on('SIGINT', async () => {
        console.log('Saving...');
        await saveSessionAndExit();
        process.exit();
    });
}

const report = async () => {
    const data = await readFile('.timer.json', 'utf8');
    const sessions = JSON.parse(data);
    const total = sessions.reduce((acc, session) => acc + (session.end - session.start), 0);

    const seconds = Math.floor(total / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    console.log('⌛️ Timer Report:\n');

    console.log(chalk.magenta('\tHours:\t\t', hours));
    console.log(chalk.cyan('\tMinutes:\t', minutes % 60));
    console.log(chalk.blue('\tSeconds:\t', seconds % 60));

    if (process.argv[3]) {
        const hourlyCost = process.argv[3];
        const cost = hourlyCost * (total / 3600000);
        console.log(chalk.green(`\n\tMoney:\t\t€${cost.toFixed(2)}`));
    }

    console.log('\nTotal Sessions:\t', sessions.length);
}

createIfNotExists();
fillIfEmpty();

const COMMAND = process.argv[2];

if (!COMMAND) {
    nextDev();
}

else if (COMMAND === 'report') {
    report();
}