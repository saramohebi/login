import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skillspage } from './skillspage';

describe('Skillspage', () => {
  let component: Skillspage;
  let fixture: ComponentFixture<Skillspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skillspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skillspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
