import supertest from "supertest";
import {expect} from 'chai';
import { it } from "mocha";
const request  = supertest('https://gorest.co.in/public-api/');
const token = '4ad22b69e891877729c612c961f20ae2f5dd72444b584dcfe7c6c7ac920c4933';

let res;
let userID;

describe("API's", function(){
    describe("GET", function(){
        before(async function(){
            res = await request.get(`users?access-token=${token}`);
        });

        it("expect status to be 200", function(){
            expect(res.statusCode).equal(200);
        });
        it("expect response should not be null", function(){
            expect(res.body).to.not.be.null;
        });
    });

    describe("POST", function(){
        const data = {
            email: `nina${Math.random() *10}@email.ca`,
            name: 'Nina',
            gender: 'Female',
            status: 'Inactive'
        };
        before(async function(){
            res = await request.post('users')
            .set('Authorization', `Bearer ${token}`)
            .send(data);
            
            userID = res.body.data.id;
        });  
        it("expect status to be 200", function(){
            expect(res.statusCode).equal(200);
        });
        it("expect response body not to be null", function(){
            expect(res.body.data).to.be.not.null;
        });
        it("expect property name in response ", function(){
            expect(res.body.data).to.have.property('name');
        });
    });

    describe("PUT", function(){
        const data = {
            name: 'Soa2',
            status: 'Active'
        }
        before(async function(){
            res = await request
            .put('users/6955850')
            .set('Authorization', `Bearer ${token}`)
            .send(data);
            
            console.log(res.body);
        });
        it("expect status to be 200", function(){
            expect(res.statusCode).equal(200);
        });
        it("expect status and name in response", function(){
            expect(res.body.data).to.have.property('status');
            expect(res.body.data).to.have.property('name');
        });
    });

    describe("DELETE", function(){
        before(async function(){
            res = await request
            .delete(`users/${userID}`)
            .set('Authorization', `Bearer ${token}`)
            
            console.log(res.body);
        });
        it("expect status to be 204", function(){
            expect(res.body.code).equals(204);

        });
        
    });
});