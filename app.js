const pronoun = ["the", "our", "their"];
const adj = ["great", "big", "awesome", "ugly"];
const color = ["green", "red", "blue", "yellow"];
const noun = ["jogger", "racoon", "dog", "horse"];
for (let index = 0; index < pronoun.length; index++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < color.length; k++) {
            for (let l = 0; l < noun.length; l++) {
                console.log(pronoun[index] + adj[j] + color[k] + noun[l] + ".com");
            }
        }
    }
}