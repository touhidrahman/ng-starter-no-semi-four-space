import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ArticleListPageComponent } from './article-list-page.component'

describe('ArticleListPageComponent', () => {
    let component: ArticleListPageComponent
    let fixture: ComponentFixture<ArticleListPageComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArticleListPageComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleListPageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
