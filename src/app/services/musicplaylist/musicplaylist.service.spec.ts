import { TestBed } from '@angular/core/testing';
import { MusicPlaylistService } from './musicplaylist.service';

describe('MusicplaylistService', () => {
  let service: MusicPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
