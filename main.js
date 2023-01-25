const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과 백두산이 마르고 닳도록
`


// const regexp = new RegExp("the","gi");
// const regexp = /fox/gi;
// console.log(regexp.test(str));
// console.log(str.match(/\.$/gi));
// console.log(str.replace(/fox/gi, "AAA"));
// console.log(str.match(/fox|qwfq/g));
// console.log(str.match(/\b\w{2,3}\b/g));
// console.log(str.match(/[가-힣]{1,}/g));
// console.log(str.match(/\bf\w{1,}\b/g));
const h = ` the hello world



`;

console.log(h.replace(/\s/g,""));
console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));