/**
 * Created by tariq on 12/6/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';


@Injectable()
export class TripService{
  domain = environment.baseUrl;

  constructor(private http:Http){

  }

  findTripById(tripId:string){
    var url = this.domain+"/api/trip/"+tripId;
    return this.http.get(url)
      .map((response:Response)=>{
        return response.json();
      });
  }
  findTripByUser(userId:string) {
    var url = this.domain+"/api/user/"+userId+"/trip";
    return this.http.get(url)
      .map((response:Response)=>{
        return response.json();
      });
  }

  createTrip(userId:string,trip:any){
    var url = this.domain+"/api/user/"+userId+"/trip";
    return this.http.post(url,trip)
      .map((response:Response)=>{
        return response.json();
      });
  }

  updateTrip(tripId:String, trip:any){

    var url = this.domain+"/api/trip/"+tripId;
    console.log("client   :  "+url);
    return this.http.put(url,trip)
      .map((response:Response)=>{
        return response.json();
      });
  }

  deleteTrip(tripId:String){
    var url = this.domain+"/api/trip/"+tripId;
    return this.http.delete(url)
      .map((response:Response)=>{
        return response.json();
      });
  }

}
