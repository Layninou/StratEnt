import { Game } from '../objects/game';
import { POLITIC } from './politics.const';
import { STUDIES } from './studies.const';

export const NULL_GAME: Game = {
  round: 0,
  teams: [],
  allProduct: [],
  politic: POLITIC,
  studies: STUDIES
}
