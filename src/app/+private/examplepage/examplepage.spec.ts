import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examplepage } from './examplepage';

describe('Examplepage', () => {
  let component: Examplepage;
  let fixture: ComponentFixture<Examplepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Examplepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Examplepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
