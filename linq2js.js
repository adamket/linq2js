Array.prototype.First = function () {
    if (this.length === 0) {
        throw new Error("Sequence contains no elements");
    }
    return this[0];
};

Array.prototype.FirstOrDefault = function (predicate) {
    for (let i = 0; i < this.length; i++) {
        if (!predicate || predicate(this[i])) {
            return this[i];
        }
    }
    return null;
};

Array.prototype.Last = function () {
    if (this.length === 0) {
        throw new Error("Sequence contains no elements");
    }
    return this[this.length - 1];
};

Array.prototype.LastOrDefault = function (predicate) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (!predicate || predicate(this[i])) {
            return this[i];
        }
    }
    return null;
};

Array.prototype.Select = function (selector) {
    return this.map(selector);
};

Array.prototype.SelectMany = function (selector) {
    return this.flatMap(selector);
};

Array.prototype.Sum = function(selector) {
  if (typeof selector === 'function') {
    return this.map(selector).reduce((acc, val) => acc + val, 0);
  } else {
    return this.reduce((acc, val) => acc + val, 0);
  }
};
