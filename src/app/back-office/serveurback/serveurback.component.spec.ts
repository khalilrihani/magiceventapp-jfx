import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurbackComponent } from './serveurback.component';

describe('ServeurbackComponent', () => {
  let component: ServeurbackComponent;
  let fixture: ComponentFixture<ServeurbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeurbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeurbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
