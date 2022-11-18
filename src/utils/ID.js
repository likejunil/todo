export default class ID {
    static id = 100;
    
    static getId() {
        return this.id++;
    }
}