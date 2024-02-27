import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchImgComponent } from './search-img.component';

describe('SearchImgComponent', () => {
  let component: SearchImgComponent;
  let fixture: ComponentFixture<SearchImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
