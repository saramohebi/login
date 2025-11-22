import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Languagepage } from './languagepage';

describe('Languagepage', () => {
  let component: Languagepage;
  let fixture: ComponentFixture<Languagepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Languagepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Languagepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
