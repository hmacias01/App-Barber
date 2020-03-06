import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CortesPage } from './cortes.page';

describe('CortesPage', () => {
  let component: CortesPage;
  let fixture: ComponentFixture<CortesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CortesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
