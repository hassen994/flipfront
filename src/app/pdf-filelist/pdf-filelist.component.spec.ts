import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFilelistComponent } from './pdf-filelist.component';

describe('PdfFilelistComponent', () => {
  let component: PdfFilelistComponent;
  let fixture: ComponentFixture<PdfFilelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFilelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFilelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
