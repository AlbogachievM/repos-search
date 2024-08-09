/**
 * Форматирует дату в строку формата DD.MM.YYYY.
 * @param currentDate - Дата в строковом формате (например, "2021-04-06T23:43:59Z").
 * @returns Строка в формате "DD.MM.YYYY".
 */
export const formatDate = (currentDate: string): string => {
    const date = new Date(currentDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

