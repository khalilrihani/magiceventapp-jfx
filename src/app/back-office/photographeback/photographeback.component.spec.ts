import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographebackComponent } from './photographeback.component';

describe('PhotographebackComponent', () => {
  let component: PhotographebackComponent;
  let fixture: ComponentFixture<PhotographebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
