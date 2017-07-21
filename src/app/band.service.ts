import { Injectable } from '@angular/core';
import { Band } from './band.model';

@Injectable()
export class BandService {

  constructor() { }

  getBands() {

    return [
      {
        id: 1,
        name: "The Rolling Stones",
        description: "The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2​ Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.",
        img: "assets/img/therollingstones.jpg",
        videoId: "qEuV82GqQnE",
        slug: "the-rolling-stones"
      },
      {
        id: 2,
        name: "The Beatles",
        description: "The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y la más alabada por la crítica en la historia de la música popular.1​2​3​4​5​ Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años 1950, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.",
        img: "assets/img/thebeatles.jpg",
        videoId: "NCtzkaL2t_Y",
        slug: "the-beatles"
      },
      {
        id: 3,
        name: "Queen",
        description: "Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa",
        img: "assets/img/queen.jpg",
        videoId: "HgzGwKwLmgM",
        slug: "queen"
      }
    ]

  }



}


