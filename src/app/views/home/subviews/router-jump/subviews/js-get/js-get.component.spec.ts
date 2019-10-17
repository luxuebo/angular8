import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsGetComponent } from './js-get.component';

describe('JsGetComponent', () => {
  let component: JsGetComponent;
  let fixture: ComponentFixture<JsGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
