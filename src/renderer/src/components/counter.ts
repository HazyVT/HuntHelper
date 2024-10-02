export default class Counter {
  public time
  public pokemon
  public encounters

  constructor(time: number[], pokemon: string, encounters: number) {
    this.time = time
    this.pokemon = pokemon
    this.encounters = encounters
  }

  getJson(): { time: number[]; pokemon: string; encounters: number } {
    return {
      time: this.time,
      pokemon: this.pokemon,
      encounters: this.encounters
    }
  }
}
