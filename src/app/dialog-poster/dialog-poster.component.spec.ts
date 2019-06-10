import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPosterComponent } from './dialog-poster.component';

describe('DialogPosterComponent', () => {
  let component: DialogPosterComponent;
  let fixture: ComponentFixture<DialogPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
