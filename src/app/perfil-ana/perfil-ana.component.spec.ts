import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAnaComponent } from './perfil-ana.component';

describe('PerfilAnaComponent', () => {
  let component: PerfilAnaComponent;
  let fixture: ComponentFixture<PerfilAnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
