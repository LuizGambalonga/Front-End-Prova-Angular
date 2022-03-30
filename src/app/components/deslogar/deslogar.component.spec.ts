import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslogarComponent } from './deslogar.component';

describe('DeslogarComponent', () => {
  let component: DeslogarComponent;
  let fixture: ComponentFixture<DeslogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeslogarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeslogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
