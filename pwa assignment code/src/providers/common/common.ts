// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonProvider {
    masterData: any = {
        bookings:[],
        movies:[]
    };
    selectedMovie: any;
    selectedDay: any;
    selectedTime: any;
    selectedSeats = [];
    filmTime: any;
    userData: any;
    filmData: any;
    data: any;
    total: any;
    loginData: any;
    redirectUrl: string; as: any;
    pincode: any;
    photo_status: any;
    seats: any;
    serverUrl = 'https://college-movies.herokuapp.com/';
    //serverUrl = 'http://church.dreamindia.in/church-server/';
    //serverUrl= 'shopping-server/'     ///for live build
    // serverUrl = 'http://admin.betheljnpc.org/jnpc-server/';
    nodeServerUrl = 'http://www.delnie.com:3000/';
    constructor(private _http: Http) {
        this.getMasterData();
    }

    public upload(url, formdata: any) {
        let _url: string = this.serverUrl + url;
        return this._http.post(_url, formdata)
        // .catch(this.handleError);
    }
   


    toServer(method, path, params) {

        var url = this.serverUrl;
        url = url + path;
        if (method == 'post') {
            let headers = new Headers();
            //  headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append('Content-Type', 'application/json');
            params = JSON.stringify(params);
            var options = { headers: headers };
            return this._http.post(url, params, options)
                .map(res => res.json())
            // .catch(this.handleError);
        } else if (method == 'get') {
            return this._http.get(url + "" + params)
                .map(res => res.json())
            //  .catch(this.handleError);;
        }
    }

    //      toNodeServer(method, path, params) {
    //          var url = this.nodeServerUrl;
    //          url = url + path;
    //          if (method == 'post') {
    //              let headers = new Headers();
    //              headers.append('Content-Type', 'application/json');
    //              params = JSON.stringify(params);
    //              var options = { headers: headers };
    //              return this._http.post(url, params, options)
    //                  .map(res => res.json())
    //                 // .catch(this.handleError);
    //          } else if (method == 'get') {
    //              return this._http.get(url + "?" + params)
    //                  .map(res => res.json())
    //                 // .catch(this.handleError);;
    //          }
    //      }

    setlogin(loginData) {
        this.loginData = loginData;
        localStorage.setItem("loginData", JSON.stringify(loginData));
    }
    getLogin() {

        if (!this.loginData) {
            return JSON.parse(localStorage.getItem("loginData"));
        } else {
        } return this.loginData;
    }
    setuserdata(userData) {
        this.userData = userData;
        localStorage.setItem("userData", JSON.stringify(userData));
    }
    getuserdata() {
        if (!this.userData) {
            return JSON.parse(localStorage.getItem("userData"));
        } else {
        } return this.userData;
    }

    setMasterData() {
        localStorage.setItem("masterData", JSON.stringify(this.masterData));
    }
    getMasterData() {
        var data=JSON.parse(localStorage.getItem("masterData"));
            if(data){
                this.masterData = data;
            }
    }


    setfilmdata(filmData) {
        this.filmData = filmData;
        localStorage.setItem("filmData", JSON.stringify(filmData));
    }
    getfilmdata() {
        if (!this.filmData) {
            return JSON.parse(localStorage.getItem("filmData"));
        } else {
        } return this.filmData;
    }
    setfilmtime(filmTime) {
        this.filmTime = filmTime;
        localStorage.setItem("filmTime", JSON.stringify(filmTime));
    }
    getfilmtime() {
        if (!this.filmTime) {
            return JSON.parse(localStorage.getItem("filmTime"));
        } else {
        } return this.filmTime;
    }


    setseats(seats) {
        this.seats = seats;
        localStorage.setItem("seats", JSON.stringify(seats));
    }
    getseats() {
        if (!this.seats) {
            return JSON.parse(localStorage.getItem("seats"));
        } else {
        } return this.seats;
    }




}

