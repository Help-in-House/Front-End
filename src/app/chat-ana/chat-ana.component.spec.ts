import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAnaComponent } from './chat-ana.component';

describe('ChatAnaComponent', () => {
  let component: ChatAnaComponent;
  let fixture: ComponentFixture<ChatAnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
