module.exports = function check(str, bracketsConfig) {
    let flag = true;
    let count = 0;
    do {
        count = 0;
        for (let i = 0; i < bracketsConfig.length; i++) {
            brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            position = str.indexOf(brackets);
            str = str.split(brackets).join('');
            if (position >= 0) {
                count++;
            }
        }
    } while (count > 0);

    if (str.length > 0) {
        return false;
    } else {
        return true;
    }
}