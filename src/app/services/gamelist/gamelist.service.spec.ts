import { TestBed } from '@angular/core/testing';

import { GameListComponent} from "../../components/gamelist/gamelist.component";

describe('GamelistService', () => {
  let service: GameListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameListComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
