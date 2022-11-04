export function join(input: string[], separator = ' '): string {
    return input.filter((x) => x).join(separator)
}
