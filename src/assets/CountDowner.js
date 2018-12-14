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
    this.origin = new Date();
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
  progress() {
    const percentage = this.timeDiff / (this.till.getTime() - this.origin);
    return percentage < 0 ? 0 : percentage;
  }
  formatLast() {
    return this.getLast()
      .map(e => this.toFixStr(e))
      .join(':');
  }
  formatFromCB(cb) {
    return () => {
      return cb(this.getLast());
    };
  }
  getLast() {
    const diffDays = Math.floor(this.timeDiff / (1000 * 3600 * 24));
    const diffHours = Math.floor(this.timeDiff / (1000 * 3600));
    const diffMinutes = Math.floor(this.timeDiff / (1000 * 60));
    const diffSeconds = Math.floor(this.timeDiff / 1000);
    return [
      diffDays,
      diffHours - diffDays * 24,
      diffMinutes - diffHours * 60,
      diffSeconds - diffMinutes * 60,
    ];
  }
  start() {
    this.timeDiff = this.till.getTime() - new Date().getTime();
    this.interval = setInterval(() => {
      this.timeDiff = this.till.getTime() - new Date().getTime();
      if (this.timeDiff < 0) {
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
