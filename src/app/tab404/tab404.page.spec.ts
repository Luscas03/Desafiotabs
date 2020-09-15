import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab404Page } from './tab404.page';

describe('Tab404Page', () => {
  let component: Tab404Page;
  let fixture: ComponentFixture<Tab404Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab404Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
