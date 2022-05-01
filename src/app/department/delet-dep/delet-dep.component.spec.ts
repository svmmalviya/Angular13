import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletDepComponent } from './delet-dep.component';

describe('DeletDepComponent', () => {
  let component: DeletDepComponent;
  let fixture: ComponentFixture<DeletDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
