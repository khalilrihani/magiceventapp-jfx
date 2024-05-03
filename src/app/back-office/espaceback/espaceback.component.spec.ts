import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacebackComponent } from './espaceback.component';

describe('EspacebackComponent', () => {
  let component: EspacebackComponent;
  let fixture: ComponentFixture<EspacebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
