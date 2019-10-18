import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDynamicComponent } from './link-dynamic.component';

describe('LinkDynamicComponent', () => {
  let component: LinkDynamicComponent;
  let fixture: ComponentFixture<LinkDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
