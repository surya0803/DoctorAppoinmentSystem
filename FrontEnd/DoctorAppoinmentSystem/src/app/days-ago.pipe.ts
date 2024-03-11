import { Pipe, PipeTransform } from '@angular/core';
interface TimeIntervals {
  [unit: string]: number;
}
@Pipe({
  name: 'daysAgo',
  pure: true
})
export class DaysAgoPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return 'Date information unavailable';
    }

    const timeIntervals: TimeIntervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };

    const now = new Date().getTime();
    const date = (value instanceof Date) ? value.getTime() : new Date(value).getTime();
    const secondsElapsed = Math.floor((now - date) / 1000);
    let counter: number;

    for (const i in timeIntervals) {
      if (timeIntervals.hasOwnProperty(i)) {
        counter = Math.floor(secondsElapsed / timeIntervals[i]);
        if (counter > 0) {
          if (counter === 1) {
            return `1 ${i} ago`;
          } else {
            return `${counter} ${i}s ago`;
          }
        }
      }
    }
    return 'just now';
  }
}
