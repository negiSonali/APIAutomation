import supertest from "supertest";
import {expect} from 'chai';
import { it } from "mocha";
const request  = supertest('https://gorest.co.in/public-api/');
const token = '4ad22b69e891877729c612c961f20ae2f5dd72444b584dcfe7c6c7ac920c4933';

describe('Users', function() 
{
    // all the users
    /*it('GET/users', (done) =>{
        request
        .get(`users?access-token=${token}`).end((err,res) =>{
            console.log(err);
            console.log(res.body);
            //console.log(Object.keys(request));
            expect(res.body.data).to.not.be.empty;
            //expect(res.body.data).to.be.empty;
            done(); // handles aynschronous behavior
        });
    });*/
   // using RETURN
    it('GET/users',() => { 
        //handles aynschronous behavior (returning the promise)
        return request.get(`users?access-token=${token}`)
        .then((res)=>{       
            console.log(res.body);     
            expect(res.body.data).to.not.be.empty;           
        });

    });

    // GET FOR SPECIFIC USER ON BASIS OF ID

    it('GET /users/:id',async () => {
        return await request.get(`users/6955829?acces-token=${token}`)
        .then((res) => {
            //expect(res.body.data).to.not.be.empty;

            console.log(res.body);
            expect(res.body.data.id).equals(6952802);
        });
    });

   
//4ad22b69e891877729c612c961f20ae2f5dd72444b584dcfe7c6c7ac920c4933

    });
