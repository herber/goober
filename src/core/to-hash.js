/**
 * Transforms the input into a className.
 * The multiplication constant 101 is selected to be a prime,
 * as is the initial value of 11.
 * The intermediate and final results are truncated into 32-bit
 * unsigned integers.
 * @param {String} str
 * @returns {String}
 */
export let toHash = (str) => {
    let i = 0,
        l = str.length,
        out = 11;
    while (i < l) out = (101 * out + str.charCodeAt(i++)) >>> 0;
    return 'bt_' + out.toString(36);
};
