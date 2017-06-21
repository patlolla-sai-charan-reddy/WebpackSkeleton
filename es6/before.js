/*... http://es6-features.org/#ComputedPropertyNames ..*/

let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}

alert("Hello");