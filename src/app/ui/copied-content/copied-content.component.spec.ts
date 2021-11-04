import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiedContentComponent } from './copied-content.component';

describe('CopiedContentComponent', () => {
  let component: CopiedContentComponent;
  let fixture: ComponentFixture<CopiedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
