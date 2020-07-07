module.exports.makePlayer = (dependencies) => ({ name, age, position }) => {
    this.name = name;
    this.age = age;
    this.position = position;

    if (!this.name) {
        throw new Error('Player must have a name');
    }
    
    if (typeof this.age !== 'number') {
        throw new Error('Age must be a number');
    }

    if (!this.position) {
        throw new Error('Player must have a number');
    }

    return Object.freeze({
        getName: () => this.name,
        getAge: () => this.age,
        getPosition: () => this.position,
        toJSON: () => ({
            name: this.name,
            age: this.age,
            position: this.position
        })
    });
}