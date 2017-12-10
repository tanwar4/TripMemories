/**
 * Created by tariq on 12/6/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';


@Injectable()
export class FeedService{
  domain = environment.baseUrl;

  constructor(private http:Http){

  }
  getUserFeeds(user:any){
    var url = this.domain+"/api/feed/"+user._id;
    return this.http.get(url)
      .map((response:Response)=>{
        return response.json();
      });
  }

  getTrendingFeeds(){
    var url = this.domain+"/api/feed";
     return this.http.get(url)
     .map((response:Response)=>{
     return response.json();
     });
  }


}
