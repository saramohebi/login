import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educationpage } from './educationpage';

describe('Educationpage', () => {
  let component: Educationpage;
  let fixture: ComponentFixture<Educationpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Educationpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Educationpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
