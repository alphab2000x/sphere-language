import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSphereComponent } from './word-sphere.component';

describe('WordSphereComponent', () => {
  let component: WordSphereComponent;
  let fixture: ComponentFixture<WordSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordSphereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
