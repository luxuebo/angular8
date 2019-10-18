import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterJumpComponent } from './router-jump.component';

describe('RouterJumpComponent', () => {
  let component: RouterJumpComponent;
  let fixture: ComponentFixture<RouterJumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterJumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
