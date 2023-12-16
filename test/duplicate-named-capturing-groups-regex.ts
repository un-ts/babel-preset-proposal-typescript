const re = /(?<year>\d{4})-(?<month>\d{2})|(?<month>\d{2})-(?<year>\d{4})/

export default (input: string) => re.exec(input)!.groups!.year
