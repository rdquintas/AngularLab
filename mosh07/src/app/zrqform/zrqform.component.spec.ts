import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZrqformComponent } from './zrqform.component';

describe('ZrqformComponent', () => {
  let component: ZrqformComponent;
  let fixture: ComponentFixture<ZrqformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZrqformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZrqformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
