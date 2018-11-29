class CountDowner {
  constructor(till) {
    till.setSeconds(till.getSeconds() + 1);
    this.till = till;
    this.callbacks = {
      stop: [],
      second: [],
    };
    this.toFixStr = this.toFixStr.bind(this);
    this.interval = null;
    this.start();
  }
  formatTill() {
    const year = this.till.getFullYear();
    const month = this.till.getMonth() + 1;
    const date = this.till.getDate();
    const hour = this.till.getHours();
    const minute = this.till.getMinutes();
    const second = this.till.getSeconds();
    return (
      [month, date, year].map(s => this.toFixStr(s)).join('/') +
      ' ' +
      [hour, minute, second].map(s => this.toFixStr(s)).join(':')
    );
  }
  toFixStr(s) {
    return (s < 10 ? '0' : '') + s;
  }
  formatLast() {
    const timeDiff = Math.abs(this.till.getTime() - new Date().getTime());
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const diffHours = Math.floor(timeDiff / (1000 * 3600));
    const diffMinutes = Math.floor(timeDiff / (1000 * 60));
    const diffSeconds = Math.floor(timeDiff / 1000);
    return [
      diffDays,
      diffHours - diffDays * 24,
      diffMinutes - diffHours * 60,
      diffSeconds - diffMinutes * 60,
    ]
      .map(e => this.toFixStr(e))
      .join(':');
  }
  start() {
    this.interval = setInterval(() => {
      if (new Date().getTime() - this.till.getTime() > 0) {
        this.stop();
      } else {
        this.callbacks.second.forEach(cb => cb());
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.interval);
    this.callbacks.stop.forEach(cb => cb());
  }
  on(str, cb) {
    if (str in this.callbacks) {
      this.callbacks[str].push(cb);
    } else {
      throw Error(`no ${str} type callback`);
    }
  }
}

export default CountDowner;
