module.exports = function toReadable(number) {
    if ((number = number.toString()).length > 3) return 'more then 999';

    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let b = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return a[number];
    }
    if (number >= 20 && number < 100) {
        if (+(String(number)[1]) === 0) {
            return b[+(String(number)[0])];
        } else {
            return b[+(String(number)[0])] + ' ' + a[+(String(number)[1])];
        }
    }
    if (number >= 100 && number < 1000) {
        if (+(String(number)[1]) === 0 && +(String(number)[2]) === 0) {
            return a[+(String(number)[0])] + ' hundred';
        } else if (+(String(number)[2]) === 0) {
            return a[+(String(number)[0])] + ' hundred ' + b[+(String(number)[1])];
        } else {
            if (+(String(number)[1]) === 0) {
                return a[+(String(number)[0])] + ' hundred ' + a[+(String(number)[2])];
            } else {
                if (+(String(number)[1]) === 1) {
                    return a[+(String(number)[0])] + ' hundred ' + a[10 + +(String(number)[2])];
                } else {
                    return a[+(String(number)[0])] + ' hundred ' + b[+(String(number)[1])] + ' ' + a[+(String(number)[2])];
                }
            }
        }
    }
}
