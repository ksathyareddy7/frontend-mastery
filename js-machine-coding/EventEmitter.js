class EventEmitter {
  constructor() {
    this.topics = {};
  }

  on(topic, callback) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(callback);
    return this;
  }

  emit(topic, data) {
    if (!this.topics[topic]) {
      return new Error(`${topic} is not registerd`);
    }
    this.topics[topic].forEach((callback) => callback(data));
    return this;
  }

  removeListener(event, listener) {
    if (this.events[event]) {
      const index = this.events[event].indexOf(listener);
      if (index !== -1) {
        this.events[event].splice(index, 1);
      }
    }
    return this;
  }

  removeAllListeners(event) {
    if (this.events[event]) {
      this.events[event] = [];
    }
    return this;
  }

  listeners(event) {
    return this.events[event] || [];
  }

  once(event, listener) {
    const onceListener = (...args) => {
      listener(...args);
      this.removeListener(event, onceListener);
    };
    this.on(event, onceListener);
    return this;
  }
}

const emitter = new EventEmitter();

emitter.on("new_post", (data) => {
  console.log(data);
});

emitter.emit("new_post", "hello world");
