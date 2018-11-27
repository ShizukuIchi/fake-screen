import dayjs from 'dayjs';

export function getDay(d) {
  return dayjs().add(d, 'day');
}

export function formatHintDay(day) {
  return day.format('M/D/YYYY HH:mm:ss');
}
export class CountDowner {
  constructor(time) {
    this.day = time.day;
    this.hour = time.hour;
    this.minute = time.minute;
    this.second = time.second;
    this.stopped = false;
    this.callbacks = {
      day: [],
      hour: [],
      minute: [],
      second: [],
      stop: [],
    };
    this.tick = this.tick.bind(this);
  }

  mday() {
    this.triggerCallback('day');
    if (this.day) {
      this.day -= 1;
      this.hour = 23;
      this.minute = 59;
      this.second = 59;
    } else {
      this.stopped = true;
    }
  }
  mhour() {
    this.triggerCallback('hour');
    if (this.hour) {
      this.hour -= 1;
      this.minute = 59;
      this.second = 59;
    } else {
      this.mday();
    }
  }
  mminute() {
    this.triggerCallback('minute');
    if (this.minute) {
      this.minute -= 1;
      this.second = 59;
    } else {
      this.mhour();
    }
  }
  msecond() {
    this.triggerCallback('second');
    if (this.second) {
      this.second -= 1;
    } else {
      this.mminute();
    }
  }
  tick() {
    this.msecond();
    if (this.stopped) {
      clearInterval(this.interval);
      this.triggerCallback('stop');
    }
  }
  stop() {
    this.stopped = true;
    clearInterval(this.interval);
  }
  on(str, cb) {
    switch (str) {
      case 'second':
      case 'minute':
      case 'hour':
      case 'day':
      case 'stop':
        this.callbacks[str].push(cb);
        break;
      default:
        throw new Error(`no ${str} type callback`);
    }
  }
  triggerCallback(str) {
    this.callbacks[str].forEach(cb => cb());
  }
  start() {
    this.interval = setInterval(this.tick, 1000);
  }
  format() {
    let { day, hour, minute, second } = this;
    day = (day < 10 ? '0' : '') + day;
    hour = (hour < 10 ? '0' : '') + hour;
    minute = (minute < 10 ? '0' : '') + minute;
    second = (second < 10 ? '0' : '') + second;
    return `${day}:${hour}:${minute}:${second}`;
  }
}
