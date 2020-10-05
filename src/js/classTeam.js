export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const sizeTeam = this.members.size;
    this.members.add(character);
    if (sizeTeam === this.members.size) {
      throw new Error('Вы пытаетесь добавить существующего участника!');
    }
  }

  addAll(...character) {
    character.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
