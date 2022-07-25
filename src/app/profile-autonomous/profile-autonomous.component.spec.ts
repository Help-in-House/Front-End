import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAutonomousComponent } from './profile-autonomous.component';

describe('ProfileAutonomousComponent', () => {
  let component: ProfileAutonomousComponent;
  let fixture: ComponentFixture<ProfileAutonomousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAutonomousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAutonomousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
