export function getPrimeDividors(num: number): number[] {
    const divs: number[] = [];

    let i = 2;

    while (i * i <= num) {
        while (num % i === 0) {
            divs.push(i);
            num /= i;
        }
        i++;
    }

    if (num > 1) {
        divs.push(num);
    }

    return divs;
}
