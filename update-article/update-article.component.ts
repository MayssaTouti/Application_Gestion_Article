import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute ,Router } from '@angular/router';



@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styles: [
  ]
})

export class UpdateArticleComponent implements OnInit {

  currentArticle = new Article();

  constructor(private activatedRoute: ActivatedRoute , private router :Router ,  private articleService : ArticleService ) { }
//execute que je lance mon application 
  ngOnInit(): void {

  this.articleService.consulterArticle(this.activatedRoute.snapshot.params.id).
       subscribe( art =>{ this.currentArticle = art; } ) ;
      
  }

  // updateArticle()
  // {
  // //  console.log(this.currentArticle); 
  // this.articleService.updateArticle(this.currentArticle); 
  // this.router.navigate(["articles"]); 
  
  // }
  updateArticle() {
    this.articleService.updateArticle(this.currentArticle).subscribe(art => {
    this.router.navigate(['articles']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
