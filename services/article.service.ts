import { Injectable } from '@angular/core';
import { Article } from '../model/article.model'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  apiURL: string ='http://localhost:8080/articles/api/';
 /* apiURLL: string = 'http://localhost:8080/articles/api/';
  apiURLLL: string = 'http://localhost:8080/articles/api';*/

  articles: Article[] ; //tableau des articles 

  //article : Article; 

  constructor(private http :  HttpClient) { 

  /*  this.articles = [

      { idArticle : 1, titre : "CORONAVIRUS  Tunis  123", description : "Covid-19 : La Tunisie accélère sa campagne de vaccination", dateCreation : new Date("06/12/2021")},
      { idArticle : 2, titre : "Elections en Libye ", description : "A mois de 3 semaines d’une élection clé en Libye, presqu’aucun bruit", dateCreation : new Date("07/12/2021")},
      { idArticle : 3, titre : "Club Africain ", description : "Après avoir échoué son test avec les français du Stade Malherbe Caen FC", dateCreation : new Date("06/12/2021")}
   ]; */
  }

  listeArticle(): Observable<Article[]>{
  //lancer cette adresse 
  return this.http.get<Article[]>(this.apiURL); 
}

ajouterArticle(article : Article): Observable<Article> {
return this.http.post<Article>(this.apiURL , article ,httpOptions);  
}


supprimerArticle( id : number){
  //supprimer le produit prod du tableau produits
  const url=  `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);

  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  
  // consulterArticle(id:number): Article{
  //   return this.articles.find(p => p.idArt == id);
   
  //   }

  consulterArticle(id: number): Observable<Article>
   {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Article>(url);
    
   }

updateArticle(art:Article) : Observable<Article>
{
return this.http.put<Article>(this.apiURL, art, httpOptions);
}

trierArticles(){
  this.articles = this.articles.sort((n1,n2) => {
  if (n1.idArt > n2.idArt) {
  return 1;
  }
  if (n1.idArt < n2.idArt) {
  return -1;
  }
  return 0;
  });
  }
  

    
}
