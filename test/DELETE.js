import supertest from "supertest";
import { expect } from "chai";
import { it } from "mocha";
//import { describe } from "mocha";
const request  = supertest('https://gorest.co.in/public/v2/');
const token = '4ad22b69e891877729c612c961f20ae2f5dd72444b584dcfe7c6c7ac920c4933';

describe("Users", function(){
    it('DELETE/users/:id', () => {
       
        return request
        .delete('users/6955820')
        .set('Authorization', `Bearer ${token}`)
        .then((res)=>{
            console.log(res.body);
            expect(res.body.code).;
        })
    }    
     );
});
