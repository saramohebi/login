import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messageboxpage } from './messageboxpage';

describe('Messageboxpage', () => {
  let component: Messageboxpage;
  let fixture: ComponentFixture<Messageboxpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messageboxpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messageboxpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
