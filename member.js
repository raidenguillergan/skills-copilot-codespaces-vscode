function skillsMember() {
    var member = {
        name: "John Doe",
        age: 25,
        skills: ["JS", "HTML", "CSS"]
    };
    return member;
}


function diameter() {
    var circle = {
        radius: 10,
        diameter: function() {
            return this.radius * 2;
        }
    };
    return circle.diameter();
}