import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html'
})
export class AddArticleComponent implements OnInit {
  
 newArticle = new Article(); 
 message  : string ; 


  constructor(private articleService : ArticleService ,private router :Router ) { }

  ngOnInit(): void {
  }

    addArticle() {
      this.articleService.ajouterArticle(this.newArticle)
      .subscribe(art => {
        console.log(art);
    

      }); 
      this.router.navigate(['articles']).then(() => {
        window.location.reload();
      }) ; 

    }

}
