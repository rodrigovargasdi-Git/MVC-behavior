/**
 * Fotos (Quelle: Visual-library, umbenannt). Solange site.photosAreSamples = true, zeigt der Footer
 * einen Hinweis „Beispielbilder“. Keine Kinder, keine Klient:innen, kein Foto 14 (Einwilligung fehlt).
 * Ersetzen: Datei gleichen Namens in src/assets/photos/ ablegen (≥ 1600 px Breite empfohlen) und neu bauen.
 */
import type { ImageMetadata } from 'astro';
import type { PhotoKey } from '../content/types';
import studio from '../assets/photos/marija-portrait-studio.jpg';
import berlin from '../assets/photos/marija-portrait-berlin.jpg';
import coast from '../assets/photos/marija-portrait-coast.jpg';
import officeBeige from '../assets/photos/marija-portrait-office-beige.jpg';
import officeNavy from '../assets/photos/marija-portrait-office-navy.jpg';
import corridorNavy from '../assets/photos/marija-portrait-corridor-navy.jpg';
import duo from '../assets/photos/team-duo-office.jpg';
import duoBeige from '../assets/photos/team-duo-office-beige.jpg';
import realSmile from '../assets/photos/marija-real-smile.jpg';
import realGarden from '../assets/photos/marija-real-garden.jpg';

export const photos: Record<PhotoKey, ImageMetadata> = {
  studio,
  berlin,
  coast,
  officeBeige,
  officeNavy,
  corridorNavy,
  duo,
  duoBeige,
  realSmile,
  realGarden,
};

/** Echte Fotos (nicht KI-generiert). */
export const realPhotos: PhotoKey[] = ['realSmile', 'realGarden'];
