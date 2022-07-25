import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAutonomousComponent } from './register-autonomous.component';

describe('RegisterAutonomousComponent', () => {
  let component: RegisterAutonomousComponent;
  let fixture: ComponentFixture<RegisterAutonomousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAutonomousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAutonomousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
