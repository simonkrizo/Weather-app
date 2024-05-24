
interface IdateBuilder<T,U> {
    dayOfWeek: T;
    dayOfMonth: U;
    monthName: T;
}



export const dateBuilder = (): string => {
    const d = new Date();
    const months:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const dayOfWeek: string = days[d.getDay()];
    const dayOfMonth: number = d.getDate();
    const monthName: string = months[d.getMonth()];

    const dateObj: IdateBuilder<string, number> = {
        dayOfWeek,
        dayOfMonth,
        monthName
    };

    return `${dateObj.dayOfWeek}, ${dateObj.dayOfMonth} ${dateObj.monthName}`;
}