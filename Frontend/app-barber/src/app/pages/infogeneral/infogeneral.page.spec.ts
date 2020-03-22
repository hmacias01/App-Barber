import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfogeneralPage } from './infogeneral.page';

describe('InfogeneralPage', () => {
  let component: InfogeneralPage;
  let fixture: ComponentFixture<InfogeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfogeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfogeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
