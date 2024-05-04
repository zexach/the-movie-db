export const dateToLocaleString = (date: string) => {
    const dateString: string = date !== '' ? new Date(date).toDateString().substring(4) : '';
    return dateString;
}