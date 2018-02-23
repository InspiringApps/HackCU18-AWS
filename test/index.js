const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('https://yi0qcyt4xg.execute-api.us-east-1.amazonaws.com/dev/');

let cat = {};
let cat2 = {};

describe('API', () => {
    it('should allow user to create a cat', (done) => {
        api.post('cat')
            .set('Accept', 'application/json')
            .send({ name: 'SampleCat', 'imagePath':'https://tests3path.com/image.jpg' })
            .expect(201)
            .end((err, res) => {
                expect(res.body).to.have.property('name');
                expect(res.body.name).to.equal('SampleCat');
                cat = res.body;
                done();
            });
    });

    it('should allow user to update a cat', (done) => {
        api.put('cat')
            .set('Accept', 'application/json')
            .send({ id: cat.id, name: 'SampleCat2', 'imagePath':'https://tests3path.com/image2.jpg' })
            .expect(201)
            .end((err, res) => {
                cat = res.body;
                expect(res.body).to.have.property('name');
                expect(res.body.name).to.equal('SampleCat2');
                done();
            });
    });

    it('should allow user to search for a cat', (done) => {
        api.get('search/' + cat.name)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, res) => {
                expect(res.body).to.have.property('name');
                expect(res.body.name).to.equal('SampleCat2');
                done();
            });
    });

    it('should allow user to delete a cat', (done) => {
        api.delete('cat')
            .set('Accept', 'application/json')
            .send({ id: cat.id })
            .expect(201)
            .end((err, res) => {
                expect(res.body.response).to.be.equal('Cat has been deleted :(');
                done();
            });
    });
});
