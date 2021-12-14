import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model'; 
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {

  articles : Article[]; 
 

  constructor(private articleService: ArticleService ,  private router :Router) {

//    this.articles = articleService.listeArticle(); 


    
   }
 //subscribe car methode d'observable 
  ngOnInit(): void {
    this.articleService.listeArticle().subscribe(arts => {
      console.log(arts); 
      this.articles = arts ; 
    
  });
  }
  supprimerArticle(art  : Article )
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.articleService.supprimerArticle(art.idArt).subscribe(() => {
    console.log("Article supprimer ");
    this.SuprimerArticleDuTableau(art); 
    });
  }
  
    // this.router.navigate(['articles']).then(() => {
    // window.location.reload();
    //});
    SuprimerArticleDuTableau(art : Article) {
      this.articles.forEach((cur, index) => {
      if(art.idArt=== cur.idArt) {
      this.articles.splice(index, 1);
      }
      });
     }
      

}


