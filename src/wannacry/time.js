import dayjs from 'dayjs';

export function getDay(d) {
  return dayjs().add(d, 'day');
}

export function formatHintDay(day) {
  return day.format('M/D/YYYY HH:mm:ss');
}

export class Timer {
  constructor(day) {
    this.day = day;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.isTimeUp = false;
  }
  tick() {
    if (this.isTimeUp) return;
    if (this.second === 0) {
      if (this.minute === 0) {
        if (this.hour === 0) {
          if (this.day === 0) {
            this.isTimeUp = true;
            return false;
          }
          this.hour = 23;
          this.minute = 59;
          this.second = 59;
          this.day -= 1;
          return true;
        }
        this.minute = 59;
        this.second = 59;
        this.hour -= 1;
        return true;
      }
      this.second = 59;
      this.minute -= 1;
      return true;
    }
    this.second -= 1;
    return true;
  }
  format() {
    const day = (this.day > 9 ? '' : '0') + this.day.toString();
    const hour = (this.hour > 9 ? '' : '0') + this.hour.toString();
    const minute = (this.minute > 9 ? '' : '0') + this.minute.toString();
    const second = (this.second > 9 ? '' : '0') + this.second.toString();
    return `${day}:${hour}:${minute}:${second}`;
  }
}
