import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import TagCloud, { TagCloudOptions } from "TagCloud";

// Décorateur du composant
@Component({
  selector: 'app-word-sphere',
  templateUrl: './word-sphere.component.html',
  styleUrls: ['./word-sphere.component.scss']
})
export class WordSphereComponent implements OnInit, AfterViewInit {
  // Tableau des mots à afficher dans le nuage de mots
  texts = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'React',
    'Vue',
    'Nuxt',
    'NodeJS',
    'Babel',
    'Jquery',
    'ES6',
    'GIT',
    'GITHUB',
  ];

  // Injecter ElementRef pour accéder au DOM du composant
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Rien à faire ici pour l'instant
  }

  // Fonction qui s'exécute après l'initialisation du composant
  ngAfterViewInit(): void {
    // Sélectionner l'élément DOM ayant la classe 'tagcloud'
    const container = this.el.nativeElement.querySelector('.tagcloud');

    // Définir les options pour la bibliothèque TagCloud
    const options: TagCloudOptions = {
      radius: 300, // Rayon de la sphère en pixels
      deceleration: 0.95,
      maxSpeed: 'fast', // Vitesse maximale de rotation
      initSpeed: 'fast', // Vitesse initiale de rotation
      keep: true, // Garder l'animation en boucle
    };

    // Initialiser la bibliothèque TagCloud avec l'élément container, les mots et les options
    TagCloud(container, this.texts, options);
  }
}
