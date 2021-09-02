export class Stage{
  address:string[] = [
    "./assets/img/Hyrule_Castle2.jpg",
    "./assets/img/brinstar2.png",
    "./assets/img/corneria2.jpg",
    "./assets/img/dream-lands2.png",
    "./assets/img/jungle2.jpg",
    "./assets/img/peach_castle2.png",
    "./assets/img/Saffron_City2.jpg"
  ];

  constructor(){}

  getStageById(id:number): string{
    return this.address[id];
  }

}
