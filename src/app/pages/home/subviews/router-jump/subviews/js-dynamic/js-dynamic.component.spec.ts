import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDynamicComponent } from './js-dynamic.component';

describe('JsDynamicComponent', () => {
  let component: JsDynamicComponent;
  let fixture: ComponentFixture<JsDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
