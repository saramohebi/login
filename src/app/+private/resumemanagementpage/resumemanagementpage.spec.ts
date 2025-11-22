import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resumemanagementpage } from './resumemanagementpage';

describe('Resumemanagementpage', () => {
  let component: Resumemanagementpage;
  let fixture: ComponentFixture<Resumemanagementpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resumemanagementpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resumemanagementpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
