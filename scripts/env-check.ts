import chalk from 'chalk';

export function envCheck() {
    console.log(chalk.blue('Warm-up script started...'));

    const ENV: { [key: string]: string } = {
        UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL ?? '',
        UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
        HOST_URL: process.env.HOST_URL ?? '',
        PROTECTED_KEY_SECRET: process.env.PROTECTED_KEY_SECRET ?? ''
    }

    const NOT_SET_ENVS = Object.entries(ENV).filter(([_, value]) => !value);
    if (NOT_SET_ENVS.length > 0) {
        console.error(chalk.red('The following environment variables are not set:'));
        NOT_SET_ENVS.forEach(([key]) => {
            console.error(chalk.red(`- ${key}`));
        });
    }

    else {
        console.log(chalk.green('All required environment variables are set.'));
    }
}

