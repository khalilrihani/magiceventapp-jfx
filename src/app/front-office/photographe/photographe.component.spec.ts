import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographeComponent } from './photographe.component';

describe('PhotographeComponent', () => {
  let component: PhotographeComponent;
  let fixture: ComponentFixture<PhotographeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
