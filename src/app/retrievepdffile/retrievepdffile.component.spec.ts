import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievepdffileComponent } from './retrievepdffile.component';

describe('RetrievepdffileComponent', () => {
  let component: RetrievepdffileComponent;
  let fixture: ComponentFixture<RetrievepdffileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievepdffileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievepdffileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
