import { Component } from '@angular/core';
import { PokeapiService } from '../../api/servicio/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  public pokemones : any = [];

  constructor(public _pokeApiService : PokeapiService){}

  ngOnInit(): void {
    this.getTodosPokemones();
  }

  getTodosPokemones = () =>{
    let pokemon;
    for (let index = 0; index <= 100; index++) {
      this._pokeApiService.getPokemones(index).subscribe((data:any) =>{
        console.log(data);
        pokemon = {
          indice : index,
          name : data.name,
          img : data.sprites.front_default,
          weight: data.weight,
          type: data.types[0].type.name,
          stats: {
            statHP : {
              name: data.stats[0].stat.name,
              base_stat: data.stats[0].base_stat
            },
            statsAttack: {
              name: data.stats[1].stat.name,
              base_stat: data.stats[1].base_stat
            },
            statsDefense:{
              name: data.stats[2].stat.name,
              base_stat: data.stats[2].base_stat
            },
            statsSpeed:{
              name: data.stats[5].stat.name,
              base_stat: data.stats[5].base_stat
            }
          }
        }
        this.pokemones.push(pokemon);
      });      
    }
    console.log(this.pokemones);
  }
}
